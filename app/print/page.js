"use client";

export default function PrintPlaybook() {
  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#0a0a0a",
      color: "#f5f5f5",
      minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .page-break { break-before: page; }
        }
      `}</style>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 40px" }}>

        {/* ── COVER / HEADER ── */}
        <div style={{ marginBottom: 48, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 32, height: 32, background: "#f5f5f5", borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 3,
              }}>
                <div style={{ width: 3.5, height: 16, background: "#0a0a0a", borderRadius: 1 }} />
                <div style={{ width: 3.5, height: 16, background: "#0a0a0a", borderRadius: 1 }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 600 }}>
                ElevenLabs <span style={{ color: "#888", fontWeight: 400, marginLeft: 4 }}>Outbound Playbook</span>
              </span>
            </div>
            <h1 style={{
              fontSize: 38, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-1.5px", marginBottom: 12,
            }}>
              Outbounding{" "}
              <span style={{ color: "#c8ff00" }}>AT&T</span>
            </h1>
            <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.6, maxWidth: 440 }}>
              A strategic, multi-channel approach to engage John C. Miller and position ElevenLabs as the voice AI layer AT&T's customer experience is missing.
            </p>
          </div>
          <div style={{
            flexShrink: 0, width: 220, borderRadius: 12, overflow: "hidden",
            border: "1px solid #2a2a2a",
          }}>
            <img src="/john-miller-linkedin.png" alt="John C. Miller" style={{ width: "100%", display: "block" }} />
          </div>
        </div>

        <Divider />

        {/* ── WHY THIS PERSON ── */}
        <Section accent="#c8ff00" tag="Decision Maker" title="Why This Person" subtitle="John C. Miller — VP, Consumer & Retail Solutions, AT&T">
          <BulletList items={[
            { accent: "#c8ff00", text: "VP of Consumer & Retail Solutions at AT&T, owns the tech stack for phone, retail, and chat channels (~1M customers/day)" },
            { accent: "#63e6be", text: "Senior enough to champion internally, hands-on enough to make tech decisions for exact deployment channels" },
            { accent: "#b197fc", text: "Maps to proven buyer profile: mirrors Cisco's SVP of CX Solutions, who was ElevenLabs' entry point there" },
            { accent: "#ffa94d", text: "Publicly vocal on AI: podcast appearances on AT&T's AI-first 2026 strategy, Forrester 2025 Customer-Obsessed Leadership Award" },
            { accent: "#4dabf7", text: "Active LinkedIn presence on AI topics signals receptivity to outreach" },
          ]} />
        </Section>

        <Divider />

        {/* ── WHY THIS COMPANY ── */}
        <Section accent="#4dabf7" tag="Account Thesis" title="Why This Company" subtitle="The AI is behind the agent — not in front of the customer.">
          <BulletList items={[
            { accent: "#c8ff00", text: "~1M customer calls/day, 100M+ U.S. customers, still running on an IVR Menu with queues, and callbacks with no voice AI layer" },
            { accent: "#b197fc", text: "Current AI investment sits behind the agent (agent-assist tools), not customer-facing" },
            { accent: "#63e6be", text: "ElevenLabs closes this exact gap: handles routine calls (billing, order tracking, password resets), deflects volume before it hits the queue" },
            { accent: "#c8ff00", text: "Proof points: EliseAI (88% calls handled by AI, 66% cost reduction), Everlywell (replaced IVR, 250% higher conversion for Spanish-speaking members)" },
            { accent: "#ff6b6b", text: "Competitive pressure: T-Mobile has already partnered with ElevenLabs" },
          ]} />
        </Section>

        <Divider />

        {/* ── SEQUENCE STRATEGY ── */}
        <Section accent="#ffa94d" tag="Strategy" title="Why This Sequence" subtitle="12-day compressed, multi-channel outbound sequence">
          <BulletList items={[
            { accent: "#ffa94d", text: "Multi-channel. Three channels (email, LinkedIn, phone) so no single inbox gets saturated. Each one reinforces the others without repeating the same format." },
            { accent: "#63e6be", text: "Cold call at Touch 3. John has seen my name twice. A call is the only touch that gets a yes or no in real time." },
            { accent: "#c8ff00", text: "New information every touch. Gap framing \u2192 competitive urgency (T-Mobile) \u2192 third-party proof (EliseAI) \u2192 value offer (custom model) \u2192 clean exit. Never the same argument twice." },
            { accent: "#b197fc", text: "Escalates, not repeats. Awareness to competitive pressure to proof to a direct offer. Each step raises the stakes without restating the pitch." },
            { accent: "#4dabf7", text: "Breakup protects the relationship. Close professionally, leave the door open, and reinforce enterprise logos one last time." },
            { accent: "#ff6b6b", text: "12-day compressed timeline. Front-load the heaviest activity in Days 1\u20133 when name recognition builds fastest." },
          ]} />
        </Section>

        {/* page break before sequence */}
        <div className="page-break" />

        <div style={{ marginBottom: 12 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", color: "#888", marginBottom: 16,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#c8ff00" }} />
            Outreach Sequence
          </div>
          <h2 style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 32 }}>7-Touch Sequence</h2>
        </div>

        {/* ── TOUCH 1 ── */}
        <Touch day="Day 1" type="Email" label="The Opener" accent="#c8ff00">
          <EmailBlock subject="Your AI stack has a blind spot">
{`John,

