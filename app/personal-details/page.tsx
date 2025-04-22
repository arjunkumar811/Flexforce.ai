"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PersonalDetailsPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ firstName, lastName, email, phone });
    // Redirect to student details page
    window.location.href = "/student-details";
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
          <CardDescription>Tell us about yourself</CardDescription>
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

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-md"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="location">
                  Location
                </label>
                <Input id="location" placeholder="Enter your city" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="address">
                Address
              </label>
              <Input id="address" placeholder="Enter your address" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="occupation">
                Occupation
              </label>
              <Input id="occupation" placeholder="What do you do?" />
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
