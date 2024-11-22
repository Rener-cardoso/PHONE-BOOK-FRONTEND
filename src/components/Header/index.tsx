import { BookUser } from "lucide-react";

export function Header() {
  return (
    <header className="text-4xl font-bold flex items-center gap-[1rem] justify-center">
      <BookUser height={55} width={55} />
      <h1>Phone Book App</h1>
    </header>
  )
}