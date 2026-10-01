
import { useState } from "react";
import { ShoppingBag, Menu, Search, ArrowRight } from "lucide-react";
import "./index.css";

const products = [
  {
    id: 1,
    name: "The Everyday Shirt",
    category: "ESSENTIALS",
    price: 1299,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 2,
    name: "Minimal Cotton Tee",
    category: "NEW ARRIVALS",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 3,
    name: "Modern Tailored Look",
    category: "COLLECTION",
    price: 1899,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: 4,
    name: "Weekend Classics",
    category: "BESTSELLERS",
    price: 1499,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=80",
  },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="app">
      <div className="announcement">
        Complimentary shipping on orders over ₹2,499
      </div>

      <header className="navbar">
        <button className="icon-button mobile-menu" aria-label="Menu">
          <Menu size={21} />
        </button>

        <a className="logo" href="#">
          NEWVOGUE<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#shop">Shop all</a>
          <a href="#shop">New arrivals</a>
          <a href="#story">Our story</a>
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-button cart-button" aria-label={`Shopping bag, ${cartCount} items`}>
            <ShoppingBag size={20} />
            <span>{cartCount}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="story">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85"
            alt="Contemporary fashion collection"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">THE NEW SEASON · 2026</p>
            <h1>Less, but<br />better.</h1>
            <p className="hero-description">
              Thoughtful essentials. Timeless silhouettes.
              Made for the way you live.
            </p>
            <a className="primary-button" href="#shop">
              Explore the collection <ArrowRight size={17} />
            </a>
          </div>
          <span className="hero-index">01 / THE ESSENTIALS</span>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CURATED FOR YOU</p>
              <h2>Everyday icons.</h2>
            </div>
            <a className="text-link" href="#shop">
              View collection <ArrowRight size={16} />
            </a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <button
                    className="quick-add"
                    onClick={() => setCartCount((count) => count + 1)}
                  >
                    Add to bag +
                  </button>
                </div>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="brand-note">
          <p className="eyebrow">OUR PHILOSOPHY</p>
          <h2>Style that feels like you.</h2>
          <p>
            Considered design, versatile pieces, and fewer things
            chosen better.
          </p>
        </section>
      </main>

      <footer className="footer">
        <a className="logo footer-logo" href="#">NEWVOGUE<span>.</span></a>
        <p>Modern fashion. Your style.</p>
        <p>© 2026 NewVogue. Portfolio project.</p>
      </footer>
    </div>
  );
}

export default App;