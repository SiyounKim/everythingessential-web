// Cofounders / Team page

const TeamHero = () => (
  <section style={{paddingTop: 80, paddingBottom: 64}}>
    <div className="container">
      <div style={{maxWidth: 920}}>
        <span className="eyebrow">The cofounders</span>
        <h1 style={{marginTop: 28}} className="rise">
          Three founders.<br/>One conviction.
        </h1>
        <p className="rise rise-2" style={{fontSize: 20, color:"var(--ink-soft)", marginTop: 28, lineHeight: 1.55, maxWidth: 740}}>
          Everything Essential is built by Siyoun Kim, Daniel Song, and Jongyoon Back — a mathematician, an operator, and a financier who first overlapped over an empty fridge at 11 p.m. and have been circling the same problem, in some form, for the seven years since.
        </p>
        <div className="rise rise-3" style={{display:"flex", gap: 18, marginTop: 36, flexWrap:"wrap", color: "var(--ink-mute)", fontFamily: "var(--mono)", fontSize: 12.5, letterSpacing: ".06em", textTransform:"uppercase"}}>
          <span>Founded 2024</span>
          <span style={{color: "var(--hairline-strong)"}}>/</span>
          <span>Seoul · Toronto</span>
          <span style={{color: "var(--hairline-strong)"}}>/</span>
          <span>Team of 6</span>
        </div>
      </div>
    </div>
  </section>
);

const Portrait = ({ initial, name, location, role }) => (
  <div className="cf-portrait">
    <span className="corner-mark">{role}</span>
    <span className="initial">{initial}</span>
    <span className="placeholder-label">portrait — {name.split(" ")[0].toLowerCase()}.jpg</span>
  </div>
);

const FounderCard = ({ founder, reverse }) => (
  <div className={`founder-block${reverse ? " founder-block--reverse" : ""}`}>
    <div style={reverse ? {order: 2} : {}}>
      <Portrait initial={founder.initial} name={founder.name} location={founder.location} role={founder.shortRole} />
    </div>
    <div style={reverse ? {order: 1} : {}}>
      <span className="role-tag">{founder.role}</span>
      <h2 className="founder-name">{founder.name}</h2>
      <p className="founder-sub">{founder.sub}</p>

      <div className="founder-bio">
        {founder.bio.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{__html: p}} />
        ))}
      </div>

      <div style={{marginTop: 36}}>
        {founder.meta.map((m, i) => (
          <div key={i} className="cf-meta-row">
            <div className="k">{m.k}</div>
            <div className="v" dangerouslySetInnerHTML={{__html: m.v}} />
          </div>
        ))}
      </div>

      <div className="links-row">
        {founder.links.map((l, i) => (
          <a key={i} href={l.href} className="link-chip">
            {l.label}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 9L9 2M9 2H4M9 2V7" stroke="currentColor" strokeWidth="1.4"/></svg>
          </a>
        ))}
      </div>
    </div>
  </div>
);

const SIYOUN = {
  initial: "S",
  name: "Siyoun Kim",
  shortRole: "CEO / CTO",
  role: "Cofounder · CEO & CTO",
  location: "Seoul, KR",
  sub: "Math, models, and the decision engine. Siyoun leads both product direction and the technical core — what Everything Essential builds, and how it knows what it knows.",
  bio: [
    "Siyoun grew up in Seoul, in a household where her grandmother ran the kitchen as a small, careful operation — every container labelled, every receipt kept. The day her grandmother stopped, the system fell apart. The fridge filled and emptied without anyone noticing.",
    "She studied <strong>mathematics and statistics</strong> at Seoul National University and spent five years as a quantitative researcher — first at <strong>Naver Search</strong> on ranking, then at a small hedge fund where she learned what it costs to be wrong about a probability you stated out loud.",
    "At Everything Essential she runs both halves of the technical story: the household graph that models what's actually in your home, and the decision engine that reasons over it. She thinks of Friddy as the kitchen's first software layer — and the model underneath it as the foundation for everything the company will build next.",
  ],
  meta: [
    { k: "Focus", v: "Product direction, ML, decision engine" },
    { k: "Previously", v: "Naver Search · Quantitative research, Seoul" },
    { k: "Studied", v: "BSc Mathematics & Statistics, Seoul National University" },
    { k: "Lives in", v: "Seoul — a small apartment with a normal-sized fridge" },
    { k: "Currently reading", v: "<em>The Design of Everyday Things</em>, again" },
  ],
  links: [
    { label: "ee.friddy@gmail.com", href: "mailto:ee.friddy@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/everythingessential/" },
    { label: "Writing", href: "blog.html" },
  ],
};

