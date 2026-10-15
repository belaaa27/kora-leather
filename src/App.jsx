import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
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
          Thoughtfully crafted essentials made with timeless Ethiopian
          craftsmanship and durable full-grain leather.
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
            The leather piece you are looking for does not exist or may have
            been removed.
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
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">
            &larr;
          </span>
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
  const philosophyPillars = [
    {
      title: "Timeless Aesthetic",
      description:
        "We believe in enduring silhouettes that stand apart from transient trends. Each design focuses on clean lines and balanced proportions that remain relevant season after season.",
    },
    {
      title: "Everyday Utility",
      description:
        "True luxury lives in daily use. Our pieces are created to integrate smoothly into work, travel, and leisure with functional organization and comfortable carry.",
    },
    {
      title: "Considered Details",
      description:
        "From subtle edge stitching to tactile finishes and understated hardware, every element is chosen with care to bring quiet sophistication to everyday moments.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Introduction */}
          <div className="flex flex-col items-start text-left space-y-6">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
              CRAFTED FOR EVERYDAY ELEGANCE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
              Our Story
            </h1>
            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed max-w-xl">
              Kora Leather was conceived with a clear intention: to bring
              understated elegance, refined utility, and lasting beauty to the
              essentials you carry every single day.
            </p>
          </div>

          {/* Right: Hero Image */}
          <div className="relative w-full aspect-4/3 sm:aspect-4/3 lg:aspect-square rounded-sm overflow-hidden bg-espresso/5 border border-espresso/10 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80"
              alt="Crafted cognac leather handbag placed on a minimalist neutral surface"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy Section */}
      <section className="bg-espresso/5 border-y border-espresso/10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso mt-2 mb-4">
              Designed for the Rhythm of Everyday Life
            </h2>
            <p className="text-brand-text/80 text-sm sm:text-base leading-relaxed">
              We approach every piece through three foundational design
              principles focused on purpose, longevity, and ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-ivory border border-espresso/10 rounded-sm p-8 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cognac">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-espresso mt-2 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-brand-text/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Craftsmanship & Design Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image (stacks below on mobile) */}
          <div className="relative w-full aspect-4/3 sm:aspect-4/3 lg:aspect-square rounded-sm overflow-hidden bg-espresso/5 border border-espresso/10 shadow-sm order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1778882993124-5c26efbdfc39?auto=format&fit=crop&fm=jpg&q=80&w=1200"
              alt="Close-up of brown leather texture and a stitched seam"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right: Text (stacks on top on mobile) */}
          <div className="space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
              MATERIALS & FORM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-espresso">
              The Art of Thoughtful Design
            </h2>
            <p className="text-base sm:text-lg text-brand-text/80 leading-relaxed">
              Leather has an enduring tactile presence unlike any other
              material. We celebrate its rich character, natural warmth, and the
              way thoughtful goods develop a personal patina over time.
            </p>
            <p className="text-sm sm:text-base text-brand-text/75 leading-relaxed">
              Our creative process prioritizes harmony in proportion, durability
              in everyday handling, and refined simplicity in structure—ensuring
              each item feels as effortless on its first outing as it does years
              later.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Section */}
      <section className="bg-espresso text-ivory py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
            EXPLORE OUR WORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">
            Discover the Collection
          </h2>
          <p className="text-ivory/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Browse our curated selection of leather essentials designed to
            accompany your personal journey with quiet elegance.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-ivory text-espresso font-medium px-8 py-3.5 rounded-xs hover:bg-cognac hover:text-ivory transition-colors shadow-sm"
            >
              Explore Shop Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Contact Header */}
      <div className="bg-espresso text-ivory py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-cognac uppercase">
            WE'D LOVE TO HEAR FROM YOU
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ivory tracking-tight">
            Let's start a conversation.
          </h1>
          <div className="w-12 h-0.5 bg-cognac/60 mx-auto my-4" />
          <p className="text-ivory/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
            Questions about a piece, sizing, or a special request? We're here to
            help you find something you'll love.
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Channels & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest text-cognac uppercase">
                DIRECT CHANNELS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1 mb-4">
                Connect Instantly
              </h2>
              <p className="text-brand-text/80 text-sm leading-relaxed">
                For the fastest response regarding product availability and
                custom orders, reach us directly through Telegram or phone.
              </p>
            </div>

            {/* Quick Action Cards */}
            <div className="space-y-4">
              {/* Telegram Card */}
              <a
                href="https://t.me/KoraLeatherDemo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-5 bg-white rounded-sm border border-espresso/10 shadow-sm hover:border-cognac hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-2.02 9.52c-.15.68-.56.84-1.13.52l-3.1-2.28-1.5 1.44c-.17.17-.31.31-.63.31l.22-3.16 5.76-5.2c.25-.22-.05-.34-.39-.12l-7.12 4.48-3.06-.96c-.67-.21-.68-.67.14-.99l11.97-4.61c.55-.2 1.04.14.86.85z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <span className="text-xs font-semibold text-brand-text/60 uppercase tracking-wider">
                    Telegram Channel
                  </span>
                  <p className="text-espresso font-bold text-base sm:text-lg">
                    @KoraLeatherDemo
                  </p>
                  <span className="text-xs text-cognac font-medium">
                    Click to chat on Telegram &rarr;
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+251900000000"
                className="flex items-center p-5 bg-white rounded-sm border border-espresso/10 shadow-sm hover:border-cognac hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-espresso/5 text-espresso flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <span className="text-xs font-semibold text-brand-text/60 uppercase tracking-wider">
                    Direct Call
                  </span>
                  <p className="text-espresso font-bold text-base sm:text-lg">
                    +251 900 000 000
                  </p>
                  <span className="text-xs text-cognac font-medium">
                    Mon - Sat (9am - 7pm) &rarr;
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Hours Info Box */}
            <div className="bg-white p-6 rounded-sm border border-espresso/10 shadow-sm space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-cognac mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-serif font-bold text-espresso">
                    Showroom Location
                  </h3>
                  <p className="text-sm text-brand-text/80 mt-0.5">
                    Bole Road, Near Friendship Building
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="border-t border-espresso/10 pt-4 flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-cognac mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-serif font-bold text-espresso">
                    Opening Hours
                  </h3>
                  <p className="text-sm text-brand-text/80 mt-0.5">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-sm border border-espresso/10 shadow-sm">
            <span className="text-xs font-semibold tracking-widest text-cognac uppercase">
              SEND A MESSAGE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso mt-1 mb-6">
              Drop Us an Enquiry
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-5 bg-amber-50/80 border border-amber-200/80 rounded-sm space-y-2">
                <div className="flex items-center space-x-2 text-amber-900 font-semibold text-sm">
                  <svg
                    className="w-5 h-5 text-amber-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Interactive Demo Form Notice</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-900/80 leading-relaxed">
                  This website is a portfolio demo, so messages are not sent to
                  a server. Your entered enquiry has been preserved below—feel
                  free to copy it and connect with us directly via Telegram or
                  Phone!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Abebe Kebede"
                    className="w-full px-4 py-3 bg-ivory/50 border border-espresso/20 rounded-xs text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 900 000 000"
                    className="w-full px-4 py-3 bg-ivory/50 border border-espresso/20 rounded-xs text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="abebe@example.com"
                    className="w-full px-4 py-3 bg-ivory/50 border border-espresso/20 rounded-xs text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-ivory/50 border border-espresso/20 rounded-xs text-brand-text focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac text-sm"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Telegram Order Support">
                      Telegram Order Support
                    </option>
                    <option value="Custom Sizing / Fit">
                      Custom Sizing / Fit
                    </option>
                    <option value="Showroom Visit">Showroom Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold text-espresso uppercase tracking-wider mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you're looking for or ask any questions..."
                  className="w-full px-4 py-3 bg-ivory/50 border border-espresso/20 rounded-xs text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-cognac focus:ring-1 focus:ring-cognac text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-espresso text-ivory font-medium py-3.5 px-6 rounded-xs hover:bg-cognac transition-colors focus:outline-none focus:ring-2 focus:ring-cognac shadow-sm text-sm uppercase tracking-wider cursor-pointer"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
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
