import { Checkbox } from "@/components/ui/checkbox";

export default function Component() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-6 text-center text-2xl font-bold">
        How to Write a Web App
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-red-100 p-4">
          <h2 className="mb-2 text-lg font-semibold text-red-800">
            Super Uber Cool Hax0r
          </h2>
          <ul className="space-y-1 text-sm">
            <ListItem>Start coding immediately</ListItem>
            <ListItem>Implement complex features on your own</ListItem>
            <ListItem>Push lots of code very quickly</ListItem>
            <ListItem>Use obscure libraries</ListItem>
            <ListItem>More code {">"} more documentation</ListItem>
            <ListItem>Push directly to main</ListItem>
            <ListItem>Implement your own auth</ListItem>
            <ListItem>Reinvent the wheel</ListItem>
            <ListItem>Optimize ASAP</ListItem>
            <ListItem>
              Become a <strong>10X ninja</strong>, why can't others be so fast?
            </ListItem>
          </ul>
        </div>
        <div className="rounded-lg bg-green-100 p-4">
          <h2 className="mb-2 text-lg font-semibold text-green-800">
            "Engineered" Approach
          </h2>
          <ul className="space-y-1 text-sm">
            <ListItem>Create Figma mockups and get team feedback</ListItem>
            <ListItem>Align team on project goals and scope</ListItem>
            <ListItem>
              Choose technologies based on team expertise and project needs
            </ListItem>
            <ListItem>Choose a version control strategy</ListItem>
            <ListItem>Have a CI/CD pipeline</ListItem>
            <ListItem>Write documentation</ListItem>
            <ListItem>Use formatting and linting tools</ListItem>
            <ListItem>Plan for scalability and maintainability</ListItem>
            <ListItem>
              Schedule regular code reviews and pair programming sessions
            </ListItem>
            <ListItem>
              Write code like some sort of obsolete dinosaur 🦖
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start space-x-3">
      <Checkbox id={children?.toString()} />
      <label htmlFor={children?.toString()} className="text-sm leading-tight">
        {children}
      </label>
    </li>
  );
}