AT&T has invested heavily in AI for agent tooling — but the customer-facing experience still looks traditional: IVR, queue, callback.

We just launched ElevenAgents for Support. Revolut, Klarna, TELUS Digital, and Cars24 are using it to handle frontline volume across voice, chat, and WhatsApp in 70+ languages.

Worth a quick conversation?`}
          </EmailBlock>
        </Touch>

        {/* ── TOUCH 2 ── */}
        <Touch day="Day 2" type="LinkedIn" label="Connection Request" accent="#4dabf7">
          <MessageBlock>
            John — your team's AI-first direction at AT&T is exactly the kind of transformation we're working on with enterprise telecom. Would love to connect.
          </MessageBlock>
        </Touch>

        {/* ── TOUCH 3 ── */}
        <Touch day="Day 3" type="Phone" label="Cold Call" accent="#ffa94d">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { heading: "Opening", content: `"Hi John, this is Michael from ElevenLabs. I know I'm calling cold — do you have 30 seconds?"` },
              { heading: "Context", content: `"I sent you a note about a gap in AT&T's AI stack. You've invested in agent tooling, but the customer-facing side — IVR, queue, callback — is still untouched."` },
              { heading: "Bridge", content: `"We just launched ElevenAgents for Support. Revolut, Klarna, and TELUS Digital are using it to put AI directly in front of the customer. It follows your SOPs, handles de-escalation, and hands off to humans with full context."` },
              { heading: "Ask", content: `"Is that customer-facing layer something your team is actively thinking about, or is it further down the roadmap?"` },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#ffa94d", marginBottom: 4 }}>{s.heading}</div>
                <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.6, fontStyle: "italic" }}>{s.content}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #2a2a2a" }}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#888", marginBottom: 10 }}>Objection Handling</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { trigger: `"We already have AI initiatives."`, response: `"I'd expect you do. Are any of them changing what the customer hears when they dial in, or are they mostly on the agent side?"` },
                { trigger: `"Send me an email."`, response: `"Already did. I'll resend with some context on what we're seeing in telecom. Best email to use?"` },
                { trigger: `"Not looking at this."`, response: `"That's fair. Can I send a one-pager so you have it when the timing makes sense?"` },
              ].map((o, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid #2a2a2a" }}>
                  <div style={{ fontSize: 12, color: "#ff6b6b", fontWeight: 600, marginBottom: 4, fontStyle: "italic" }}>{o.trigger}</div>
                  <div style={{ fontSize: 12, color: "#ccc", lineHeight: 1.5, fontStyle: "italic" }}>{"\u2192"} {o.response}</div>
                </div>
              ))}
            </div>
          </div>
        </Touch>

        {/* ── TOUCH 4 ── */}
        <Touch day="Day 5" type="Email" label="Competitive Proof" accent="#c8ff00">
          <EmailBlock subject="What T-Mobile just announced">
{`John,

