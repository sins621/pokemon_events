import { ModeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="bg-[color:var(--primary)] w-full border-b shadow-inner">
      <div className="mx-auto flex h-16 items-center justify-between px-4">
        <h1
          className="text-[color:var(--primary-foreground)] text-lg
            font-semibold"
        >
          Calendar Events
        </h1>
        <ModeToggle />
      </div>
    </header>
  );
}
