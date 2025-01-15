import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function Home() {
  return (
    <div className="p-2">
      <StudentForm />
      <div className="mt-4">
        <StudentList />
      </div>
    </div>
  );
}
