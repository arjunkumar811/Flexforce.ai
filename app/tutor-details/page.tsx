"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

export default function TutorDetailsPage() {
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [subjects, setSubjects] = useState<string[]>([]);
  const [bio, setBio] = useState("");
  const [rate, setRate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ qualification, experience, subjects, bio, rate });
    // Redirect to preferred time page
    window.location.href = "/preferred-time";
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tutor Details</CardTitle>
          <CardDescription>Tell us about your qualifications and expertise</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="qualification">Highest Qualification</Label>
              <Input
                id="qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                required
                placeholder="e.g., Master's in Mathematics"
                className="rounded-md"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Teaching Experience</Label>
              <Select value={experience} onValueChange={setExperience}>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Select years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0-1 years</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subjects">Subjects You Can Teach</Label>
              <Select value={subjects.join(",")} onValueChange={(value) => setSubjects(value.split(","))}>
                <SelectTrigger className="rounded-md">
                  <SelectValue placeholder="Select subjects" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mathematics">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="geography">Geography</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">About You</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
                placeholder="Tell us about your teaching style and experience"
                className="min-h-[100px] rounded-md"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rate">Hourly Rate ($)</Label>
              <Input
                id="rate"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
                placeholder="Enter your hourly rate"
                className="rounded-md"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" asChild>
                <Link href="/profile-setup">Back</Link>
              </Button>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}