"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Users,
  Calendar,
  Briefcase,
  Clock,
  DollarSign,
  Bell,
  Settings,
  LogOut,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { useRole } from "@/hooks/use-role";

export default function DashboardPage() {
  const router = useRouter();
  const { role } = useRole();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!role && !isLoading) {
      router.push("/profile-setup");
    }
    setIsLoading(false);
  }, [role, router, isLoading]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!role) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r bg-gray-50 md:flex">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold">Milestone Learning</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <div className="mb-6 rounded-lg bg-[#02342E] p-4 text-white">
                <p className="mb-1 text-sm">Welcome back!</p>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-white/20 px-2 py-1 text-xs font-medium">
                    {role}
                  </span>
                </div>
              </div>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Main
              </h2>
              <div className="space-y-1">
                <Link
                  href="/dashboard"
                  className="flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
                {role === "Parent" ? (
                  <>
                    <Link
                      href="/dashboard/sessions"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Learning Sessions
                    </Link>
                    <Link
                      href="/dashboard/tutors"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Find Tutors
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/dashboard/students"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <Users className="mr-2 h-4 w-4" />
                      My Students
                    </Link>
                    <Link
                      href="/dashboard/schedule"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule
                    </Link>
                    <Link
                      href="/dashboard/earnings"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      <DollarSign className="mr-2 h-4 w-4" />
                      Earnings
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Account
              </h2>
              <div className="space-y-1">
                <Link
                  href="/dashboard/settings"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
                <Link
                  href="/logout"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Link>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto">
          <header className="flex h-14 items-center justify-between border-b bg-white px-4 lg:px-6">
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-200"></div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">
                    {role === "Parent" ? "Parent Dashboard" : "Tutor Dashboard"}
                  </p>
                </div>
              </div>
            </div>
          </header>
          <div className="p-4 md:p-6">
            {role === "Parent" ? (
              // Parent Dashboard Content
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Upcoming Sessions
                      </CardTitle>
                      <Calendar className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-gray-500">This week</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Tutors
                      </CardTitle>
                      <GraduationCap className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-gray-500">
                        Working with your children
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Hours Completed
                      </CardTitle>
                      <Clock className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-gray-500">This month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Next Payment
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$320</div>
                      <p className="text-xs text-gray-500">Due May 1, 2025</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              // Tutor Dashboard Content
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Students
                      </CardTitle>
                      <Users className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-gray-500">+2 this month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        This Week's Sessions
                      </CardTitle>
                      <Calendar className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-gray-500">4 remaining</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Hours Taught
                      </CardTitle>
                      <Clock className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">86</div>
                      <p className="text-xs text-gray-500">This month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-sm font-medium">
                        Earnings
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-gray-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$2,480</div>
                      <p className="text-xs text-gray-500">This month</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
