import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
  Search,
  Filter,
  Plus,
} from "lucide-react";

export default function TalentPoolPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden w-64 flex-col border-r bg-gray-50 md:flex">
          <div className="flex h-14 items-center border-b px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold">Flexforce.ai</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-auto py-4">
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Main
              </h2>
              <div className="space-y-1">
                <Link
                  href="/dashboard"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <BarChart className="mr-2 h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/talent"
                  className="flex items-center rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Talent Pool
                </Link>
                <Link
                  href="/dashboard/projects"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Projects
                </Link>
                <Link
                  href="/dashboard/schedule"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule
                </Link>
              </div>
            </div>
            <div className="px-4 py-2">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                Settings
              </h2>
              <div className="space-y-1">
                <Link
                  href="/dashboard/settings"
                  className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
                <button className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </aside>
        {/* Main content */}
        <main className="flex-1">
          <header className="flex h-14 items-center justify-between border-b px-4">
            <span className="text-sm text-gray-500">Welcome back!</span>
            <div className="flex items-center gap-4">
              <Button size="icon" variant="ghost">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
              </Button>
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </header>
          {/* Talent Pool content */}
          <div className="p-4 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold">Talent Pool</h1>
                <p className="text-gray-500">
                  Manage and find the right talent for your projects
                </p>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add New Talent
              </Button>
            </div>
            <div className="mt-6 flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search talent by name, skills, or location..."
                  className="pl-8"
                />
              </div>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "UI Designer",
                  skills: ["UI/UX", "Figma", "Adobe XD"],
                  location: "New York, USA",
                  rate: "$65/hr",
                  availability: "Available",
                  rating: 4.9,
                },
                {
                  name: "Sarah Williams",
                  role: "Frontend Developer",
                  skills: ["React", "TypeScript", "Tailwind"],
                  location: "London, UK",
                  rate: "$75/hr",
                  availability: "Busy",
                  rating: 4.8,
                },
                {
                  name: "Michael Chen",
                  role: "Full Stack Developer",
                  skills: ["Node.js", "React", "MongoDB"],
                  location: "Singapore",
                  rate: "$85/hr",
                  availability: "Available",
                  rating: 4.7,
                },
              ].map((talent, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{talent.name}</CardTitle>
                        <p className="text-sm text-gray-500">{talent.role}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          talent.availability === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {talent.availability}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Skills</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {talent.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-gray-100 px-2 py-1 text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium">
                            {talent.rate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            {talent.location}
                          </span>
                        </div>
                      </div>
                      <Button className="w-full">View Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
