// About page

const AboutHero = () => (
  <section style={{position: "relative", paddingTop: 80, paddingBottom: 80}}>
    <div className="container">
      <div style={{maxWidth: 880}}>
        <span className="eyebrow">About Everything Essential</span>
        <h1 style={{marginTop: 28}} className="rise">
          We're building the decision layer for the essentials of daily life.
        </h1>
        <p className="rise rise-2" style={{fontSize: 20, color: "var(--ink-soft)", marginTop: 28, lineHeight: 1.55, maxWidth: 720}}>
          Everything Essential exists to make the daily, recurring, expensive parts of life easier, safer, and more cost-efficient. We're starting in the kitchen — because food is the highest-frequency, most emotional, and most waste-prone essential a household manages.
        </p>
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section className="section section--soft fade-up">
    <div className="container">
      <div style={{display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64}} className="two-col">
        <div>
          <div className="eyebrow">Mission</div>
          <h2 style={{marginTop: 14}}>Make essential decisions easier, safer, more affordable.</h2>
        </div>
        <div className="col gap-5" style={{paddingTop: 8}}>
          <p style={{fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.6}}>
            Most consumer software is built for the moments people choose — entertainment, social, shopping. The mundane essentials are left untouched, even though they consume more time, more money, and more attention than anything else.
          </p>
          <p style={{fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.6}}>
            We think those decisions deserve a real product. Not a tracker. Not a feed. A decision engine — grounded in your actual home, your actual budget, and your actual constraints.
          </p>
        </div>
      </div>
    </div>
    <style>{`@media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
  </section>
);

const WhyNow = () => {
  const items = [
    { t: "AI is finally good enough.", d: "Multimodal models can read receipts, understand recipes, and reason about pantry constraints in real time — at consumer cost." },
    { t: "Households are more cost-aware than ever.", d: "Grocery inflation has made the weekly shop a felt decision again. People want help — not gamification." },
    { t: "Food waste has become a public number.", d: "From regulators to retailers, the cost of household waste is no longer invisible. The market is ready to fund tools that fix it." },
    { t: "Everything else lives on a phone.", d: "The kitchen is the last room without a real software layer. The hardware to fix that — cameras, scanners, voice — is already in everyone's pocket." },
  ];
  return (
    <section className="section fade-up">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">Why now</div>
          <h2>Four shifts converging in the kitchen.</h2>
        </div>
        <div className="grid-2">
          {items.map((it, i) => (
            <div key={i} className="card" style={{padding: 32}}>
              <div className="serif" style={{fontSize: 14, color: "var(--accent)", letterSpacing: ".04em"}}>{String(i+1).padStart(2,"0")}</div>
              <div className="serif" style={{fontSize: 24, marginTop: 12, letterSpacing: "-0.015em"}}>{it.t}</div>
              <div style={{color:"var(--ink-soft)", marginTop: 12, fontSize: 15.5, lineHeight: 1.6}}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderStory = () => (
  <section className="section section--ink fade-up" style={{position: "relative"}}>
    <div className="grain" />
    <div className="container" style={{position:"relative"}}>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start"}} className="two-col">
        <div>
          <div className="eyebrow" style={{color: "var(--accent-glow)"}}>Founder story</div>
          <h2 style={{color: "white", marginTop: 14}}>It started with a fridge full of forgotten food.</h2>
          <div style={{display:"flex", gap: 14, alignItems:"center", marginTop: 32}}>
            <div style={{width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, var(--accent), var(--accent-deep))", display:"grid", placeItems:"center", color:"white", fontFamily: "var(--serif)", fontSize: 22}}>EE</div>
            <div>
              <div style={{color: "white", fontSize: 15, fontWeight: 500}}>Founder &amp; CEO</div>
              <div style={{color: "oklch(0.78 0.012 220)", fontSize: 13.5}}>Everything Essential</div>
            </div>
          </div>
        </div>
        <div className="col gap-5" style={{color: "oklch(0.85 0.012 220)", fontSize: 17, lineHeight: 1.65, paddingTop: 8}}>
          <p>I grew up watching my family throw out food they meant to eat. Not because anyone was careless — because the kitchen is harder than software has ever admitted. You have to remember what's in there, what's about to turn, what's on sale, what fits the budget, what the kids will eat, what your body can handle. Every day. Three times.</p>
          <p>I built spreadsheets. I tried apps. Every one of them solved a fragment. None of them closed the loop. So we started building the loop.</p>
          <p>Friddy is the first thing we shipped. The platform — the broader ambition for Everything Essential — comes from the same observation: the most universal, daily problems people have are still operated by hand, while everything else has been automated. We'd like to change that.</p>
        </div>
      </div>
    </div>
  </section>
);

const PlatformThesis = () => (
  <section className="section fade-up">
    <div className="container">
      <div className="sec-head sec-head--center">
        <div className="eyebrow">Platform thesis</div>
        <h2>Friddy is the wedge. The platform is the point.</h2>
        <p>Each domain we expand into shares the same architecture: a household graph, a decision engine, and the trust we earn living in your kitchen.</p>
      </div>
      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24}} className="grid-3">
        {[
          { t: "A household graph", d: "What's in your home, what you buy, what you actually use, who you live with — modeled once, used everywhere." },
          { t: "A decision engine", d: "Recommendations that respect budget, dietary safety, expiry, taste, and time. The same engine extends beyond food." },
          { t: "Earned trust", d: "Daily-life decisions are intimate. We earn the right to expand into the next category by being honest, useful, and quiet." },
        ].map((it, i) => (
          <div key={i} className="card" style={{padding: 32}}>
            <div className="serif" style={{fontSize: 22, letterSpacing: "-0.015em"}}>{it.t}</div>
            <div style={{color: "var(--ink-soft)", marginTop: 14, fontSize: 15.5, lineHeight: 1.6}}>{it.d}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NextUp = () => (
  <section className="section section--soft fade-up">
    <div className="container">
      <div className="sec-head">
        <div className="eyebrow">What we're building next</div>
        <h2>Beyond the kitchen.</h2>
      </div>
      <div style={{borderTop: "1px solid var(--hairline)"}}>
        {[
          { p: "Now", t: "Friddy — Kitchen OS", d: "Inventory, expiry, recipes, and waste loop in one product." },
          { p: "Next", t: "Grocery price intelligence", d: "Store-level price comparison and basket optimization across nearby retailers." },
          { p: "After", t: "Household budgeting", d: "Receipt-grounded spend tied to actual consumption, not category guesses." },
          { p: "Then", t: "Daily essentials autopilot", d: "Recurring household purchases — toiletries, cleaning, pet, pharmacy — managed quietly." },
        ].map((it, i) => (
          <div key={i} style={{display:"grid", gridTemplateColumns: "120px 1.2fr 2fr", gap: 24, padding: "26px 0", borderBottom: "1px solid var(--hairline)", alignItems:"center"}} className="next-row">
            <span className="pill" style={{justifySelf:"start"}}><span className="dot"/>{it.p}</span>
            <div className="serif" style={{fontSize: 22, letterSpacing:"-0.015em"}}>{it.t}</div>
            <div style={{color:"var(--ink-soft)", fontSize: 15.5}}>{it.d}</div>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @media (max-width: 760px) {
        .next-row { grid-template-columns: 1fr !important; gap: 8px !important; }
      }
    `}</style>
  </section>
);

const Values = () => {
  const v = [
    { t: "Honest by default", d: "We don't inflate metrics. We don't gamify decisions that matter." },
    { t: "Quiet software", d: "Daily essentials are background work. Friddy should feel like a sharp utility, not a feed." },
    { t: "Kitchen-true", d: "Real homes, real receipts, real waste. We test against reality, not demos." },
    { t: "Built to expand", d: "Every architectural choice is made with the platform horizon in mind." },
  ];
  return (
    <section className="section fade-up">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">How we work</div>
          <h2>Values, in plain language.</h2>
        </div>
        <div className="grid-2">
          {v.map((it, i) => (
            <div key={i} style={{padding: "32px 0", borderTop: "1px solid var(--hairline)"}}>
              <div className="serif" style={{fontSize: 26, letterSpacing:"-0.015em"}}>{it.t}</div>
              <div style={{color:"var(--ink-soft)", marginTop: 12, fontSize: 16, lineHeight: 1.6, maxWidth: 480}}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <>
    <Nav active="about" />
    <AboutHero />
    <Mission />
    <WhyNow />
    <FounderStory />
    <PlatformThesis />
    <NextUp />
    <Values />
    <Footer />
    <TweaksHost />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(setupFadeIn, 100);
