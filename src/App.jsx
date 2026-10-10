import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function HomePage() {
  const categories = [
    {
      name: "Handbags",
      count: "Totes & Crossbodies",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Wallets",
      count: "Bifolds & Cardholders",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Belts",
      count: "Classic & Casual",
      image:
        "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Shoes",
      count: "Loafers & Boots",
      image:
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left space-y-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
              MADE FOR YOUR EVERYDAY
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight tracking-tight">
              Timeless leather. <br className="hidden sm:inline" />
              Everyday elegance.
            </h1>

            <p className="text-base sm:text-lg text-brand-text/80 max-w-xl leading-relaxed">
              Discover thoughtfully selected leather essentials designed to
              bring understated elegance to your everyday.
            </p>

            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center bg-espresso text-ivory font-medium px-8 py-3.5 rounded-xs hover:bg-cognac transition-colors focus:outline-none focus:ring-2 focus:ring-cognac focus:ring-offset-2 focus:ring-offset-ivory shadow-sm"
              >
                Shop Collection
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative w-full">
            <div className="aspect-4/3 sm:aspect-4/3 lg:aspect-square w-full rounded-sm overflow-hidden bg-espresso/5 shadow-md border border-espresso/10">
              <img
                src="https://dotchleather.com/cdn/shop/files/freepik__a-wide-medium-shot-of-a-luxury-brown-womens-leathe__67609.png?v=1759575224&width=1024"
                alt="Crafted cognac leather handbag placed on a minimalist ivory surface"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Section */}
      <section className="py-16 lg:py-24 bg-ivory border-t border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
              EXPLORE BY CATEGORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-2 mb-4">
              Crafted for Every Occasion
            </h2>
            <p className="text-brand-text/80 text-sm sm:text-base">
              Browse our curated selection of premium leather essentials,
              meticulously designed for your everyday life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                to="/shop"
                className="group relative rounded-sm overflow-hidden bg-espresso/5 border border-espresso/10 shadow-sm aspect-4/5 flex flex-col justify-end p-6 hover:shadow-md transition-all"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="relative z-10 text-white">
                  <span className="text-xs font-medium uppercase tracking-wider text-ivory/80">
                    {cat.count}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ivory mt-1 mb-2">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center text-xs font-semibold text-ivory group-hover:text-cognac transition-colors">
                    Explore Collection
                    <svg
                      className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-serif text-3xl font-bold text-espresso mb-2">
        Shop Collection
      </h1>
      <p className="text-brand-text/80">
        Discover our full range of luxury leather items.
      </p>
    </div>
  );
}

function StoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-serif text-3xl font-bold text-espresso mb-2">
        Our Story
      </h1>
      <p className="text-brand-text/80">
        Learn about our dedication to materials and craftsmanship.
      </p>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h1 className="font-serif text-3xl font-bold text-espresso mb-2">
        Contact Us
      </h1>
      <p className="text-brand-text/80">
        Reach out directly via WhatsApp or phone.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory text-brand-text flex flex-col font-sans">
        {/* Shared Top Navigation */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/our-story" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
