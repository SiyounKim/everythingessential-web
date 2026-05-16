// Home page

const Hero = () => (
  <section style={{position: "relative", paddingTop: 72, paddingBottom: 88, overflow: "hidden"}}>
    <div className="container" style={{position: "relative", zIndex: 1}}>
      <div style={{maxWidth: 920}}>
        <span className="eyebrow">Everything Essential</span>
        <h1 className="rise" style={{marginTop: 24}}>
          Intelligent systems for the essentials of daily life.
        </h1>
        <p className="rise rise-2" style={{fontSize: 20, color: "var(--ink-soft)", marginTop: 26, lineHeight: 1.55, maxWidth: 760}}>
          We build software that turns recurring household decisions into clear, high-confidence actions — starting with Friddy, our AI-powered Kitchen OS.
        </p>
        <div className="rise rise-3" style={{display:"flex", gap: 12, marginTop: 34, flexWrap:"wrap"}}>
          <a href="friddy.html" className="btn btn--primary">Explore Friddy</a>
          <a href="about.html" className="btn btn--ghost">Read our thesis</a>
        </div>
      </div>
    </div>
  </section>
);

const FocusAreas = () => (
  <section className="section section--soft fade-up">
    <div className="container">
      <div className="sec-head">
        <div className="eyebrow">What we solve</div>
        <h2>High-frequency decisions deserve better tools.</h2>
      </div>
      <div className="grid-3">
        {[
          { t: "Reduce food waste", d: "Detect expiry risk early and route households toward what should be eaten first." },
          { t: "Lower grocery spend", d: "Plan meals and baskets with budget-aware optimization across real store prices." },
          { t: "Protect dietary safety", d: "Apply allergy and dietary constraints across recipes, shopping, and planning by default." }
        ].map((it, i) => (
          <div key={i} className="card" style={{padding: 30}}>
            <div className="serif" style={{fontSize: 24, letterSpacing:"-0.015em"}}>{it.t}</div>
            <p style={{marginTop: 12, color:"var(--ink-soft)", lineHeight: 1.6, fontSize: 15.5}}>{it.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeProduct = () => (
  <section className="section fade-up">
    <div className="container" style={{display:"grid", gridTemplateColumns:"1.1fr 1fr", gap: 52, alignItems:"center"}}>
      <div>
        <div className="eyebrow">Our first product</div>
        <h2 style={{marginTop: 14}}>Friddy — an AI-powered Kitchen OS.</h2>
        <p style={{marginTop: 16, color:"var(--ink-soft)", fontSize: 17, lineHeight: 1.6}}>
          Friddy connects inventory, expiry, recipes, budgeting, and shopping into one daily loop. Households spend less, waste less, and decide faster.
        </p>
        <div style={{display:"flex", gap: 12, marginTop: 24, flexWrap:"wrap"}}>
          <a href="friddy.html" className="btn btn--primary">See Friddy features</a>
          <a href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener" className="btn btn--ghost">Download on iOS</a>
        </div>
      </div>
      <div style={{display:"grid", placeItems:"center"}}>
        <FriddyMockup variant="home" />
      </div>
    </div>
  </section>
);

const HomeCTA = () => (
  <section className="section section--ink fade-up">
    <div className="grain" />
    <div className="container" style={{position:"relative"}}>
      <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap: 40, alignItems:"center"}} className="two-col">
        <div>
          <div className="eyebrow" style={{color:"var(--accent-glow)"}}>Build with us</div>
          <h2 style={{color:"white", marginTop: 14}}>Partner with Everything Essential.</h2>
          <p style={{marginTop: 16, color:"oklch(0.84 0.012 220)", lineHeight: 1.6}}>
            We collaborate with grocery, food, and household ecosystems to improve outcomes for real families.
          </p>
        </div>
        <div style={{justifySelf:"end"}}>
          <a href="contact.html#partner" className="btn btn--accent">Talk to our team</a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <>
    <Nav active="home" />
    <Hero />
    <FocusAreas />
    <HomeProduct />
    <HomeCTA />
    <Footer />
    <TweaksHost />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(setupFadeIn, 100);
