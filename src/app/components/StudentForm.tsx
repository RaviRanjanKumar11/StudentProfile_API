"use client";

import { useState } from "react";
import { UserRoundPlus } from "lucide-react";
import { set } from "mongoose";

const StudentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");
  const [profile, setProfile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("course", course);
    formData.append("age", age);
    if (profile) {
      formData.append("image", profile); // Append the selected file
    }
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("data Is", data);

      if (response.ok) {
        setMessage(data.message);
        setName("");
        setEmail("");
        setCourse("");
        setAge("");
        setProfile(null);
      } else {
        setMessage(data.error || " failed to register student");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  };

  return (
    <div className="md:w-1/3 w-full mx-auto md:mt-4 mt-0 bg-slate-100 p-1 rounded shadow">
      <form className="bg-gray-100 p-4 rounded shadow" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4 text-center font-sans">
          Student Registration
        </h1>
        <div className="mb-4">
          <label className="block font-bold">Name</label>
          <input
            type=""
            className="border w-full p-2 border-blue-300 rounded-md"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Email</label>
          <input
            type="email"
            className="border w-full p-2 border-blue-300 rounded-md"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Course</label>
          <input
            type="text"
            className="border w-full p-2 border-blue-300 rounded-md"
            value={course}
            placeholder="Enter your course"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold">Age</label>
          <input
            type="number"
            className="border w-full p-2 border-blue-300 rounded-md"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="mb-4">
  <label className="block font-bold">Image</label>
  <input
    type="file"
    className="border w-full p-2 border-blue-300 rounded-md"
    onChange={(e) => {
      if (e.target.files && e.target.files[0]) {
        setProfile(e.target.files[0]);
      }
    }} // Save file to state
  />
</div>


        <div className="flex justify-center items-center space-x-2">
          <button
            type="submit"
            className="bg-blue-600 text-white hover:text-blue-800 hover:bg-white p-1 border border-pink-600 rounded flex items-center"
          >
            Register <UserRoundPlus size={20} className="ml-1" />
          </button>
        </div>
      </form>
      {message && (
        <p className="mt-4 p-2 bg-blue-100 text-red-600">{message}</p>
      )}
    </div>
  );
};

export default StudentForm;
