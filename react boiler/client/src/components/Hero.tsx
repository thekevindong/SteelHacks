import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap } from "lucide-react";

export function Hero() {
  const handleGetStarted = () => {
    console.log('Get started clicked');
  };

  const handleViewGithub = () => {
    console.log('View GitHub clicked');
  };

  return (
    <section className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground mb-8">
            <Zap className="mr-2 h-4 w-4" />
            Modern React Boilerplate
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Build Modern Apps
            <br />
            <span className="text-primary">Faster</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto sm:text-xl">
            A production-ready React boilerplate with TypeScript, Tailwind CSS, 
            shadcn/ui components, and Express backend. Start building your next 
            application today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-base hover-elevate active-elevate-2"
              onClick={handleGetStarted}
              data-testid="button-hero-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base hover-elevate active-elevate-2"
              onClick={handleViewGithub}
              data-testid="button-hero-github"
            >
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </div>

          {/* Features highlight */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Fast Setup</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Get started in minutes with our pre-configured development environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Open Source</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Built with modern technologies and best practices from the community
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Production Ready</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Optimized build process and deployment configuration included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}