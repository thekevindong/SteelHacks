import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tags?: string[];
  isPopular?: boolean;
}

export function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  tags = [], 
  isPopular = false 
}: FeatureCardProps) {
  return (
    <Card className="relative hover-elevate transition-all duration-200" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {isPopular && (
        <Badge className="absolute -top-2 left-4 bg-primary text-primary-foreground">
          Popular
        </Badge>
      )}
      <CardHeader className="pb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}