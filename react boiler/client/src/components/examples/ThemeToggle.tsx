import { ThemeProvider } from '../ThemeProvider';
import { ThemeToggle } from '../ThemeToggle';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-4 bg-background text-foreground">
        <div className="flex items-center gap-4">
          <span>Theme toggle:</span>
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}