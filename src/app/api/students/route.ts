import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Student from "@/models/Students";

export async function POST(req: Request) {
     try {
       await connectToDatabase();
       const body = await req.json();
   
       const { name, email, course, age, imageUrl } = body;
   
       if (!name || !email || !course || !age || !imageUrl) {
         return NextResponse.json({ error: "All fields are required" }, { status: 400 });
       }
   
       const newStudent = new Student({ name, email, course, age, imageUrl });
       await newStudent.save();
   
       return NextResponse.json({ message: "Student registered successfully", student: newStudent });
     } catch (error: any) {
       console.error("Error during student registration:", error);
       return NextResponse.json({ error: "Failed to register student", details: error.message }, { status: 500 });
     }
   }
   

export async function GET() {
  try {
    await connectToDatabase();
    const students = await Student.find();
    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
  }
}
