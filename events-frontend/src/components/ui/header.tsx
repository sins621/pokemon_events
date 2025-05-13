import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function Header() {
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="w-full border-b bg-background shadow-sm">
      <div className="mx-auto flex h-16 max-w-7x1 items-center justify-between px-4">
        <h1 className="text-lg font-semibold">Calendar Events</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5"/>}
          </Button>
        </div>
      </div>
    </header>
  );
}
