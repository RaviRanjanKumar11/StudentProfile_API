import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Student Management</h1>
      <p className="text-lg text-gray-700 mb-8">Manage students with ease.</p>
      <div className="space-x-4">
        <Link href="/StudentForm">
          <a className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-all">
            Register Student
          </a>
        </Link>
        <Link href="/StudentList">
          <a className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition-all">
            View Student Details
          </a>
        </Link>
      </div>
    </div>
  );
}
