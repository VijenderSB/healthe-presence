import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://healthe-presence.lovable.app";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  // Build the full breadcrumb list with Home
  const breadcrumbList = [
    { label: "Home", href: "/" },
    ...items
  ];

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbList.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `${BASE_URL}${item.href}` : undefined
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <ol className="flex items-center gap-2 py-3 text-sm overflow-x-auto">
            {breadcrumbList.map((item, index) => (
              <li key={index} className="flex items-center gap-2 whitespace-nowrap">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                )}
                {item.href && index < breadcrumbList.length - 1 ? (
                  <Link 
                    to={item.href} 
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {index === 0 && <Home className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1 text-foreground font-medium">
                    {index === 0 && <Home className="w-4 h-4" />}
                    <span>{item.label}</span>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