T-Mobile just partnered with ElevenLabs to put voice AI directly into their telecom network. Early enterprise deployments are seeing 60-88% of routine calls fully automated with 40-66% cost reductions.

I don't know the full picture of what AT&T has in flight, but if the customer interaction layer is on the roadmap, this is worth comparing notes on.`}
          </EmailBlock>
        </Touch>

        {/* ── TOUCH 5 ── */}
        <Touch day="Day 7" type="LinkedIn" label="LinkedIn Data Drop" accent="#4dabf7">
          <MessageBlock>
            John — one data point that might be relevant: EliseAI deployed our voice AI and hit 88% AI-handled calls with a 66% cost reduction. Only 15% of callers realized they were talking to AI. At AT&T's scale, even automating billing and order tracking calls would move the needle. Happy to send more detail.
          </MessageBlock>
        </Touch>

        {/* ── TOUCH 6 ── */}
        <Touch day="Day 9" type="Email" label="The ROI Play" accent="#c8ff00">
          <EmailBlock subject="Quick math on AT&T's support costs">
{`John,

At the volume AT&T handles across consumer channels, even automating a fraction of routine calls (billing, order tracking, password resets) with voice AI would meaningfully change the cost structure.

I can put together a rough model based on what we're seeing in similar deployments. Would 15 minutes be worth it to test the numbers?`}
          </EmailBlock>
        </Touch>

        {/* ── TOUCH 7 ── */}
        <Touch day="Day 12" type="Email" label="The Breakup" accent="#c8ff00">
          <EmailBlock subject="Closing the loop">
{`John,

I've reached out a few times and don't want to keep filling your inbox.

If AT&T evaluates customer-facing voice AI down the road, I'd welcome being part of that conversation. We're in production with T-Mobile, Cisco, TELUS Digital, Revolut, Klarna, and several other enterprise deployments.

Either way, your team's AI-first direction is the right one. The question is just where it shows up next.`}
          </EmailBlock>
        </Touch>

      </div>
    </div>
  );
}

/* ── Shared components ── */

function Divider() {
  return <div style={{ height: 1, background: "#2a2a2a", margin: "36px 0" }} />;
}

function Section({ accent, tag, title, subtitle, children }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 10, textTransform: "uppercase", letterSpacing: "1.5px", color: "#888", marginBottom: 14,
      }}>
        <span style={{ width: 5, height: 5, borderRadius: "50%", background: accent }} />
        {tag}
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 4 }}>{title}</h2>
      {subtitle && <div style={{ fontSize: 13, color: "#aaa", marginBottom: 20 }}>{subtitle}</div>}
      {children}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((d, i) => (
        <div key={i} style={{ paddingLeft: 14, borderLeft: `2px solid ${d.accent}` }}>
          <div style={{ fontSize: 13, color: "#ccc", lineHeight: 1.6 }}>{d.text}</div>
        </div>
      ))}
    </div>
  );
}

function Touch({ day, type, label, accent, children }) {
  return (
    <div style={{
      marginBottom: 28, background: "#1a1a1a", border: "1px solid #2a2a2a",
      borderRadius: 16, padding: "24px 28px", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${accent}, transparent)` }} />
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span style={{
          padding: "4px 12px", borderRadius: 100, fontSize: 10, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.5px",
          background: accent, color: "#0a0a0a",
        }}>{type}</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#888" }}>{day}</span>
        <span style={{ fontSize: 12, color: "#666" }}>/</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#f5f5f5" }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

function EmailBlock({ subject, children }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: "#666", fontWeight: 500, marginBottom: 4 }}>
        Subject: <span style={{ color: "#f5f5f5", fontWeight: 600 }}>{subject}</span>
      </div>
      <div style={{ fontSize: 13.5, color: "#ccc", lineHeight: 1.7, whiteSpace: "pre-line", marginTop: 10 }}>
        {children}
      </div>
    </div>
  );
}

function MessageBlock({ children }) {
  return (
    <div style={{ fontSize: 13.5, color: "#ccc", lineHeight: 1.7 }}>
      {children}
    </div>
  );
}
