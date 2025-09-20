import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Palette, 
  Zap, 
  Shield, 
  Rocket, 
  Users,
  Github,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "TypeScript First",
    description: "Built with TypeScript for better development experience and fewer runtime errors.",
    tags: ["TypeScript", "Type Safety", "IntelliSense"],
    isPopular: true,
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Powered by Vite for instant hot reload and optimized production builds.",
    tags: ["Vite", "HMR", "Fast Builds"],
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Pre-built components with Tailwind CSS and shadcn/ui for rapid development.",
    tags: ["Tailwind CSS", "shadcn/ui", "Dark Mode"],
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Best practices baked in with ESLint, testing setup, and deployment configuration.",
    tags: ["ESLint", "Testing", "CI/CD"],
  },
  {
    icon: Rocket,
    title: "Full Stack",
    description: "Complete solution with Express backend, database integration, and API routes.",
    tags: ["Express", "Database", "REST API"],
  },
  {
    icon: Users,
    title: "Developer Friendly",
    description: "Comprehensive documentation and examples to get you started quickly.",
    tags: ["Documentation", "Examples", "Community"],
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need to build modern apps
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our React boilerplate includes all the tools and best practices 
              you need to ship your next application faster.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                tags={feature.tags}
                isPopular={feature.isPopular}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Ready to start building?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with our React boilerplate today and ship your next application in record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-base hover-elevate active-elevate-2"
              data-testid="button-cta-get-started"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base hover-elevate active-elevate-2"
              data-testid="button-cta-github"
            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 React Boilerplate. Built with ❤️ using modern web technologies.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}