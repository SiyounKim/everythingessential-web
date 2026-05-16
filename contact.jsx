// Contact page

const ContactHero = () => (
  <section style={{paddingTop: 80, paddingBottom: 56}}>
    <div className="container">
      <div style={{maxWidth: 880}}>
        <span className="eyebrow">Contact</span>
        <h1 style={{marginTop: 28}} className="rise">Let's talk.</h1>
        <p className="rise rise-2" style={{fontSize: 19, color:"var(--ink-soft)", marginTop: 24, maxWidth: 680, lineHeight: 1.55}}>
          Whether you're an investor, partner, early user, or collaborator — we'd love to hear from you.
        </p>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [state, setState] = React.useState({ kind: "general", name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k, v) => setState(s => ({...s, [k]: v}));
  const KINDS = [
    { v: "investor", l: "Investor inquiry" },
    { v: "partner",  l: "Partnership" },
    { v: "support",  l: "Friddy support" },
    { v: "press",    l: "Press" },
    { v: "general",  l: "Something else" },
  ];
  return (
    <section className="section--tight fade-up" style={{paddingBottom: 96}}>
      <div className="container">
        <div style={{display:"grid", gridTemplateColumns: "1fr 1.2fr", gap: 64}} className="two-col">
          <div className="col gap-5">
            <div>
              <div className="eyebrow">By inquiry</div>
              <h3 style={{marginTop: 14}}>Where to send what.</h3>
            </div>
            <div className="col gap-4" style={{marginTop: 8}}>
              {[
                { id: "investor", t: "Investors", d: "Pitch decks, diligence, intros — we read everything that comes in.", e: "ee.friddy@gmail.com" },
                { id: "partner", t: "Partnerships", d: "Grocery, retail, delivery, institutional kitchens — let's explore.", e: "ee.friddy@gmail.com" },
                { id: "press", t: "Press &amp; collaborators", d: "Stories, interviews, and writers welcome.", e: "ee.friddy@gmail.com" },
                { id: "support", t: "Friddy users", d: "Bug reports, feature requests, anything app-related. Or DM <a href=\"https://www.instagram.com/friddy.ee/\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--accent)\">@friddy.ee</a> on Instagram.", e: "ee.friddy@gmail.com" },
              ].map((it, i) => (
                <div key={i} id={it.id} style={{padding: "24px 0", borderTop:"1px solid var(--hairline)"}}>
                  <div className="serif" style={{fontSize: 22, letterSpacing:"-0.015em"}}>{it.t}</div>
                  <div style={{color:"var(--ink-soft)", marginTop: 8, fontSize: 14.5}} dangerouslySetInnerHTML={{__html: it.d}} />
                  <a href={`mailto:${it.e}`} style={{display:"inline-flex", marginTop: 10, color:"var(--accent)", fontSize: 14, fontWeight: 500}}>{it.e}</a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="card" style={{padding: 36}}>
              <div className="serif" style={{fontSize: 26, letterSpacing:"-0.015em"}}>Send a message</div>
              <p style={{color:"var(--ink-soft)", marginTop: 8, fontSize: 14.5}}>We try to reply within two working days.</p>
              <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} style={{marginTop: 28}}>
                <div style={{display:"flex", gap: 8, flexWrap:"wrap", marginBottom: 20}}>
                  {KINDS.map(k => (
                    <button type="button" key={k.v} className={`chip ${state.kind === k.v ? "active" : ""}`} onClick={()=>set("kind", k.v)}>{k.l}</button>
                  ))}
                </div>
                <div className="grid-2" style={{gap: 16}}>
                  <div>
                    <label className="label">Name</label>
                    <input className="input" required value={state.name} onChange={e=>set("name", e.target.value)} placeholder="Your name"/>
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input className="input" type="email" required value={state.email} onChange={e=>set("email", e.target.value)} placeholder="you@email.com"/>
                  </div>
                </div>
                <div style={{marginTop: 16}}>
                  <label className="label">Company / Organization (optional)</label>
                  <input className="input" value={state.company} onChange={e=>set("company", e.target.value)} placeholder="Where you're writing from"/>
                </div>
                <div style={{marginTop: 16}}>
                  <label className="label">Message</label>
                  <textarea className="textarea" required value={state.message} onChange={e=>set("message", e.target.value)} placeholder="Tell us a bit about what you're working on or what you'd like to discuss."/>
                </div>
                <button type="submit" className="btn btn--primary" style={{marginTop: 24, width: "100%", justifyContent: "center"}}>
                  {submitted ? "Thanks — we'll be in touch." : "Send message"}
                  {!submitted && <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .two-col { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "Are you raising right now?", a: "We're at the pre-seed stage. We're happy to talk to investors who care about consumer essentials, household software, and platform companies." },
    { q: "Can I try Friddy?", a: "Yes — Friddy is live on the iOS App Store in Korea. Download it directly, or follow @friddy.ee on Instagram for updates and English localization news." },
    { q: "Do you work with grocery chains?", a: "We're in early conversations with a handful. If you operate a chain or delivery network, write to ee.friddy@gmail.com and we'll route it." },
    { q: "Is the platform vision available today?", a: "No — Friddy is the only product we ship today. The platform expansion is our medium-term roadmap, not a current claim." },
  ];
  return (
    <section className="section section--soft fade-up">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">FAQ</div>
          <h2>Common questions.</h2>
        </div>
        <div style={{maxWidth: 880}}>
          {items.map((it, i) => (
            <div key={i} style={{borderTop: "1px solid var(--hairline)", padding: "20px 0"}}>
              <button onClick={()=>setOpen(open === i ? -1 : i)} style={{all:"unset", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
                <span className="serif" style={{fontSize: 22, letterSpacing:"-0.015em"}}>{it.q}</span>
                <span style={{fontSize: 24, color: "var(--ink-mute)", transition:"transform .2s ease", transform: open === i ? "rotate(45deg)" : "none"}}>+</span>
              </button>
              {open === i && <div style={{color:"var(--ink-soft)", marginTop: 12, fontSize: 16, lineHeight: 1.6, maxWidth: 700}}>{it.a}</div>}
            </div>
          ))}
          <div style={{borderTop: "1px solid var(--hairline)"}}/>
        </div>
      </div>
    </section>
  );
};

const App = () => (
  <>
    <Nav active="contact" />
    <ContactHero />
    <ContactForm />
    <FAQ />
    <Footer />
    <TweaksHost />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(setupFadeIn, 100);
