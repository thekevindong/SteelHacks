import { ThemeProvider } from '../ThemeProvider';
import { FeatureCard } from '../FeatureCard';
import { Zap, Shield, Palette } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <FeatureCard
            icon={Zap}
            title="Fast Development"
            description="Built with Vite for lightning-fast development experience with hot module replacement and optimized builds."
            tags={["Vite", "HMR", "TypeScript"]}
            isPopular={true}
          />
          <FeatureCard
            icon={Shield}
            title="Type Safety"
            description="Full TypeScript support with strict type checking to catch errors early and improve code quality."
            tags={["TypeScript", "ESLint", "Type Safety"]}
          />
          <FeatureCard
            icon={Palette}
            title="Modern UI"
            description="Beautiful, accessible components built with Tailwind CSS and shadcn/ui with dark mode support."
            tags={["Tailwind", "shadcn/ui", "Dark Mode"]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}