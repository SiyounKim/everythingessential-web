// Blog / Journal page

const POSTS = [
  { c: "Founder Notes", t: "Why we're building a Kitchen OS", e: "Food is the most universal, recurring, and emotionally loaded essential we deal with. It's also the one most ignored by software. Here's why we decided to start there.", d: "Apr 28, 2026", a: "Founder", featured: true },
  { c: "Market Research", t: "The hidden cost of forgotten groceries", e: "What we found when we asked thirty households to photograph everything they threw out for two weeks.", d: "Apr 14, 2026", a: "Research" },
  { c: "Product Updates", t: "Connecting inventory, recipes, and grocery decisions", e: "An early peek at how Friddy's decision engine treats your fridge, your week, and your wallet as one problem.", d: "Apr 02, 2026", a: "Product" },
  { c: "Founder Notes", t: "From food waste to daily-life intelligence", e: "How a fridge full of forgotten food became a thesis for a platform company.", d: "Mar 22, 2026", a: "Founder" },
  { c: "Market Research", t: "What we learned from early user interviews", e: "Five themes we heard over and over from cooks, students, and family decision-makers.", d: "Mar 10, 2026", a: "Research" },
  { c: "AI & Grocery", t: "Why we use multimodal models for the kitchen", e: "Receipts, fridge photos, and barcodes — why grounding matters more than reasoning here.", d: "Feb 26, 2026", a: "Engineering" },
  { c: "Launch Journey", t: "Why we chose Seoul and Toronto first", e: "Two markets, two reasons. A note on grocery density, waste sensitivity, and dual-market validation.", d: "Feb 12, 2026", a: "Founder" },
  { c: "Partnerships", t: "Talking to grocery chains about price intelligence", e: "Notes from early conversations on what shared price visibility could look like.", d: "Jan 30, 2026", a: "Partnerships" },
];

const CATEGORIES = ["All", "Founder Notes", "Product Updates", "Market Research", "AI & Grocery", "Launch Journey", "Partnerships"];

const BlogHero = () => (
  <section style={{paddingTop: 80, paddingBottom: 56}}>
    <div className="container">
      <div style={{maxWidth: 880}}>
        <span className="eyebrow">Build notes &amp; stories</span>
        <h1 style={{marginTop: 28}} className="rise">The Journal.</h1>
        <p className="rise rise-2" style={{fontSize: 19, color:"var(--ink-soft)", marginTop: 24, maxWidth: 680, lineHeight: 1.55}}>
          Product progress, founder notes, market research, and the occasional unfiltered look at building a platform company from the kitchen out.
        </p>
      </div>
    </div>
  </section>
);