const DANIEL_SONG = {
  initial: "D",
  name: "Daniel Song",
  shortRole: "COO",
  role: "Cofounder · COO",
  location: "Seoul, KR",
  sub: "People, operations, and the conversations that fund a company. Daniel runs how Everything Essential works internally — and how it talks to investors, partners, and the team it's still hiring.",
  bio: [
    "Daniel spent eight years building people and capital functions at consumer companies — first as an early operator at <strong>Market Kurly</strong>, then leading <strong>investor relations and people ops</strong> at a Series B fintech in Seoul. He's hired more than a hundred people and run two funding rounds end-to-end.",
    "He thinks of operations as a product in its own right: rituals, documents, and conversations that compound. The internal manuals he's written at Everything Essential — onboarding, performance, IR briefings — are treated with the same care as anything that ships to a household.",
    "He's the one who insists every founding memo gets read aloud at offsites. The company has not yet missed one.",
  ],
  meta: [
    { k: "Focus", v: "Operations, people, investor relations" },
    { k: "Previously", v: "Market Kurly · Fintech IR & People, Seoul" },
    { k: "Studied", v: "BA Sociology, Yonsei · MBA, INSEAD" },
    { k: "Lives in", v: "Seoul — across the river from Siyoun, by design" },
    { k: "Currently reading", v: "<em>High Output Management</em>, with margin notes" },
  ],
  links: [
    { label: "ee.friddy@gmail.com", href: "mailto:ee.friddy@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/everythingessential/" },
    { label: "Careers", href: "#" },
  ],
};

const JONGYOON = {
  initial: "J",
  name: "Jongyoon Back",
  shortRole: "CFO",
  role: "Cofounder · CFO",
  location: "Toronto, CA",
  sub: "Capital, unit economics, and the long view. Jongyoon runs the financial spine of the company — how money comes in, where it goes, and what story it tells about whether the product is actually working.",
  bio: [
    "Jongyoon started in <strong>investment banking</strong> at RBC Capital Markets, then spent six years inside <strong>Shopify's finance org</strong> — the last two as a finance lead on the fulfillment and merchant-services side, where he learned that most ‘inventory problems' are accounting problems in disguise.",
    "He's a CFA, an unromantic modeler, and the person who quietly insists that every household-level metric Friddy reports — waste avoided, spend reduced, reuse rate — be defensible to a regulator, not just a deck.",
    "He's the person who said, the first time Siyoun described the platform thesis: ‘this is just inventory, but for households, and the camera is in your pocket already — make sure the unit economics survive that.'",
  ],
  meta: [
    { k: "Focus", v: "Finance, unit economics, fundraising" },
    { k: "Previously", v: "Shopify Finance · RBC Capital Markets" },
    { k: "Studied", v: "BCom, Ivey · CFA charterholder" },
    { k: "Lives in", v: "Toronto — a duplex with two cats and an over-organized pantry" },
    { k: "Currently reading", v: "<em>The Box</em>, by Marc Levinson" },
  ],
  links: [
    { label: "ee.friddy@gmail.com", href: "mailto:ee.friddy@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/everythingessential/" },
    { label: "Investor inquiries", href: "contact.html#investor" },
  ],
};

