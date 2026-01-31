import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  backgroundImage: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const PageHero = ({
  badge,
  title,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
}: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            {badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Button variant="cta" size="xl" asChild>
                  <Link to={primaryCta.link}>{primaryCta.text}</Link>
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" size="xl" asChild>
                  <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
