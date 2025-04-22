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
import { CheckCircle } from "lucide-react";

export default function StudentDetailsAddedPage() {
  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle>Student Added Successfully</CardTitle>
          <CardDescription>
            Would you like to add another student or continue?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-6 flex flex-col gap-4">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/student-details">Add Another Student</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/preferred-time">Continue to Preferred Time</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
