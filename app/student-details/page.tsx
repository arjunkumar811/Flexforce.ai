"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function StudentDetailsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubjects] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ firstName, lastName, school, grade, subjects });
    // Redirect to student details added page
    window.location.href = "/student-details-added";
  };

  const handleAddAnotherStudent = () => {
    // Logic to add another student form
    console.log("Add another student");
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Student Details</CardTitle>
          <CardDescription>Tell us about your child</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input
                  id="first-name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="rounded-md"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input
                  id="last-name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="school">School</Label>
              <Input
                id="school"
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                required
                className="rounded-md"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grade">Grade</Label>
              <Select value={grade} onValueChange={setGrade}>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Grade {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subjects">Subjects Needing Help</Label>
              <Select value={subjects} onValueChange={setSubjects}>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="science">Science</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="languages">Languages</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goals">Learning Goals</Label>
              <Input
                id="goals"
                type="text"
                placeholder="What are your child's learning goals?"
                className="rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" asChild>
                <Link href="/personal-details">Back</Link>
              </Button>
              <Button
                type="submit"
                className="rounded-md bg-[#02342E] text-white hover:bg-[#02342E]/90"
              >
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
