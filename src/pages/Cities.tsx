import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { cities, getStates, getCitiesByState, getCitiesByTier } from "@/data/cities";
import { ArrowRight, MapPin, Building2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroDoctor from "@/assets/hero-doctor.jpg";
import { SITE_CONFIG } from "@/lib/constants";

const Cities = () => {
  const states = getStates();
  const tier1Cities = getCitiesByTier(1);
  const tier2Cities = getCitiesByTier(2);
  const tier3Cities = getCitiesByTier(3);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Medical Marketing in 200+ Indian Cities | Find Your City | Transess</title>
        <meta name="description" content="Medical digital marketing services in 200+ Indian cities. From Mumbai to Noida, Delhi to Bangalore - find healthcare SEO, social media & branding for doctors in your city!" />
        <meta name="keywords" content="medical marketing India cities, healthcare marketing by location, doctor marketing Mumbai, hospital marketing Delhi, clinic marketing Bangalore, medical SEO by city" />
        <link rel="canonical" href={`${SITE_CONFIG.BASE_URL}/cities`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Medical Marketing in 200+ Indian Cities | Transess" />
        <meta property="og:description" content="Healthcare marketing across 200+ cities. Find services in your location!" />
        <meta property="og:url" content={`${SITE_CONFIG.BASE_URL}/cities`} />
        <meta property="og:site_name" content="Transess - Medical Digital Marketing" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content={`${SITE_CONFIG.BASE_URL}/og-image.png`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Marketing in 200+ Indian Cities" />
        <meta name="twitter:description" content="Healthcare marketing across India. SEO, social media & branding." />
        
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Navbar />
      <Breadcrumbs items={[{ label: "Cities" }]} />
      <PageHero
        badge="200+ Cities"
        title="Medical Digital Marketing Across India"
        description="From metros to emerging cities, we help healthcare providers build powerful digital presence and attract more patients."
        backgroundImage={heroDoctor}
        primaryCta={{ text: "Get Free Consultation", link: "/contact" }}
        secondaryCta={{ text: "View Services", link: "/services" }}
      />

      {/* Metro Cities Highlight */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Metro Cities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Major Healthcare Markets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized medical marketing for India's largest metropolitan areas
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tier1Cities.slice(0, 8).map((city) => (
              <Link 
                key={city.id}
                to={`/${city.slug}`}
                className="group p-6 bg-card rounded-xl border border-border hover:shadow-xl hover:border-primary/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Tier 1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{city.state} • {city.population}</p>
                <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities by Tab */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              All Locations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your City
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Medical digital marketing services available across {cities.length} cities in India
            </p>
          </div>

          <Tabs defaultValue="by-tier" className="max-w-6xl mx-auto">
            <TabsList className="flex flex-wrap justify-center mb-8 gap-2">
              <TabsTrigger value="by-tier" className="px-6">By City Tier</TabsTrigger>
              <TabsTrigger value="by-state" className="px-6">By State</TabsTrigger>
              <TabsTrigger value="all" className="px-6">All Cities A-Z</TabsTrigger>
            </TabsList>

            {/* By Tier */}
            <TabsContent value="by-tier">
              <div className="space-y-12">
                {/* Tier 1 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Tier 1 - Metro Cities</h3>
                    <span className="text-sm text-muted-foreground">({tier1Cities.length} cities)</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tier1Cities.map((city) => (
                      <Link 
                        key={city.id}
                        to={`/${city.slug}`}
                        className="group p-4 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{city.name}</h4>
                            <p className="text-xs text-muted-foreground">{city.state}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tier 2 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Tier 2 - Major Cities</h3>
                    <span className="text-sm text-muted-foreground">({tier2Cities.length} cities)</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tier2Cities.map((city) => (
                      <Link 
                        key={city.id}
                        to={`/${city.slug}`}
                        className="group p-4 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{city.name}</h4>
                            <p className="text-xs text-muted-foreground">{city.state}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tier 3 */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Tier 3 - Emerging Cities</h3>
                    <span className="text-sm text-muted-foreground">({tier3Cities.length} cities)</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tier3Cities.map((city) => (
                      <Link 
                        key={city.id}
                        to={`/${city.slug}`}
                        className="group p-4 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{city.name}</h4>
                            <p className="text-xs text-muted-foreground">{city.state}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* By State */}
            <TabsContent value="by-state">
              <div className="space-y-8">
                {states.map((state) => {
                  const stateCities = getCitiesByState(state);
                  return (
                    <div key={state}>
                      <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-foreground">{state}</h3>
                        <span className="text-sm text-muted-foreground">({stateCities.length} cities)</span>
                      </div>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {stateCities.map((city) => (
                          <Link 
                            key={city.id}
                            to={`/${city.slug}`}
                            className="group p-4 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{city.name}</h4>
                                <p className="text-xs text-muted-foreground">Tier {city.tier}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* All A-Z */}
            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...cities].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                  <Link 
                    key={city.id}
                    to={`/${city.slug}`}
                    className="group p-4 bg-card rounded-lg border border-border hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{city.name}</h4>
                        <p className="text-xs text-muted-foreground">{city.state} • Tier {city.tier}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{cities.length}+</div>
              <div className="text-primary-foreground/80">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{states.length}+</div>
              <div className="text-primary-foreground/80">States & UTs</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Healthcare Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">8+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Grow Your Healthcare Practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            No matter which city you're in, we have the expertise to help you attract more patients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/specialties">View Medical Specialties</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Cities;
