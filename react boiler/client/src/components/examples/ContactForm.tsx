import { ThemeProvider } from '../ThemeProvider';
import { ContactForm } from '../ContactForm';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function ContactFormExample() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="p-8 bg-background min-h-screen flex items-center justify-center">
          <ContactForm />
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}