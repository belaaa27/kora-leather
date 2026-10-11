import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { products, categories } from "./data/products";

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

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      to={`/shop/${product.id}`}
      className="group flex flex-col bg-ivory rounded-sm overflow-hidden border border-espresso/10 shadow-xs hover:shadow-md transition-all"
    >
      {/* Product Image / Fallback Container */}
      <div className="relative aspect-4/5 w-full bg-espresso/5 overflow-hidden flex items-center justify-center">
        {imageError ? (
          <div className="flex flex-col items-center justify-center p-6 text-center text-espresso/60 h-full w-full bg-espresso/5 select-none">
            <svg
              className="w-10 h-10 mb-2 stroke-cognac"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
              />
            </svg>
            <span className="text-xs font-serif font-medium text-espresso/80">
              {product.name}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-cognac mt-1">
              Image unavailable
            </span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
          />
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-cognac">
            {product.category}
          </span>
          <h3 className="font-serif text-lg font-bold text-espresso mt-1 mb-1.5 leading-snug group-hover:text-cognac transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-brand-text/75 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-espresso/10 flex items-center justify-between">
          <span className="font-sans font-bold text-base text-espresso">
            {product.price.toLocaleString()} ETB
          </span>
          <span className="text-xs font-semibold text-cognac group-hover:underline">
            View Details &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
          CURATED COLLECTION
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso mt-2 mb-4">
          Shop Our Leatherwork
        </h1>
        <p className="text-brand-text/80 text-sm sm:text-base leading-relaxed">
          Thoughtfully crafted essentials made with timeless Ethiopian craftsmanship and durable full-grain leather.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-2 rounded-xs text-xs sm:text-sm font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-espresso text-ivory shadow-xs"
              : "bg-ivory text-brand-text border border-espresso/20 hover:border-cognac hover:text-cognac"
          }`}
        >
          All ({products.length})
        </button>
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.id).length;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-xs text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-espresso text-ivory shadow-xs"
                  : "bg-ivory text-brand-text border border-espresso/20 hover:border-cognac hover:text-cognac"
              }`}
            >
              {cat.name} ({count})
            </button>
          );
        })}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-espresso/5 rounded-xs border border-espresso/10">
          <p className="text-brand-text/80 font-serif text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

function ProductDetailsPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [imageError, setImageError] = useState(false);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-espresso/5 border border-espresso/10 rounded-sm p-10 max-w-lg mx-auto">
          <span className="text-xs font-semibold tracking-widest text-cognac uppercase">
            Notice
          </span>
          <h1 className="font-serif text-3xl font-bold text-espresso mt-2 mb-3">
            Product Not Found
          </h1>
          <p className="text-brand-text/80 text-sm sm:text-base mb-8">
            The leather piece you are looking for does not exist or may have been removed.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center justify-center bg-espresso text-ivory font-medium px-6 py-3 rounded-xs hover:bg-cognac transition-colors"
          >
            &larr; Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Back to Shop Navigation */}
      <div className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center text-sm font-medium text-brand-text/75 hover:text-cognac transition-colors group"
        >
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">&larr;</span>
          Back to Shop
        </Link>
      </div>

      {/* Main Product Container: 2-column on lg screens, 1-column on smaller */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left Column: Image / Fallback */}
        <div className="relative aspect-4/5 w-full bg-espresso/5 rounded-sm overflow-hidden border border-espresso/10 shadow-sm flex items-center justify-center">
          {imageError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center text-espresso/60 h-full w-full bg-espresso/5 select-none">
              <svg
                className="w-12 h-12 mb-3 stroke-cognac"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span className="text-sm font-serif font-medium text-espresso/80">
                {product.name}
              </span>
              <span className="text-xs tracking-wider uppercase text-cognac mt-1">
                Image unavailable
              </span>
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          )}
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-cognac uppercase">
              {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-2 mb-3 leading-tight">
              {product.name}
            </h1>
            <p className="font-sans text-2xl font-bold text-espresso">
              {product.price.toLocaleString()} ETB
            </p>
          </div>

          <div className="border-t border-espresso/10 pt-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-2">
              Description
            </h2>
            <p className="text-brand-text/80 text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Available Colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="border-t border-espresso/10 pt-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-3">
                Available Colors
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 text-xs font-medium bg-espresso/5 border border-espresso/15 rounded-xs text-brand-text"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Available Sizes (when provided) */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="border-t border-espresso/10 pt-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-espresso/70 mb-3">
                Available Sizes
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 text-xs font-medium bg-espresso/5 border border-espresso/15 rounded-xs text-brand-text"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Customer Contact & Navigation Actions */}
          <div className="border-t border-espresso/10 pt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Primary Action: Order via Telegram */}
              <a
                href="https://t.me/KoraLeatherDemo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center bg-espresso text-ivory text-sm font-medium px-6 py-3.5 rounded-xs hover:bg-cognac transition-colors text-center shadow-xs"
              >
                Order via Telegram
              </a>

              {/* Secondary Action: Call Us */}
              <a
                href="tel:+251900000000"
                className="inline-flex items-center justify-center bg-ivory text-espresso text-sm font-medium px-6 py-3.5 rounded-xs border border-espresso/20 hover:border-cognac hover:text-cognac transition-colors text-center"
              >
                Call Us
              </a>
            </div>

            {/* Back to Collection Link */}
            <div>
              <Link
                to="/shop"
                className="inline-flex items-center text-sm font-medium text-brand-text/75 hover:text-cognac transition-colors"
              >
                &larr; Back to Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
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
            <Route path="/shop/:id" element={<ProductDetailsPage />} />
            <Route path="/our-story" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
