// Shared components: Nav, Footer, Bow logo, FriddyMockup, Tweaks setup

const Bow = ({ size = 24, className = "" }) => {
  const aspect = 676 / 433; // bow-mask.png intrinsic ratio
  return (
    <span
      className={`bow ${className}`}
      role="img"
      aria-label="Everything Essential"
      style={{ width: Math.round(size * aspect), height: size }}
    />
  );
};


const Nav = ({ active }) =>
<nav className="nav">
    <div className="nav-inner">
      <a href="index.html" className="nav-brand">
        <Bow size={26} />
        <span>Everything Essential</span>
      </a>
      <div className="nav-links">
        <a className={`nav-link ${active === 'home' ? 'active' : ''}`} href="index.html">Home</a>
        <a className={`nav-link ${active === 'friddy' ? 'active' : ''}`} href="friddy.html">Friddy</a>
        <a className={`nav-link ${active === 'about' ? 'active' : ''}`} href="about.html">About</a>
        <a className={`nav-link ${active === 'team' ? 'active' : ''}`} href="cofounders.html">Team</a>
        <a className={`nav-link ${active === 'blog' ? 'active' : ''}`} href="blog.html">Journal</a>
        <a className={`nav-link ${active === 'contact' ? 'active' : ''}`} href="contact.html">Contact</a>
        <a className="nav-cta nav-link--keep" href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener">Get Friddy</a>
      </div>
    </div>
  </nav>;


const Footer = () =>
<footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <Bow size={26} />
            <span>Everything Essential</span>
          </div>
          <p className="footer-mission">
            Intelligent systems for the essentials of daily life — starting in the kitchen.
          </p>
        </div>
        <div>
          <h4>Company</h4>
          <div className="col gap-3" style={{ marginTop: 12 }}>
            <a href="about.html">About</a>
            <a href="cofounders.html">Team</a>
            <a href="blog.html">Journal</a>
            <a href="contact.html">Contact</a>
            <a href="contact.html#press">Press</a>
          </div>
        </div>
        <div>
          <h4>Product</h4>
          <div className="col gap-3" style={{ marginTop: 12 }}>
            <a href="friddy.html">Friddy</a>
            <a href="friddy.html#features">Features</a>
            <a href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener">Download on iOS</a>
            <a href="contact.html#partner">Partnerships</a>
          </div>
        </div>
        <div>
          <h4>Connect</h4>
          <div className="col gap-3" style={{ marginTop: 12 }}>
            <a href="mailto:ee.friddy@gmail.com">ee.friddy@gmail.com</a>
            <a href="https://www.linkedin.com/company/everythingessential/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://www.instagram.com/friddy.ee/" target="_blank" rel="noopener">Instagram · @friddy.ee</a>
            <a href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener">Friddy on the App Store</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Everything Essential, Inc.</span>
        <span style={{display:"flex", gap: 18, alignItems:"center", flexWrap:"wrap"}}>
          <a href="privacy.html">Privacy</a>
          <a href="privacy-ko.html">개인정보 처리방침</a>
          <span>Seoul · Toronto</span>
        </span>
      </div>
    </div>
  </footer>;


// ——— Friddy phone mockup — uses real app screenshots ———
const FRIDDY_SCREENS = {
  home:      { src: "friddy-home.png",      alt: "Friddy home screen — recipe suggestions based on your pantry" },
  inventory: { src: "friddy-inventory.png", alt: "Friddy inventory — items sorted by expiry" },
  shopping:  { src: "friddy-shopping.png",  alt: "Friddy shopping list with weekly budget" },
  insights:  { src: "friddy-insights.png",  alt: "Friddy insights — spend and waste analytics" },
  recipe:    { src: "friddy-recipe.png",    alt: "Friddy recipe detail — ingredient match with pantry" },
  cook:      { src: "friddy-cook.png",      alt: "Friddy cooking flow — log ingredient usage" }
};

const FriddyMockup = ({ variant = "home" }) => {
  const s = FRIDDY_SCREENS[variant] || FRIDDY_SCREENS.home;
  return (
    <div className="phone phone--real">
      <div className="phone-screen">
        <img className="phone-screen-img" src={s.src} alt={s.alt} />
      </div>
    </div>);

};

// ——— Tweaks ———
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "teal"
} /*EDITMODE-END*/;

const ACCENT_PRESETS = {
  teal: { accent: "oklch(0.42 0.085 210)", deep: "oklch(0.32 0.08 215)", soft: "oklch(0.92 0.030 200)", glow: "oklch(0.55 0.090 205)", label: "Deep teal" },
  ocean: { accent: "oklch(0.40 0.110 240)", deep: "oklch(0.30 0.110 245)", soft: "oklch(0.92 0.035 230)", glow: "oklch(0.55 0.110 240)", label: "Deep ocean" },
  forest: { accent: "oklch(0.40 0.080 155)", deep: "oklch(0.30 0.075 158)", soft: "oklch(0.92 0.030 150)", glow: "oklch(0.55 0.090 150)", label: "Forest" },
  ink: { accent: "oklch(0.22 0.020 240)", deep: "oklch(0.14 0.020 240)", soft: "oklch(0.92 0.008 240)", glow: "oklch(0.40 0.020 240)", label: "Ink" },
  rust: { accent: "oklch(0.46 0.110 35)", deep: "oklch(0.36 0.110 35)", soft: "oklch(0.93 0.035 50)", glow: "oklch(0.60 0.110 40)", label: "Burnt rust" }
};

function applyTweaks(t) {
  const root = document.documentElement;
  root.dataset.theme = t.theme;
  const p = ACCENT_PRESETS[t.accent] || ACCENT_PRESETS.teal;
  root.style.setProperty("--accent", p.accent);
  root.style.setProperty("--accent-deep", p.deep);
  root.style.setProperty("--accent-soft", p.soft);
  root.style.setProperty("--accent-glow", p.glow);
}

const TweaksHost = () => {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {applyTweaks(t);}, [t]);
  return (
    <window.TweaksPanel title="Tweaks">
      <window.TweakSection title="Theme">
        <window.TweakRadio
          value={t.theme}
          options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]}
          onChange={(v) => setTweak("theme", v)} />
        
      </window.TweakSection>
      <window.TweakSection title="Accent color">
        <window.TweakSelect
          value={t.accent}
          options={Object.entries(ACCENT_PRESETS).map(([v, p]) => ({ value: v, label: p.label }))}
          onChange={(v) => setTweak("accent", v)} />
        
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          {Object.entries(ACCENT_PRESETS).map(([k, p]) =>
          <button
            key={k}
            onClick={() => setTweak("accent", k)}
            title={p.label}
            style={{
              width: 26, height: 26, borderRadius: "50%",
              background: p.accent, border: t.accent === k ? "2px solid var(--ink)" : "2px solid transparent",
              cursor: "pointer", padding: 0
            }} />

          )}
        </div>
      </window.TweakSection>
    </window.TweaksPanel>);

};

// Apply tweaks immediately on load (read from localStorage if persisted)
(function bootstrapTweaks() {
  try {
    // Apply defaults; the React TweaksHost will mount and reflect persisted state.
    applyTweaks(TWEAK_DEFAULTS);
  } catch (e) {}
})();

// Scroll-in animations
function setupFadeIn() {
  const els = document.querySelectorAll(".fade-up");
  if (!("IntersectionObserver" in window)) {els.forEach((e) => e.classList.add("in"));return;}
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {if (e.isIntersecting) {e.target.classList.add("in");io.unobserve(e.target);}});
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

Object.assign(window, { Bow, Nav, Footer, FriddyMockup, TweaksHost, setupFadeIn });