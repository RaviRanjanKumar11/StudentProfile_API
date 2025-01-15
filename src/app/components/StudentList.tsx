"use client";
import { useEffect, useState } from "react";

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  age: number;
  imageUrl: string;
}

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("/api/students");
      const data = await res.json();
      console.log("data",data);
      setStudents(data.students);
    };
    fetchStudents();
  }, []);
    
  return (
    <div>
  {/* Header */}
  <div className="flex justify-center">
    <h1 className="text-3xl font-bold mb-4">Details</h1>
  </div>

  {/* Table for Desktop */}
  <div className="hidden lg:block">
    <table className="w-3/4 mx-auto bg-white border border-gray-300 shadow-md rounded-lg">
      <thead className="bg-blue-500 text-white font-mono">
        <tr>
          <th className="py-2 px-2 text-left">ID</th>
          <th className="py-2 px-2 text-left">Name</th>
          <th className="py-2 px-2 text-left">Email</th>
          <th className="py-2 px-2 text-left">Course</th>
          <th className="py-2 px-2 text-left">Age</th>
          <th className="py-2 px-2 text-left">Image</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-blue-100 transition-colors`}
          >
            <td className="py-3 px-4">{index + 1}</td>
            <td className="py-3 px-4">{student.name}</td>
            <td className="py-3 px-4">{student.email}</td>
            <td className="py-3 px-4">{student.course}</td>
            <td className="py-3 px-4">{student.age}</td>
            <td className="py-3 px-4">
              <img src={student.imageUrl} alt={student.name} className="student-img" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Card Layout for Mobile */}
  <div className="lg:hidden space-y-4">
    {students.map((student, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 mx-4 border border-gray-400 hover:shadow-lg transition-all"
      >
        <div className="flex justify-between mb-2">
          <h2 className="text-lg font-bold text-blue-500">{student.name}</h2>
          <p className="text-gray-500 font-mono">#{index + 1}</p>
        </div>
        <div className="text-sm space-y-1">
          <p>
            <span className="font-bold">Email:</span> {student.email}
          </p>
          <p>
            <span className="font-bold">Course:</span> {student.course}
          </p>
          <p>
            <span className="font-bold">Age:</span> {student.age} years old
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
 
  );
};

export default StudentList;