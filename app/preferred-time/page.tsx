"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PreferredTimePage() {
  const [days, setDays] = useState<string[]>([]);
  const [time, setTime] = useState("");

  const handleDayToggle = (day: string) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ days, time });
    // Redirect to success page
    window.location.href = "/success";
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Preferred Time Slots</CardTitle>
          <CardDescription>
            Select your preferred tutoring schedule
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="mb-4 text-sm font-medium">Days Available</h3>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ].map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        id={day.toLowerCase()}
                        checked={days.includes(day)}
                        onCheckedChange={() => handleDayToggle(day)}
                      />
                      <label
                        htmlFor={day.toLowerCase()}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {day}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Preferred Start Time
                  </label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => (
                        <SelectItem key={i} value={`${i + 8}:00`}>
                          {`${i + 8}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Session Duration
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <textarea
                  className="w-full rounded-md border p-3"
                  rows={3}
                  placeholder="Any specific requirements or preferences..."
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline" asChild>
                <Link href="/student-details-added">Back</Link>
              </Button>
              <Button type="submit">Complete Setup</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
