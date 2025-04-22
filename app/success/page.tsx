import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="container mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Setup Complete!</CardTitle>
          <CardDescription className="text-lg">
            Your profile has been successfully created
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mt-6 space-y-4">
            <p className="text-muted-foreground">
              We'll match you with the perfect tutor based on your preferences.
              You'll receive an email shortly with next steps.
            </p>
            <div className="flex flex-col gap-4">
              <Button size="lg" asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
