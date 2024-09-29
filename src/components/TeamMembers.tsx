import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const students = [
  {
    name: "Emma Thompson",
    role: "Team Lead",
    description:
      "Coordinating team efforts and ensuring project milestones are met.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Liam Chen",
    role: "Frontend Developer",
    description:
      "Crafting responsive and intuitive user interfaces using React.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sophia Rodriguez",
    role: "Backend Developer",
    description:
      "Designing and implementing robust server-side logic and APIs.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Noah Patel",
    role: "Project Manager",
    description:
      "Overseeing project timeline, resources, and stakeholder communication.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Olivia Kim",
    role: "Database Specialist",
    description: "Optimizing database performance and ensuring data integrity.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ethan Nguyen",
    role: "DevOps Engineer",
    description: "Managing deployment pipelines and infrastructure as code.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function TeamMembers() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 p-4">
      <h2 className="mb-8 text-center text-3xl font-bold">Your Team Here</h2>
      {students.map((student, index) => (
        <Card key={index} className="flex flex-col items-center md:flex-row">
          <CardHeader className="md:w-1/3">
            <Avatar className="h-24 w-24">
              <AvatarImage src={student.avatar} alt={student.name} />
              <AvatarFallback>
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="md:w-2/3">
            <CardTitle className="mb-2">{student.name}</CardTitle>
            <p className="mb-2 text-sm font-semibold text-muted-foreground">
              {student.role}
            </p>
            <p className="text-sm text-muted-foreground">
              {student.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
