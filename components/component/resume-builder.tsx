/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NsJfjOSpGr9
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";

export function ResumeBuilder() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-1/4 bg-gray-800 p-8 text-white">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profiles</h2>
          <Button className="mb-4" variant="secondary">
            + Add a new item
          </Button>
          <form className="space-y-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Address" />
            <Textarea placeholder="Profile Summary" />
          </form>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Experience</h2>
          <Button className="mb-4" variant="secondary">
            + Add a new item
          </Button>
          <form className="space-y-4">
            <Input placeholder="Company Name" />
            <Input placeholder="Job Title" />
            <Input placeholder="Duration" />
            <Textarea placeholder="Job Description" />
          </form>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <Button className="mb-4" variant="secondary">
            + Add a new item
          </Button>
          <form className="space-y-4">
            <Input placeholder="Institution Name" />
            <Input placeholder="Degree" />
            <Input placeholder="Years Attended" />
          </form>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <Button className="mb-4" variant="secondary">
            + Add a new item
          </Button>
          <form className="space-y-4">
            <Input placeholder="Skill Name" />
          </form>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Languages</h2>
          <Button className="mb-4" variant="secondary">
            + Add a new item
          </Button>
          <form className="space-y-4">
            <Input placeholder="Language" />
          </form>
        </section>
      </aside>
      <main className="w-1/2 bg-white p-8">
        <h1 className="text-3xl font-bold mb-6">John Doe's Resume</h1>
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <p className="mb-6">
          Enthusiastic and highly motivated professional with excellent
          communication skills and a strong background in web development. Eager
          to bring top-level skills to a dynamic team.
        </p>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="font-semibold">Senior Web Developer</h3>
          <p className="text-sm">Tech Solutions, Inc. - Jan 2018 - Present</p>
          <ul className="list-disc pl-5">
            <li>
              Lead the development of a new e-commerce platform, increasing
              company revenue by 20%.
            </li>
            <li>
              Managed a team of 5 junior developers, providing mentorship and
              guidance on best practices.
            </li>
          </ul>
        </div>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="font-semibold">B.S. in Computer Science</h3>
          <p className="text-sm">University of Technology - 2010 - 2014</p>
        </div>
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc pl-5 mb-6">
          <li>Full-stack web development</li>
          <li>User interface design</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4">Languages</h2>
        <ul className="list-disc pl-5 mb-6">
          <li>English (Native)</li>
          <li>Spanish (Fluent)</li>
        </ul>
      </main>
      <aside className="w-1/4 bg-gray-900 p-8 text-white">
        <h2 className="text-xl font-semibold mb-4 text-center">Template</h2>
        <div className="flex flex-col space-y-4">
          <Card className="bg-gray-700">
            <CardContent>
              <Avatar>
                <AvatarImage
                  alt="John Doe"
                  src="/placeholder.svg?height=80&width=80"
                />
              </Avatar>
              <h3 className="text-lg font-semibold mt-4 mb-2">John Doe</h3>
              <p className="text-sm">Senior Web Developer</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-700">
            <CardContent>
              <Avatar>
                <AvatarImage
                  alt="Jane Smith"
                  src="/placeholder.svg?height=80&width=80"
                />
              </Avatar>
              <h3 className="text-lg font-semibold mt-4 mb-2">Jane Smith</h3>
              <p className="text-sm">Product Manager</p>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  );
}
