// Friddy product page

const FriddyHero = () => (
  <section style={{position: "relative", paddingTop: 56, paddingBottom: 80, overflow: "hidden"}}>
    <div className="container" style={{position: "relative", zIndex: 1}}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center"}} className="hero-grid">
        <div>
          <div style={{display: "flex", gap: 10, alignItems: "center", marginBottom: 24}}>
            <Bow size={36} />
            <div>
              <div style={{fontSize: 12, color:"var(--ink-mute)", letterSpacing: ".08em", textTransform:"uppercase"}}>A product by Everything Essential</div>
              <div className="serif" style={{fontSize: 22, letterSpacing:"-0.02em"}}>Friddy</div>
            </div>
          </div>
          <h1 className="rise">An <em style={{fontStyle:"italic", color:"var(--accent)"}}>AI-powered</em> Kitchen OS.</h1>
          <p className="rise rise-2" style={{fontSize: 19, color:"var(--ink-soft)", marginTop: 24, maxWidth: 540, lineHeight: 1.55}}>
            Friddy helps you reduce food waste, save money, and make better grocery decisions — by treating your kitchen, your week, and your wallet as one connected problem.
          </p>
          <div className="rise rise-3" style={{display:"flex", gap: 12, marginTop: 36, flexWrap:"wrap"}}>
            <a href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener" className="btn btn--primary">Download on the App Store
              <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </a>
            <a href="#features" className="btn btn--ghost">See features</a>
          </div>
        </div>
        <div style={{position: "relative", display: "grid", placeItems: "center", minHeight: 720}}>
          <div className="halo" />
          <div style={{position: "relative", zIndex: 1}} className="rise rise-2">
            <FriddyMockup />
          </div>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
  </section>
);

