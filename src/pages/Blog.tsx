import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PageHero from "@/components/landing/PageHero";
import ConsultationFormBox from "@/components/landing/ConsultationFormBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroBlog from "@/assets/hero-blog.jpg";

const BASE_URL = "https://healthe-presence.lovable.app";

const featuredPost = {
  title: "The Complete Guide to Medical SEO in 2024",
  excerpt: "Learn how to optimize your medical practice website for search engines and attract more patients through organic search. This comprehensive guide covers everything from local SEO to content strategy.",
  author: "Dr. Marketing Team",
  date: "December 1, 2024",
  readTime: "12 min read",
  category: "SEO",
  service: "seo",
  image: "bg-gradient-to-br from-primary/30 to-secondary/30"
};

const blogPosts = [
  {
    title: "5 Social Media Mistakes Doctors Make (And How to Avoid Them)",
    excerpt: "Common pitfalls in medical social media marketing and proven strategies to build patient trust online.",
    author: "Social Media Team",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Social Media",
    service: "social-media"
  },
  {
    title: "Why Video Content is Essential for Medical Practices",
    excerpt: "Discover how video marketing can help patients understand procedures and build trust before booking.",
    author: "Video Production Team",
    date: "November 25, 2024",
    readTime: "6 min read",
    category: "Video Marketing",
    service: "video-production"
  },
  {
    title: "Building Patient Trust Through Online Reviews",
    excerpt: "A strategic approach to managing your online reputation and encouraging positive patient reviews.",
    author: "Reputation Team",
    date: "November 22, 2024",
    readTime: "7 min read",
    category: "Reputation",
    service: "patient-engagement"
  },
  {
    title: "The ROI of Digital Marketing for Healthcare",
    excerpt: "Understanding the return on investment from digital marketing efforts in the healthcare industry.",
    author: "Analytics Team",
    date: "November 18, 2024",
    readTime: "10 min read",
    category: "Strategy",
    service: null
  },
  {
    title: "Creating Patient Education Content That Works",
    excerpt: "How to create educational content that informs patients and establishes you as an authority.",
    author: "Content Team",
    date: "November 15, 2024",
    readTime: "9 min read",
    category: "Content",
    service: "video-production"
  },
  {
    title: "Local SEO for Multi-Location Medical Practices",
    excerpt: "Strategies for optimizing each location of your medical practice for local search visibility.",
    author: "SEO Team",
    date: "November 12, 2024",
    readTime: "11 min read",
    category: "SEO",
    service: "seo"
  }
];

const categories = ["All", "SEO", "Social Media", "Video Marketing", "Content", "Strategy", "Reputation"];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Medical Marketing Blog | Transess - Healthcare Digital Marketing Insights</title>
        <meta name="description" content="Expert tips, strategies, and insights on medical digital marketing. Learn SEO, social media, video marketing and patient engagement for doctors and hospitals." />
        <meta name="keywords" content="medical marketing blog, healthcare digital marketing tips, doctor SEO guide, hospital social media strategy" />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
        <meta property="og:title" content="Medical Marketing Blog | Transess" />
        <meta property="og:description" content="Expert tips and strategies on medical digital marketing for healthcare professionals." />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medical Marketing Blog | Transess" />
        <meta name="twitter:description" content="Expert tips on medical digital marketing for healthcare professionals." />
      </Helmet>
      <Navbar />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      
      <PageHero
        badge="Blog"
        title="Insights for Healthcare Marketing"
        description="Expert tips, strategies, and insights to help you grow your medical practice through digital marketing."
        backgroundImage={heroBlog}
      />

      {/* Categories */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className={`h-80 rounded-2xl ${featuredPost.image}`}></div>
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                {featuredPost.service && (
                  <Link 
                    to={`/services/${featuredPost.service}`}
                    className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-muted/80 transition-colors"
                  >
                    Related Service →
                  </Link>
                )}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {featuredPost.readTime}
                </span>
              </div>
              <Button variant="cta" asChild>
                <Link to="#">
                  Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    {post.service && (
                      <Link 
                        to={`/services/${post.service}`}
                        className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-muted/80 transition-colors"
                      >
                        Learn More
                      </Link>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Implement These Strategies?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/services" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Services</h3>
              <p className="text-muted-foreground mb-4">Let us implement these strategies for you.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Services <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/case-studies" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Case Studies</h3>
              <p className="text-muted-foreground mb-4">See real results from our clients.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                View Cases <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
            
            <Link to="/contact" className="group p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all hover:-translate-y-1 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Get Started</h3>
              <p className="text-muted-foreground mb-4">Schedule a free consultation today.</p>
              <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Contact Us <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConsultationFormBox />

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest healthcare marketing insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