const Featured = ({ post }) => (
  <section className="fade-up" style={{paddingBottom: 56}}>
    <div className="container">
      <a href="#post" style={{display:"grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems:"stretch", border:"1px solid var(--hairline)", borderRadius: 24, overflow:"hidden", background:"var(--bg-elev)"}} className="featured-grid">
        <div style={{position:"relative", minHeight: 420, background: "linear-gradient(135deg, var(--accent-soft), var(--bg-deep))"}}>
          <svg width="100%" height="100%" style={{position:"absolute", inset: 0, opacity: 0.18}}>
            <defs>
              <pattern id="fstripes" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="22" stroke="var(--accent)" strokeWidth="2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fstripes)" />
          </svg>
          <div style={{position:"absolute", left: 28, top: 28}}>
            <span className="pill pill--accent">Featured · {post.c}</span>
          </div>
          <div style={{position:"absolute", right: 28, bottom: 28, opacity: 0.5}}>
            <Bow size={120} />
          </div>
        </div>
        <div style={{padding: "56px 48px", display:"flex", flexDirection:"column", justifyContent:"center"}}>
          <div style={{fontSize: 12.5, color:"var(--ink-mute)", letterSpacing:".04em"}}>{post.d} · {post.a}</div>
          <h2 style={{marginTop: 16, fontSize: "clamp(28px, 3.4vw, 42px)"}}>{post.t}</h2>
          <p style={{color:"var(--ink-soft)", fontSize: 17, marginTop: 18, lineHeight: 1.6}}>{post.e}</p>
          <div style={{display:"inline-flex", alignItems:"center", gap: 6, color:"var(--accent)", fontSize: 14.5, fontWeight: 500, marginTop: 28}}>
            Read article
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
          </div>
        </div>
      </a>
    </div>
    <style>{`@media (max-width: 900px) { .featured-grid { grid-template-columns: 1fr !important; } .featured-grid > div:last-child { padding: 32px !important; } }`}</style>
  </section>
);

const BlogGrid = () => {
  const [cat, setCat] = React.useState("All");
  const [q, setQ] = React.useState("");
  const filtered = POSTS.filter(p => !p.featured)
    .filter(p => cat === "All" || p.c === cat)
    .filter(p => !q || (p.t + p.e + p.c).toLowerCase().includes(q.toLowerCase()));

  return (
    <section className="section--tight fade-up" style={{paddingTop: 24, paddingBottom: 96}}>
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", gap: 24, marginBottom: 36, flexWrap:"wrap", alignItems:"center"}}>
          <div style={{display:"flex", gap: 8, flexWrap:"wrap"}}>
            {CATEGORIES.map(c => (
              <button key={c} className={`chip ${cat === c ? "active" : ""}`} onClick={()=>setCat(c)}>{c}</button>
            ))}
          </div>
          <div style={{position:"relative", minWidth: 240}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{position:"absolute", left: 14, top: "50%", transform:"translateY(-50%)", color:"var(--ink-mute)"}}>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            <input className="input" style={{paddingLeft: 38}} placeholder="Search the journal" value={q} onChange={e=>setQ(e.target.value)} />
          </div>
        </div>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 24}} className="blog-grid">
          {filtered.map((p, i) => (
            <a key={i} href="#post" className="card" style={{padding: 0, overflow:"hidden", display:"block"}}>
              <div style={{aspectRatio: "16/10", position:"relative", background: i % 2 ? "linear-gradient(135deg, var(--bg-soft), var(--accent-soft))" : "linear-gradient(135deg, var(--accent-soft), var(--bg-soft))", borderBottom:"1px solid var(--hairline)"}}>
                <svg width="100%" height="100%" style={{position:"absolute", inset: 0, opacity: 0.16}}>
                  <defs>
                    <pattern id={`p-${i}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform={`rotate(${(i*23) % 90})`}>
                      <line x1="0" y1="0" x2="0" y2="20" stroke="var(--accent)" strokeWidth="2"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#p-${i})`}/>
                </svg>
                <div style={{position:"absolute", left: 18, top: 16}}>
                  <span className="pill pill--accent">{p.c}</span>
                </div>
              </div>
              <div style={{padding: 24}}>
                <div style={{fontSize: 12, color:"var(--ink-mute)"}}>{p.d} · {p.a}</div>
                <div className="serif" style={{fontSize: 21, marginTop: 10, letterSpacing:"-0.015em", lineHeight: 1.2}}>{p.t}</div>
                <div style={{color:"var(--ink-soft)", fontSize: 14.5, marginTop: 12, lineHeight: 1.55}}>{p.e}</div>
                <div style={{display:"inline-flex", alignItems:"center", gap: 6, color:"var(--accent)", fontSize: 13.5, fontWeight: 500, marginTop: 16}}>
                  Read more <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
              </div>
            </a>
          ))}
          {filtered.length === 0 && (
            <div style={{gridColumn: "1 / -1", padding: "48px 0", textAlign:"center", color: "var(--ink-mute)"}}>No posts match that filter yet.</div>
          )}
        </div>
      </div>
      <style>{`@media (max-width: 960px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
};

const Newsletter = () => {
  const [done, setDone] = React.useState(false);
  return (
    <section className="section section--soft fade-up">
      <div className="container">
        <div style={{maxWidth: 720, margin:"0 auto", textAlign:"center"}}>
          <div className="eyebrow" style={{justifyContent:"center"}}>Follow the journey</div>
          <h2 style={{marginTop: 16}}>Get build notes in your inbox.</h2>
          <p style={{color:"var(--ink-soft)", marginTop: 14, fontSize: 16}}>Roughly once a month. No marketing fluff — what we built, what we learned, what changed.</p>
          <form onSubmit={e=>{e.preventDefault(); setDone(true);}} style={{display:"flex", gap: 10, marginTop: 28, flexWrap:"wrap", justifyContent:"center"}}>
            <input className="input" type="email" required placeholder="you@email.com" style={{flex:"1 1 280px", maxWidth: 380, borderRadius: 999}}/>
            <button className="btn btn--primary" type="submit">{done ? "Subscribed ✓" : "Subscribe"}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Article preview (anchor target #post — shown when a card is clicked, scrolled to)
const ArticlePreview = () => (
  <section className="section fade-up" id="post">
    <div className="container" style={{maxWidth: 760}}>
      <div className="pill" style={{marginBottom: 18}}>Sample article template</div>
      <h2 style={{fontSize: "clamp(32px, 4vw, 48px)"}}>Why we're building a Kitchen OS</h2>
      <div style={{display:"flex", gap: 16, marginTop: 18, color:"var(--ink-mute)", fontSize: 13.5}}>
        <span>Apr 28, 2026</span><span>·</span><span>Founder</span><span>·</span><span>6 min read</span>
      </div>
      <div style={{aspectRatio: "16/8", background: "linear-gradient(135deg, var(--accent-soft), var(--bg-soft))", borderRadius: 20, marginTop: 32, position:"relative", overflow:"hidden"}}>
        <svg width="100%" height="100%" style={{position:"absolute", inset: 0, opacity: 0.16}}>
          <defs><pattern id="art-p" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="22" stroke="var(--accent)" strokeWidth="2"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#art-p)"/>
        </svg>
      </div>
      <div className="col gap-5" style={{marginTop: 40, fontSize: 17.5, lineHeight: 1.7, color: "var(--ink-soft)"}}>
        <p>The kitchen is the last room in the house without real software. We have apps for what we watch, who we date, where we drive, and what we read — but the most universal, recurring, and waste-prone activity in everyone's home is still operated entirely by hand.</p>
        <p>That's the gap Friddy is built to close. Not as a recipe app. Not as a grocery app. As the operating system for the daily decisions a household actually makes — what's in here, what's about to turn, what's worth cooking, what's worth buying, and what's worth ignoring.</p>
        <h3 style={{fontSize: 26, marginTop: 16}}>Why a "Kitchen OS" instead of another app</h3>
        <p>Recipe apps don't know your fridge. Grocery apps don't know your pantry. Budget apps don't know what you actually used. Each fragment is solved. The whole loop isn't. Friddy is an attempt to build the loop — and to do it well enough that the household graph it creates can extend far beyond food.</p>
        <p>This is the first of what we'll write often. Some posts will be product updates. Some will be notes from interviews. Some will be hard lessons. All of them will be honest.</p>
      </div>
      <div style={{marginTop: 64, padding: 32, background: "var(--bg-soft)", borderRadius: 16, display:"flex", justifyContent:"space-between", alignItems:"center", gap: 24, flexWrap:"wrap"}}>
        <div>
          <div className="serif" style={{fontSize: 22}}>Follow our journey.</div>
          <div style={{color: "var(--ink-soft)", fontSize: 14.5, marginTop: 6}}>Build notes, founder stories, and product updates.</div>
        </div>
        <div style={{display:"flex", gap: 10}}>
          <a href="#" className="btn btn--primary">Subscribe</a>
          <a href="https://apps.apple.com/kr/app/friddy/id6768114689?l=en-GB" target="_blank" rel="noopener" className="btn btn--ghost">Get Friddy on iOS</a>
        </div>
      </div>
      <div style={{marginTop: 64}}>
        <div className="eyebrow">Related</div>
        <h3 style={{marginTop: 14, fontSize: 28}}>More from the journal</h3>
        <div className="grid-3" style={{marginTop: 28}}>
          {POSTS.slice(1, 4).map((p, i) => (
            <a key={i} href="#post" className="card" style={{padding: 22}}>
              <div style={{fontSize: 12, color:"var(--ink-mute)"}}>{p.c}</div>
              <div className="serif" style={{fontSize: 18, marginTop: 8, letterSpacing:"-0.015em"}}>{p.t}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <>
    <Nav active="blog" />
    <BlogHero />
    <Featured post={POSTS[0]} />
    <BlogGrid />
    <Newsletter />
    <ArticlePreview />
    <Footer />
    <TweaksHost />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(setupFadeIn, 100);