const Founders = () => (
  <section className="section--tight fade-up" style={{paddingTop: 24, paddingBottom: 32}}>
    <div className="container">
      <FounderCard founder={SIYOUN} />
      <div className="founder-divider" />
      <FounderCard founder={DANIEL_SONG} reverse />
      <div className="founder-divider" />
      <FounderCard founder={JONGYOON} />
    </div>
  </section>
);

const HowWeMet = () => (
  <section className="section section--soft fade-up">
    <div className="container">
      <div className="sec-head">
        <div className="eyebrow">How we met</div>
        <h2>Eleven p.m., one empty fridge.</h2>
        <p>All three versions are true. We disagree about the lighting.</p>
      </div>
      <div className="meet-grid">
        <div>
          <div className="who">Siyoun recalls</div>
          <p>I was in Toronto for a friend's wedding in 2018, staying in an Airbnb with a fridge that someone had recently abandoned a head of lettuce in. I posted a photo of it on a small mailing list I was on at the time, with the caption ‘this is a UX problem, not a personal failing.'</p>
          <p>Jongyoon replied within twenty minutes with a three-paragraph response and a hand-drawn schematic. Daniel replied an hour later with a one-line note that said ‘call me when you're serious.' It took six years.</p>
        </div>
        <div>
          <div className="who">Daniel recalls</div>
          <p>Siyoun and I had been friends since university — we'd shared a kitchen, badly, for two years. I read her post and immediately recognized the problem. I also recognized that she would procrastinate on it for at least five years, because that's how she works.</p>
          <p>I sent a short reply and a long-running side bet. When Siyoun finally sent the founding memo in late 2023, I had a draft of the operating plan ready the next morning.</p>
        </div>
        <div>
          <div className="who">Jongyoon recalls</div>
          <p>I'd been thinking about household inventory since grad school — it kept coming up in everything I worked on at Shopify but for stores, not kitchens. Siyoun's post crystallized something I'd been sitting on for a year.</p>
          <p>We exchanged emails for a few weeks, then drifted. Every nine months one of us would send the other a screenshot of a half-rotten cucumber. In late 2023 Siyoun sent a memo instead. I flew to Seoul the next month and met Daniel for the first time on day three.</p>
        </div>
      </div>
    </div>
  </section>
);

const Quote = () => (
  <section className="section fade-up">
    <div className="container">
      <div className="pull-quote">
        We're not trying to make the kitchen feel smart. We're trying to make it feel handled — the same way a good email client makes your inbox feel handled. Quiet, accurate, and out of your way.
        <span className="attrib">— Siyoun, Daniel &amp; Jongyoon, founding memo, Nov 2023</span>
      </div>
    </div>
  </section>
);

