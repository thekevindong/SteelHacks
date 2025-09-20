import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Home, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-2">404</h1>
          <h2 className="text-lg font-semibold text-foreground mb-4">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or may have been moved.
          </p>
          
          <div className="space-y-3">
            <Link href="/">
              <Button 
                className="w-full hover-elevate active-elevate-2" 
                data-testid="button-home"
              >
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="w-full hover-elevate active-elevate-2"
              onClick={() => window.history.back()}
              data-testid="button-back"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