const WhatItDoes = () => (
  <section className="section section--soft fade-up">
    <div className="container">
      <div className="sec-head">
        <div className="eyebrow">What Friddy does</div>
        <h2>One loop. Six everyday wins.</h2>
        <p>The kitchen has too many disconnected decisions. Friddy connects them, and the value compounds.</p>
      </div>
      <div className="grid-3">
        {[
          { t: "Eat what you have first", d: "Recipes weighted by what's about to expire — your fridge becomes the menu." },
          { t: "Stop double-buying", d: "Friddy knows what's home. Your shopping list won't add it again." },
          { t: "Pay less without thinking", d: "Optimizes baskets across nearby stores inside your weekly budget." },
          { t: "Catch waste before the bin", d: "Quiet nudges before something turns. Less guilt. Less spend." },
          { t: "Stay safe on diet", d: "Allergens and restrictions enforced as hard rules across recipes and lists." },
          { t: "Learn what you actually buy", d: "Receipts ground inventory in reality. Friddy's model gets sharper every week." },
        ].map((it, i) => (
          <div key={i} className="card" style={{padding: 28}}>
            <div className="serif" style={{fontSize: 22, letterSpacing:"-0.015em"}}>{it.t}</div>
            <div style={{color:"var(--ink-soft)", marginTop: 10, fontSize: 14.5, lineHeight: 1.55}}>{it.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeatureDeep = () => {
  const features = [
    { t: "Inventory tracking", d: "Add by scan, photo, or receipt. Quantities, locations, and freshness windows kept up to date — passively." },
    { t: "Expiration alerts", d: "Know what to eat first. Smart reminders that respect actual freshness, not just printed dates." },
    { t: "Recipe recommendations", d: "Grounded in what you have, what's expiring, what you like, and what your household can eat." },
    { t: "Grocery list generation", d: "Auto-built from missing ingredients across your planned meals." },
    { t: "Price comparison", d: "Per-item pricing across nearby stores. Friddy plans the cheapest viable basket." },
    { t: "Budget tracking", d: "Set a target. Friddy keeps the plan inside it without flattening your meals." },
    { t: "Receipt-based verification", d: "Snap a receipt. Inventory updates automatically. Spend grounded in reality." },
    { t: "Spending & waste insights", d: "What you bought, used, and threw away — visible, weekly." },
    { t: "Allergy & dietary support", d: "Profiles per household member. Hard rules, not soft preferences." },
  ];
  return (
    <section className="section fade-up" id="features">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">Features</div>
          <h2>Everything inside Friddy.</h2>
        </div>
        <div style={{borderTop:"1px solid var(--hairline)"}}>
          {features.map((it, i) => (
            <div key={i} style={{display:"grid", gridTemplateColumns: "60px 1fr 2fr", gap: 24, padding: "26px 0", borderBottom: "1px solid var(--hairline)", alignItems:"baseline"}} className="feat-row">
              <div className="serif" style={{fontSize: 18, color: "var(--ink-faint)"}}>{String(i+1).padStart(2,"0")}</div>
              <div className="serif" style={{fontSize: 22, letterSpacing:"-0.015em"}}>{it.t}</div>
              <div style={{color:"var(--ink-soft)", fontSize: 15.5, lineHeight: 1.55}}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 760px) { .feat-row { grid-template-columns: 50px 1fr !important; } .feat-row > div:nth-child(3) { grid-column: 2 / -1; } }`}</style>
    </section>
  );
};

const Journey = () => {
  const steps = [
    { t: "Set up your kitchen", d: "Add household profiles, dietary rules, and your weekly budget. 90 seconds." },
    { t: "Scan or snap your groceries", d: "Receipt OCR catalogs everything. Or shoot the haul. Or scan barcodes." },
    { t: "Cook from what you have", d: "Friddy proposes meals from your fridge — weighted by expiry and taste." },
    { t: "Plan the week", d: "Pick meals. Friddy fills the gaps with the cheapest viable basket nearby." },
    { t: "Shop the list", d: "One trip, one list, no duplicates. Receipt scan on the way home closes the loop." },
    { t: "Watch your waste shrink", d: "Weekly insights show what worked, what didn't, and where money is leaking." },
  ];
  return (
    <section className="section section--ink fade-up">
      <div className="grain"/>
      <div className="container" style={{position:"relative"}}>
        <div className="sec-head">
          <div className="eyebrow" style={{color:"var(--accent-glow)"}}>User journey</div>
          <h2 style={{color:"white"}}>From first scan to weekly habit.</h2>
        </div>
        <div className="grid-3">
          {steps.map((s, i) => (
            <div key={i} style={{padding:"28px 0", borderTop:"1px solid oklch(0.34 0.022 240)"}}>
              <div className="serif" style={{fontSize: 14, color:"var(--accent-glow)"}}>{String(i+1).padStart(2,"0")}</div>
              <div className="serif" style={{fontSize: 22, color:"white", marginTop: 12}}>{s.t}</div>
              <div style={{color:"oklch(0.78 0.012 220)", marginTop: 10, fontSize: 14.5, lineHeight: 1.55}}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScreensSection = () => {
  const screens = [
    { label: "Inventory", variant: "inventory", caption: "Everything you have, sorted by what's about to turn." },
    { label: "Recipe match", variant: "recipe", caption: "Recipes scored by what you already have — and what's expiring." },
    { label: "Shopping", variant: "shopping", caption: "A weekly basket built against your budget, not against your hunger." },
  ];
  return (
    <section className="section section--soft fade-up">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">Screens</div>
          <h2>A look inside Friddy.</h2>
          <p>From today's Korean-language build. English localization is in progress with the Toronto cohort.</p>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 24, justifyItems:"center"}} className="screens-grid">
          {screens.map((s) => (
            <div key={s.variant} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <div className="serif" style={{fontSize: 20, letterSpacing:"-0.015em", marginBottom: 6}}>{s.label}</div>
              <div style={{fontSize: 13, color:"var(--ink-mute)", marginBottom: 22, textAlign:"center", maxWidth: 260, lineHeight: 1.45}}>{s.caption}</div>
              <div style={{transform:"scale(0.86)", transformOrigin:"top center"}}>
                <FriddyMockup variant={s.variant} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 1100px) { .screens-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 720px) { .screens-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const PremiumPlaceholder = () => (
  <section className="section fade-up">
    <div className="container">
      <div className="sec-head">
        <div className="eyebrow">Coming next</div>
        <h2>Friddy Pro — for the households that cook a lot.</h2>
        <p>An advanced tier in development. Final feature set will be set by what early users tell us is worth paying for.</p>
      </div>
      <div className="grid-2">
        {[
          { t: "Multi-store optimization", d: "Plan a basket split across two or three nearby stores when the savings outweigh the time." },
          { t: "Family meal planning", d: "Per-member dietary profiles, age-appropriate portions, and lunchbox planning." },
          { t: "Pantry automation", d: "Recurring staples re-ordered automatically when running low, at the lowest available price." },
          { t: "Health-aligned recipes", d: "Suggestions tuned to specific health goals — sodium, sugar, macros — without becoming a tracker." },
        ].map((it, i) => (
          <div key={i} style={{padding: 32, border:"1px dashed var(--hairline-strong)", borderRadius: 16, background: "var(--bg-elev)"}}>
            <div className="pill" style={{marginBottom: 14}}><span className="dot"/>Pro · concept</div>
            <div className="serif" style={{fontSize: 22, letterSpacing:"-0.015em"}}>{it.t}</div>
            <div style={{color:"var(--ink-soft)", marginTop: 10, fontSize: 15.5, lineHeight: 1.55}}>{it.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DownloadCTA = () => {
  return (
    <section className="section section--soft fade-up" id="download">
      <div className="container">
        <div style={{
          background: "linear-gradient(135deg, var(--ink), oklch(0.28 0.04 240))",
          borderRadius: 28, padding: "72px 56px", color: "white", position: "relative", overflow: "hidden"
        }}>
          <div style={{position:"absolute", right: -80, top: -50, opacity: 0.10}}>
            <Bow size={400} />
          </div>
          <div style={{position:"relative", maxWidth: 720}}>
            <div className="eyebrow" style={{color:"var(--accent-glow)"}}>Now live</div>
            <h2 style={{color: "white", marginTop: 16}}>Friddy is on the App Store.</h2>
            <p style={{color: "oklch(0.85 0.012 220)", marginTop: 16, fontSize: 17, lineHeight: 1.55, maxWidth: 600}}>
              Available for iPhone in Korea today. Localization for Toronto is in active iteration. Free to download — we'll never charge for the core loop.
            </p>
            <div style={{display:"flex", gap: 12, marginTop: 36, flexWrap:"wrap"}}>
              <a href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener" className="btn btn--accent" style={{padding:"16px 24px"}}>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" aria-hidden="true"><path d="M14.94 11.65c-.02-2.5 2.04-3.7 2.14-3.76-1.17-1.71-2.99-1.95-3.64-1.97-1.55-.16-3.02.91-3.81.91-.79 0-2-.89-3.29-.86-1.69.02-3.25.98-4.12 2.5-1.76 3.04-.45 7.55 1.27 10.02.84 1.21 1.84 2.57 3.13 2.52 1.26-.05 1.74-.81 3.26-.81 1.52 0 1.95.81 3.28.79 1.35-.02 2.21-1.23 3.04-2.45.96-1.4 1.36-2.77 1.38-2.84-.03-.01-2.64-1.01-2.66-4.02zM12.5 4.27c.7-.85 1.17-2.02 1.04-3.2-1.01.04-2.22.67-2.94 1.51-.65.75-1.22 1.95-1.07 3.1 1.13.09 2.28-.57 2.97-1.41z"/></svg>
                <span style={{marginLeft: 8}}>Download on the App Store</span>
              </a>
              <a href="https://www.instagram.com/friddy.ee/" target="_blank" rel="noopener" className="btn btn--ghost" style={{borderColor: "oklch(0.40 0.022 240)", color: "white"}}>Follow @friddy.ee</a>
            </div>
            <div style={{display:"flex", gap: 24, marginTop: 28, color:"oklch(0.78 0.012 220)", fontSize: 13.5, flexWrap:"wrap"}}>
              <span>· Free to download</span>
              <span>· No ads, ever</span>
              <span>· Korean language — English coming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PartnerBlock = () => (
  <section className="section--tight fade-up" style={{padding: "80px 0"}}>
    <div className="container">
      <div style={{display:"grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems:"center"}} className="two-col">
        <div>
          <div className="eyebrow">Partnerships</div>
          <h2 style={{marginTop: 14}}>Building with grocery, retail, and institutional kitchens.</h2>
          <p style={{color:"var(--ink-soft)", marginTop: 18, fontSize: 17, lineHeight: 1.55}}>
            If you operate a grocery chain, a delivery network, or an institutional kitchen and want to explore working together, we'd love to talk.
          </p>
        </div>
        <div style={{justifySelf: "end"}}>
          <a href="contact.html#partner" className="btn btn--primary">Contact us for partnership
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <>
    <Nav active="friddy" />
    <FriddyHero />
    <WhatItDoes />
    <FeatureDeep />
    <Journey />
    <ScreensSection />
    <PremiumPlaceholder />
    <DownloadCTA />
    <PartnerBlock />
    <Footer />
    <TweaksHost />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(setupFadeIn, 100);