const Principles = () => {
  const items = [
    { t: "Disagree in writing", d: "Any decision worth arguing about is worth a one-page memo. We've kept every founding memo in a public-to-the-team archive since week one." },
    { t: "Ship to one home first", d: "Every feature is tested in a real kitchen — usually one of ours — before it sees a user. If it doesn't earn its place there, it doesn't ship." },
    { t: "Default to honest metrics", d: "We don't celebrate engagement. We celebrate reduced waste, reduced spend, and unprompted reuse. The numbers we report internally are the same ones we'd report to a regulator." },
    { t: "Two cities, one team", d: "Seoul and Toronto run on a four-hour overlap. We treat the rest of the day as deep work, not lag. Async by default, sync when it matters." },
    { t: "Build for the boring middle", d: "Most household software targets either luxury or scarcity. Our user is the unglamorous middle — busy, cost-aware, capable. We design for them, not for demos." },
    { t: "Earn the next category", d: "Friddy has to be excellent before we expand. The platform thesis is patient. We've turned down good adjacencies because the kitchen wasn't done yet." },
  ];
  return (
    <section className="section fade-up">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">How we work together</div>
          <h2>Six things we agreed on, in writing, before we incorporated.</h2>
        </div>
        <div className="grid-3" style={{gap: 20}}>
          {items.map((it, i) => (
            <div key={i} className="principle-card">
              <div className="num">{String(i+1).padStart(2,"0")}</div>
              <div className="ttl">{it.t}</div>
              <div className="desc">{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Together = () => {
  const rows = [
    { yr: "2018", when: "Nov · Toronto", head: "An email thread", body: "Siyoun posts about the abandoned-lettuce fridge. Jongyoon replies with a schematic; Daniel replies with a side bet. The three stay in loose contact." },
    { yr: "2021", when: "Mar · Remote", head: "First serious sketch", body: "A weekend prototype of a pantry tracker, written in a shared Notion. All three agree it's not the right time and shelve it." },
    { yr: "2023", when: "Oct · Seoul", head: "The memo", body: "Siyoun sends a 14-page memo arguing that multimodal models have finally made the kitchen tractable. Daniel returns it with an operating plan. Jongyoon flies to Seoul the next month." },
    { yr: "2024", when: "Jan · Seoul + Toronto", head: "Everything Essential incorporates", body: "Three founders, two cities, one cap table. Friddy is named in the second week — after Siyoun's grandmother's fridge, which had a hand-lettered label that said the same word." },
    { yr: "2025", when: "Jul · App Store", head: "Friddy ships", body: "Friddy goes live on the iOS App Store in Korea with the first 40 households across Seoul and Toronto. The first reported saving is ₩9,400 — a single jar of kimchi that didn't get repurchased." },
    { yr: "2026", when: "Now", head: "The platform horizon", body: "Team of six. Pre-seed closed. App live. Working on what comes after the kitchen, while keeping the kitchen honest." },
  ];
  return (
    <section className="section section--soft fade-up">
      <div className="container">
        <div className="sec-head">
          <div className="eyebrow">Working together</div>
          <h2>The seven-year version.</h2>
          <p>A short, accurate timeline of how Siyoun, Daniel, and Jongyoon ended up running the same company.</p>
        </div>
        <div className="timeline">
          {rows.map((r, i) => (
            <div key={i} className="timeline-row">
              <div>
                <div className="yr">{r.yr}</div>
                <div className="when">{r.when}</div>
              </div>
              <div className="body">
                <div className="head">{r.head}</div>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="section fade-up">
    <div className="container">
      <div className="cf-cta-card">
        <div className="grain" />
        <div style={{position:"relative"}}>
          <div className="eyebrow" style={{color: "var(--accent-glow)"}}>Get in touch</div>
          <h2 style={{marginTop: 16, fontSize: "clamp(32px, 4vw, 48px)"}}>If any of this resonates, we'd love to hear from you.</h2>
          <p style={{color: "oklch(0.82 0.012 220)", marginTop: 18, fontSize: 17, lineHeight: 1.6, maxWidth: 520}}>
            Investors, partners, kitchen-software nerds, future hires — write directly. We read everything that comes in.
          </p>
        </div>
        <div style={{position:"relative", display:"flex", flexDirection:"column", gap: 12}}>
          <a href="mailto:ee.friddy@gmail.com" className="btn btn--accent" style={{justifyContent:"space-between"}}>
            <span>Write to the team — ee.friddy@gmail.com</span>
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/everythingessential/" target="_blank" rel="noopener" className="btn btn--ghost" style={{justifyContent:"space-between", borderColor:"oklch(0.40 0.022 240)", color:"white"}}>
            <span>Find us on LinkedIn</span>
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
          </a>
          <a href="contact.html" className="btn btn--ghost" style={{justifyContent:"space-between", borderColor:"oklch(0.40 0.022 240)", color:"white"}}>
            <span>General contact form</span>
            <svg className="arrow" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const App = () => (
  <>
    <Nav active="team" />
    <TeamHero />
    <Founders />
    <HowWeMet />
    <Quote />
    <Principles />
    <Together />
    <CTA />
    <Footer />
    <TweaksHost />
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
setTimeout(setupFadeIn, 100);
