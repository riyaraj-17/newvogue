import { useEffect, useState } from "react";
import { ArrowRight, Bell, LogIn, LogOut, Menu, Package, Search, ShoppingBag, Store, UserRound, X } from "lucide-react";
import "./index.css";

const products = [
  { id: 1, name: "The Everyday Shirt", category: "Women", type: "ESSENTIALS", price: 1299, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80" },
  { id: 2, name: "Minimal Cotton Tee", category: "Men", type: "NEW ARRIVALS", price: 799, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Modern Tailored Look", category: "Women", type: "COLLECTION", price: 1899, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Weekend Classics", category: "Women", type: "BESTSELLERS", price: 1499, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=80" },
  { id: 5, name: "Everyday Overshirt", category: "Men", type: "MEN'S EDIT", price: 1699, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80" },
  { id: 6, name: "Relaxed Fit Trousers", category: "Men", type: "ESSENTIALS", price: 1399, image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=80" },
  { id: 7, name: "Little Daydream Set", category: "Kids", type: "KIDS' EDIT", price: 999, image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80" },
  { id: 8, name: "Mini Weekend Outfit", category: "Kids", type: "NEW ARRIVALS", price: 1199, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80" },
  { id: 9, name: "Soft Knit Cardigan", category: "Women", type: "NEW ARRIVALS", price: 1799, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80" },
  { id: 10, name: "Relaxed Linen Shirt", category: "Women", type: "LINEN EDIT", price: 1599, image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80" },
  { id: 11, name: "Everyday Denim", category: "Women", type: "WARDROBE CLASSICS", price: 1999, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80" },
  { id: 12, name: "Classic Blazer", category: "Women", type: "TAILORED EDIT", price: 2499, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80" },
  { id: 13, name: "Essential Crewneck", category: "Men", type: "NEW ARRIVALS", price: 1099, image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=80" },
  { id: 14, name: "Everyday Denim Jacket", category: "Men", type: "LAYERING EDIT", price: 2299, image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=700&q=80" },
  { id: 15, name: "Minimal Polo Shirt", category: "Men", type: "WARDROBE CLASSICS", price: 999, image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=700&q=80" },
  { id: 16, name: "Weekend Chinos", category: "Men", type: "EVERYDAY EDIT", price: 1499, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80" },
  { id: 17, name: "Little Cotton Co-ord", category: "Kids", type: "NEW ARRIVALS", price: 899, image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=700&q=80" },
  { id: 18, name: "Mini Classic Denim", category: "Kids", type: "DENIM EDIT", price: 1099, image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=700&q=80" },
  { id: 19, name: "Little Weekend Layers", category: "Kids", type: "EVERYDAY EDIT", price: 999, image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=700&q=80" },
  { id: 20, name: "Playday Essentials", category: "Kids", type: "WARDROBE CLASSICS", price: 799, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80" },
  { id: 21, name: "Soft Drape Blouse", category: "Women", type: "NEW ARRIVALS", price: 1499, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=80" },
  { id: 22, name: "Classic Midi Dress", category: "Women", type: "DRESS EDIT", price: 2199, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80" },
  { id: 23, name: "Everyday Wide-Leg Pants", category: "Women", type: "ESSENTIALS", price: 1699, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80" },
  { id: 24, name: "Textured Knit Top", category: "Women", type: "KNITWEAR", price: 1199, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80" },
  { id: 25, name: "Relaxed Denim Jeans", category: "Women", type: "DENIM EDIT", price: 1899, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80" },
  { id: 26, name: "Linen Blend Co-ord", category: "Women", type: "LINEN EDIT", price: 2299, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80" },
  { id: 27, name: "The Weekend Sweatshirt", category: "Women", type: "CASUAL EDIT", price: 1399, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80" },
  { id: 28, name: "Minimal Slip Dress", category: "Women", type: "EVENING EDIT", price: 1999, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80" },
  { id: 29, name: "Tailored Straight Trousers", category: "Women", type: "TAILORED EDIT", price: 1799, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=700&q=80" },
  { id: 30, name: "Soft Cotton Blouse", category: "Women", type: "ESSENTIALS", price: 1299, image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=700&q=80" },
  { id: 31, name: "Soft Ribbed Tank", category: "Women", type: "BASICS", price: 699, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80" },
  { id: 32, name: "Relaxed Shirt Dress", category: "Women", type: "NEW ARRIVALS", price: 1899, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80" },
  { id: 33, name: "Everyday Trench Coat", category: "Women", type: "OUTERWEAR", price: 2999, image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&w=700&q=80" },
  { id: 34, name: "Essential Oxford Shirt", category: "Men", type: "NEW ARRIVALS", price: 1299, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80" },
  { id: 35, name: "Relaxed Cotton Hoodie", category: "Men", type: "CASUAL EDIT", price: 1599, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80" },
  { id: 36, name: "Classic Straight Jeans", category: "Men", type: "DENIM EDIT", price: 1899, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80" },
  { id: 37, name: "Linen Blend Trousers", category: "Men", type: "LINEN EDIT", price: 1799, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80" },
  { id: 38, name: "Textured Knit Polo", category: "Men", type: "KNITWEAR", price: 1399, image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=700&q=80" },
  { id: 39, name: "Everyday Bomber Jacket", category: "Men", type: "OUTERWEAR", price: 2599, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80" },
  { id: 40, name: "Minimal Graphic Tee", category: "Men", type: "BASICS", price: 899, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=80" },
  { id: 41, name: "Relaxed Button-Down", category: "Men", type: "ESSENTIALS", price: 1499, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80" },
  { id: 42, name: "Smart Casual Chinos", category: "Men", type: "EVERYDAY EDIT", price: 1599, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80" },
  { id: 43, name: "Zip-Up Sweatshirt", category: "Men", type: "CASUAL EDIT", price: 1699, image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80" },
  { id: 44, name: "Classic Long-Sleeve Tee", category: "Men", type: "BASICS", price: 999, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80" },
  { id: 45, name: "Lightweight Overshirt", category: "Men", type: "LAYERING EDIT", price: 1999, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80" },
  { id: 46, name: "Everyday Track Pants", category: "Men", type: "ACTIVE EDIT", price: 1299, image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=700&q=80" },
  { id: 47, name: "Mini Cotton T-shirt", category: "Kids", type: "NEW ARRIVALS", price: 499, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80" },
  { id: 48, name: "Little Denim Dungarees", category: "Kids", type: "DENIM EDIT", price: 999, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80" },
  { id: 49, name: "Playday Sweatshirt", category: "Kids", type: "CASUAL EDIT", price: 799, image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=80" },
  { id: 50, name: "Mini Everyday Leggings", category: "Kids", type: "ESSENTIALS", price: 599, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80" },
  { id: 51, name: "Little Party Dress", category: "Kids", type: "OCCASION EDIT", price: 1299, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80" },
  { id: 52, name: "Tiny Explorer Jacket", category: "Kids", type: "OUTERWEAR", price: 1399, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80" },
  { id: 53, name: "Mini Polo & Shorts Set", category: "Kids", type: "CO-ORD EDIT", price: 1099, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=700&q=80" },
  { id: 54, name: "Little Soft Knit", category: "Kids", type: "KNITWEAR", price: 899, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=700&q=80" },
  { id: 55, name: "Everyday Joggers", category: "Kids", type: "EVERYDAY EDIT", price: 699, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80" },
  { id: 56, name: "Mini Button-Down Shirt", category: "Kids", type: "ESSENTIALS", price: 799, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80" },
  { id: 57, name: "Little Summer Shorts", category: "Kids", type: "SUMMER EDIT", price: 599, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80" },
  { id: 58, name: "Mini Printed Dress", category: "Kids", type: "NEW ARRIVALS", price: 1199, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80" },
  { id: 59, name: "Playtime Co-ord Set", category: "Kids", type: "CO-ORD EDIT", price: 999, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80" },
  { id: 60, name: "Little Weekend Hoodie", category: "Kids", type: "CASUAL EDIT", price: 899, image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80" }
];
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };
const price = (n) => "₹" + Number(n).toLocaleString("en-IN");

function App() {
  const [page, setPage] = useState("auth");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState(() => read("newvogueCart", []));
  const [user, setUser] = useState(() => read("newvogueDemoUser", null));
  const [users, setUsers] = useState(() => read("newvogueDemoUsers", []));
  const [orders, setOrders] = useState(() => read("newvogueDemoOrders", []));
  const [notifications, setNotifications] = useState(() => read("newvogueDemoNotifications", []));
  const [search, setSearch] = useState("");
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [selectedId, setSelectedId] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({ name: user?.name || "", email: user?.email || "", phone: user?.phone || "", address: user?.address || "" });

  useEffect(() => localStorage.setItem("newvogueCart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("newvogueDemoUsers", JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem("newvogueDemoOrders", JSON.stringify(orders)), [orders]);
  useEffect(() => localStorage.setItem("newvogueDemoNotifications", JSON.stringify(notifications)), [notifications]);
  useEffect(() => { if (user) localStorage.setItem("newvogueDemoUser", JSON.stringify(user)); else localStorage.removeItem("newvogueDemoUser"); }, [user]);
  useEffect(() => setProfile({ name: user?.name || "", email: user?.email || "", phone: user?.phone || "", address: user?.address || "" }), [user]);

  const go = (next, nextCategory) => { if (nextCategory) setCategory(nextCategory); setPage(next); setMenuOpen(false); setNotice(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const add = (product, size = selectedSize) => { if (!product) return; setCart((old) => { const found = old.find((item) => item.id === product.id && (item.size || "M") === size); return found ? old.map((item) => item.id === product.id && (item.size || "M") === size ? { ...item, size, quantity: item.quantity + 1 } : item) : [...old, { ...product, size, quantity: 1 }]; }); setNotice(product.name + " · Size " + size + " added to your bag."); };
  const count = cart.reduce((n, item) => n + item.quantity, 0);
  const total = cart.reduce((n, item) => n + item.price * item.quantity, 0);
  const shown = products.filter((p) => (category === "All" || p.category === category) && (p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())));

  const submitAuth = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim().toLowerCase();
    const password = String(data.get("password") || "");
    if (authMode === "signup") {
      if (users.some((u) => u.email === email)) { setNotice("That email already has an account. Please log in."); return; }
      const nextUser = { name, email, phone: "", address: "" };
      setUsers((old) => [...old, { ...nextUser, password }]);
      setUser(nextUser);
      setNotifications((old) => [{ id: Date.now(), title: "Welcome to NewVogue", body: "Your account is ready. Discover your next favourite.", date: new Date().toISOString(), read: false }, ...old]);
      go("home"); setNotice("Welcome to NewVogue!");
    } else {
      const found = users.find((u) => u.email === email && u.password === password);
      if (!found) { setNotice("Demo account not found. Please sign up first."); return; }
      setUser({ name: found.name, email: found.email, phone: found.phone || "", address: found.address || "" });
      go("home"); setNotice("You're signed in.");
    }
  };
  const saveProfile = (event) => {
    event.preventDefault();
    setUser(profile);
    setUsers((old) => old.map((u) => u.email === user.email ? { ...u, ...profile } : u));
    setEditing(false); setNotice("Profile updated.");
  };
  const placeOrder = () => {
    if (!user) { setAuthMode("login"); go("auth"); setNotice("Please log in before placing an order."); return; }
    if (!cart.length) return;
    const order = { id: "NV" + Date.now().toString().slice(-8), date: new Date().toISOString(), items: cart, total, status: "Order placed" };
    setOrders((old) => [order, ...old]);
    setNotifications((old) => [{ id: Date.now(), title: "Order confirmed", body: "Your order " + order.id + " has been placed.", date: new Date().toISOString(), read: false }, ...old]);
    setCart([]); go("orders"); setNotice("Your demo order " + order.id + " has been placed.");
  };
  const logout = () => { setUser(null); setEditing(false); setAuthMode("login"); go("auth"); setNotice("You have been logged out."); };

  return <div className="app">
    {page !== "auth" && <>
    <div className="announcement" aria-label="Complimentary shipping on orders over ₹2,499"><div className="announcement-track"><span>Complimentary shipping on orders over ₹2,499 <i>✦</i> Thoughtful essentials, made for every day <i>✦</i> Complimentary shipping on orders over ₹2,499 <i>✦</i></span><span aria-hidden="true">Complimentary shipping on orders over ₹2,499 <i>✦</i> Thoughtful essentials, made for every day <i>✦</i> Complimentary shipping on orders over ₹2,499 <i>✦</i></span></div></div>
    <header className="navbar">
      <div className="nav-start">
        <button className="icon-button menu-trigger" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} strokeWidth={1.6} /> : <Menu size={22} strokeWidth={1.6} />}</button>
      </div>
      <button className="logo logo-button centered-logo" onClick={() => go("home")}>NEWVOGUE<span>.</span></button>
      <div className="nav-actions">
        <button className="icon-button nav-shop-button" aria-label="Shop all products" title="Shop all" onClick={() => go("shop", "All")}><Store size={19} strokeWidth={1.6} /><span className="nav-action-label">Shop</span></button>
        <button className="icon-button nav-cart-button" aria-label="Shopping bag" title="Shopping bag" onClick={() => go("cart")}><ShoppingBag size={19} strokeWidth={1.6} /><span className="cart-count">{count}</span></button>
        <button className="logout-button" onClick={logout}><LogOut size={15} strokeWidth={1.7} /><span>Log out</span></button>
      </div>
      {menuOpen && <nav className="nav-drawer" aria-label="Main navigation">
        <p className="nav-drawer-kicker">DISCOVER NEWVOGUE</p>
        {["Women", "Men", "Kids"].map((item) => <button key={item} className="nav-drawer-link" onClick={() => go("shop", item)}>{item}<ArrowRight size={15} /></button>)}
        <button className="nav-drawer-link" onClick={() => go("shop", "All")}>Shop all products<ArrowRight size={15} /></button>
        <div className="nav-drawer-divider" />
        <button className="nav-drawer-link" onClick={() => go("account")}>My account<UserRound size={15} /></button>
        <button className="nav-drawer-link" onClick={() => go("orders")}>Order history<Package size={15} /></button>
        <button className="nav-drawer-link" onClick={() => go("notifications")}>Notifications<Bell size={15} /></button>
        <button className="nav-drawer-logout" onClick={logout}><LogOut size={15} />Log out</button>
      </nav>}
    </header>
    </>}
    {notice && page !== "auth" && <div className="notice-bar" role="status">{notice}<button aria-label="Dismiss" onClick={() => setNotice("")}><X size={14} /></button></div>}

    {page === "home" && <main>
      <section className="hero" id="story"><img className="hero-image" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=85" alt="Contemporary fashion collection" /><div className="hero-overlay" /><div className="hero-content"><p className="eyebrow">THE NEW SEASON · 2026</p><h1>Style is<br /><em>personal.</em></h1><p className="hero-description">Thoughtful essentials. Timeless silhouettes. Made for the way you live.</p><button className="primary-button" onClick={() => go("shop", "All")}>Explore the collection <ArrowRight size={17} /></button></div><span className="hero-index">01 / THE ESSENTIALS</span></section>
      <section className="category-feature-section"><div className="section-heading"><div><p className="eyebrow">FIND YOUR FIT</p><h2>Shop by collection.</h2></div></div><div className="category-feature-grid">
        {[{ name: "Women", label: "THE WOMEN'S EDIT", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80" }, { name: "Men", label: "THE MEN'S EDIT", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80" }, { name: "Kids", label: "LITTLE EVERYDAY ICONS", image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80" }].map((item) => <article className="category-feature" key={item.name}><img src={item.image} alt={item.name + " fashion"} loading="lazy" /><span className="category-feature-overlay" /><div className="category-feature-copy"><small>{item.label}</small><strong>{item.name}</strong><button className="category-view-products" onClick={() => { setSearch(""); go("shop", item.name); }}>View products <ArrowRight size={15} /></button></div></article>)}
      </div></section>
    </main>}

    {page === "shop" && <main className="page-shell"><div className="page-heading"><p className="eyebrow">THE NEWVOGUE COLLECTION</p><h1>{category === "All" ? "Shop all" : category}</h1><p>Thoughtful pieces for every day, chosen to last beyond a season.</p></div><div className="shop-toolbar"><div className="category-pills">{["All", "Women", "Men", "Kids"].map((item) => <button key={item} className={"category-pill " + (category === item ? "active" : "")} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-field"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search styles..." /></label></div>{shown.length ? <div className="product-grid">{shown.map((p) => <ProductCard key={p.id} product={p} add={add} open={() => { setSelectedId(p.id); go("product"); }} />)}</div> : <div className="empty-state"><p>No products match that search.</p><button className="primary-button dark-button" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button></div>}</main>}

    {page === "product" && <main className="page-shell product-detail-page"><button className="back-link" onClick={() => go("shop", products.find((p) => p.id === selectedId)?.category || "All")}>← Back to collection</button><div className="product-detail-layout"><img src={products.find((p) => p.id === selectedId)?.image} alt={products.find((p) => p.id === selectedId)?.name} /><div className="product-detail-copy"><p className="eyebrow">{products.find((p) => p.id === selectedId)?.category.toUpperCase()} · NEWVOGUE</p><h1>{products.find((p) => p.id === selectedId)?.name}</h1><strong className="detail-price">{price(products.find((p) => p.id === selectedId)?.price || 0)}</strong><p>A considered everyday piece designed for easy styling, comfort and a timeless wardrobe.</p><div className="size-picker"><div className="size-picker-heading"><span>Select size</span><span>XS — XL</span></div><div className="size-options">{["XS", "S", "M", "L", "XL"].map((size) => <button type="button" key={size} className={"size-option " + (selectedSize === size ? "selected" : "")} aria-pressed={selectedSize === size} onClick={() => setSelectedSize(size)}>{size}</button>)}</div></div><div className="detail-meta"><span>Thoughtful design</span><span>Easy everyday styling</span><span>Complimentary shipping over ₹2,499</span></div><button className="primary-button dark-button" onClick={() => add(products.find((p) => p.id === selectedId), selectedSize)}>Add to bag <ShoppingBag size={16} /></button><button className="text-link detail-cart-link" onClick={() => go("cart")}>View shopping bag <ArrowRight size={16} /></button></div></div></main>}

    {page === "cart" && <main className="page-shell"><div className="page-heading"><p className="eyebrow">YOUR SELECTION</p><h1>Shopping bag</h1><p>{count} {count === 1 ? "item" : "items"} in your bag</p></div>{!cart.length ? <div className="empty-state"><ShoppingBag size={35} /><h2>Your bag is waiting.</h2><p>Find something that feels like you.</p><button className="primary-button dark-button" onClick={() => go("shop", "All")}>Continue shopping <ArrowRight size={16} /></button></div> : <div className="cart-layout"><div className="cart-items">{cart.map((item) => <article className="cart-item" key={item.id + "-" + (item.size || "M")}><img src={item.image} alt={item.name} /><div className="cart-item-info"><p className="product-category">{item.category}</p><h3>{item.name}</h3><p>{price(item.price)}</p><p className="cart-item-size">Size: {item.size || "M"}</p><div className="quantity-control"><button onClick={() => setCart((old) => old.map((x) => x.id === item.id && (x.size || "M") === (item.size || "M") ? { ...x, quantity: x.quantity - 1 } : x).filter((x) => x.quantity > 0))}>−</button><span>{item.quantity}</span><button onClick={() => setCart((old) => old.map((x) => x.id === item.id && (x.size || "M") === (item.size || "M") ? { ...x, quantity: x.quantity + 1 } : x))}>+</button></div></div><strong>{price(item.price * item.quantity)}</strong><button className="remove-item" onClick={() => setCart((old) => old.filter((x) => !(x.id === item.id && (x.size || "M") === (item.size || "M"))))}>Remove</button></article>)}</div><aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>{price(total)}</strong></div><div><span>Shipping</span><span>{total >= 2499 ? "Complimentary" : "Calculated at checkout"}</span></div><div className="summary-total"><span>Total</span><strong>{price(total)}</strong></div><button className="primary-button dark-button full-button" onClick={placeOrder}>Place demo order <ArrowRight size={16} /></button><p className="small-note">Demo checkout only. No payment is collected.</p></aside></div>}</main>}

    {page === "auth" && <main className="auth-shell">
      <section className="auth-editorial" aria-label="NewVogue fashion editorial">
        <div className="auth-editorial-shade"></div>
        <div className="auth-brand-lockup"><span className="auth-brand-mark">N.</span><span>NEWVOGUE<span className="auth-brand-period">.</span></span></div>
        <div className="auth-editorial-copy"><p className="auth-editorial-kicker">THE NEW SEASON · 2026</p><h2>Style is<br/><em>personal.</em></h2><p>Considered essentials. Quiet confidence.<br/>A wardrobe that feels like you.</p></div>
        <div className="auth-editorial-bottom"><span>MODERN FASHION. YOUR STYLE.</span><span>01 — 03</span></div>
      </section>
      <section className="auth-panel">
        <div className="auth-card">
          <p className="eyebrow">{authMode === "signup" ? "YOUR STYLE, YOUR STORY" : "WELCOME BACK"}</p>
          <h1>{authMode === "signup" ? "Create your account" : "Sign in to NewVogue"}</h1>
          <p className="auth-subtitle">{authMode === "signup" ? "A more considered wardrobe starts here." : "Your wardrobe, orders and saved details — all in one place."}</p>
          <form className="account-form" onSubmit={submitAuth}>
            {authMode === "signup" && <label>Full name<input name="name" required autoComplete="name" placeholder="Enter your full name" /></label>}
            <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="name@example.com" /></label>
            <label>Password<input name="password" type="password" required minLength={6} autoComplete={authMode === "signup" ? "new-password" : "current-password"} placeholder="Enter your password" /></label>
            <button className="primary-button dark-button full-button" type="submit">{authMode === "signup" ? "Create account" : "Sign in"} <ArrowRight size={16} /></button>
          </form>
          <p className="auth-switch">{authMode === "signup" ? "Already have an account?" : "New to NewVogue?"} <button onClick={() => { setAuthMode(authMode === "signup" ? "login" : "signup"); setNotice(""); }}>{authMode === "signup" ? "Sign in" : "Create an account"}</button></p>
          <p className="demo-warning">Demo experience · Do not use a real password.</p>
        </div>
        <div className="auth-panel-footer"><span>NEWVOGUE®</span><span>MODERN FASHION. YOUR STYLE.</span></div>
      </section>
    </main>}

    {page === "account" && <main className="page-shell"><div className="page-heading"><p className="eyebrow">YOUR NEWVOGUE</p><h1>My account</h1><p>Welcome back, {user?.name || "there"}.</p></div>{!user ? <AuthPrompt go={() => { setAuthMode("login"); go("auth"); }} /> : <div className="account-layout"><aside className="account-menu"><button onClick={() => go("account")}> <UserRound size={17} /> My profile</button><button onClick={() => go("orders")}><Package size={17} /> Order history</button><button onClick={() => go("notifications")}><Bell size={17} /> Notifications ({notifications.filter((n) => !n.read).length})</button><button onClick={() => go("cart")}><ShoppingBag size={17} /> Shopping bag</button><button onClick={logout}><LogOut size={17} /> Log out</button></aside><section className="account-panel"><div className="panel-heading"><div><p className="eyebrow">PERSONAL INFORMATION</p><h2>Profile details</h2></div><button className="outline-button" onClick={() => setEditing(!editing)}>{editing ? "Cancel" : "Edit details"}</button></div>{editing ? <form className="account-form" onSubmit={saveProfile}><label>Full name<input required value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} /></label><label>Email address<input type="email" required value={profile.email} disabled /></label><label>Phone number<input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} placeholder="Add phone number" /></label><label>Delivery address<textarea value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} placeholder="Add delivery address" rows={3} /></label><button className="primary-button dark-button" type="submit">Save changes</button></form> : <div className="profile-details"><div><span>Full name</span><strong>{user.name}</strong></div><div><span>Email address</span><strong>{user.email}</strong></div><div><span>Phone number</span><strong>{user.phone || "Not added"}</strong></div><div><span>Delivery address</span><strong>{user.address || "Not added"}</strong></div></div>}<div className="account-shortcuts"><button onClick={() => go("orders")}><Package size={20} /><span><strong>Your orders</strong><small>View order history and status</small></span><ArrowRight size={16} /></button><button onClick={() => go("notifications")}><Bell size={20} /><span><strong>Notifications</strong><small>Order and account updates</small></span><ArrowRight size={16} /></button></div></section></div>}</main>}

    {page === "orders" && <main className="page-shell"><div className="page-heading"><p className="eyebrow">YOUR PURCHASES</p><h1>Order history</h1><p>Keep track of the things you chose.</p></div>{!user ? <AuthPrompt go={() => { setAuthMode("login"); go("auth"); }} /> : !orders.length ? <div className="empty-state"><Package size={35} /><h2>No orders yet.</h2><p>Your next favourite might be waiting.</p><button className="primary-button dark-button" onClick={() => go("shop", "All")}>Start shopping <ArrowRight size={16} /></button></div> : <div className="order-list">{orders.map((o) => <article className="order-card" key={o.id}><div className="order-card-head"><div><p className="product-category">ORDER NUMBER</p><h3>{o.id}</h3><small>{new Date(o.date).toLocaleDateString("en-IN")}</small></div><span className="status-pill">{o.status}</span></div><div className="order-card-items">{o.items.map((item) => <div key={item.id}><img src={item.image} alt={item.name} /><span>{item.name} × {item.quantity}</span><strong>{price(item.price * item.quantity)}</strong></div>)}</div><div className="order-total"><span>Order total</span><strong>{price(o.total)}</strong></div></article>)}</div>}</main>}

    {page === "notifications" && <main className="page-shell"><div className="page-heading"><p className="eyebrow">STAY IN THE LOOP</p><h1>Notifications</h1><p>Order confirmations and account updates.</p></div>{!user ? <AuthPrompt go={() => { setAuthMode("login"); go("auth"); }} /> : !notifications.length ? <div className="empty-state"><Bell size={35} /><h2>You're all caught up.</h2><p>Your updates will appear here.</p></div> : <div className="notification-list">{notifications.map((n) => <article className={"notification-item " + (!n.read ? "notification-unread" : "")} key={n.id}><Bell size={20} /><div><h3>{n.title}</h3><p>{n.body}</p><small>{new Date(n.date).toLocaleString("en-IN")}</small></div></article>)}<button className="outline-button" onClick={() => setNotifications((old) => old.map((n) => ({ ...n, read: true })))}>Mark all as read</button></div>}</main>}

    {page !== "auth" && <footer className="footer footer-centered"><button className="logo footer-logo logo-button" onClick={() => go("home")}>NEWVOGUE<span>.</span></button><p className="footer-tagline">Modern fashion. Your style.</p><div className="footer-links"><button onClick={() => go("shop", "Women")}>Women</button><button onClick={() => go("shop", "Men")}>Men</button><button onClick={() => go("shop", "Kids")}>Kids</button><button onClick={() => user ? go("account") : (setAuthMode("login"), go("auth"))}>My account</button></div><p className="footer-copyright">© 2026 NewVogue. Portfolio project.</p></footer>}
  </div>;
}

function ProductCard({ product, add, open }) {
  return <article className="product-card"><div className="product-image-wrap"><button className="product-open" onClick={open} aria-label={"View " + product.name}><img className="product-image" src={product.image} alt={product.name} loading="lazy" /></button><button className="quick-add" onClick={open}>Choose size +</button></div><p className="product-category">{product.category.toUpperCase()} · {product.type}</p><button className="product-name-button" onClick={open}><h3>{product.name}</h3></button><p className="product-price">{price(product.price)}</p></article>;
}
function AuthPrompt({ go }) { return <div className="empty-state"><UserRound size={35} /><h2>Sign in to view your account.</h2><button className="primary-button dark-button" onClick={go}>Login <LogIn size={16} /></button></div>; }
export default App;
