"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfileSetupPage() {
  const router = useRouter();

  const handleRoleSelect = (role: "Parent" | "Tutor") => {
    // Store the role in localStorage (or your preferred state management solution)
    localStorage.setItem("userRole", role);

    // Navigate to the appropriate details page
    if (role === "Parent") {
      router.push("/personal-details");
    } else {
      router.push("/tutor-details");
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Set Up Your Profile</CardTitle>
          <CardDescription>Choose your role to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Button
              variant="outline"
              className="h-32 flex-col gap-2 hover:border-primary hover:bg-primary/5"
              onClick={() => handleRoleSelect("Parent")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <span className="font-medium">I'm a Parent</span>
              <span className="text-xs text-muted-foreground">
                Looking for a tutor for my child
              </span>
            </Button>
            <Button
              variant="outline"
              className="h-32 flex-col gap-2 hover:border-primary hover:bg-primary/5"
              onClick={() => handleRoleSelect("Tutor")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="m18 16 4-4-4-4" />
                <path d="m6 8-4 4 4 4" />
                <path d="m14.5 4-5 16" />
              </svg>
              <span className="font-medium">I'm a Tutor</span>
              <span className="text-xs text-muted-foreground">
                Ready to help students learn
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
