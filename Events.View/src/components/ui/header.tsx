import { ModeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="bg-background w-full border-b shadow-sm">
      <div
        className="max-w-7x1 mx-auto flex h-16 items-center justify-between
          px-4"
      >
        <h1 className="text-foreground text-lg font-semibold">
          Calendar Events
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </header>
  );
}
