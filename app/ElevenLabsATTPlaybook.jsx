"use client";
import { useState, useEffect } from "react";

const steps = [
  {
    day: "Day 1",
    type: "email",
    label: "The Opener",
    subject: "Your AI stack has a blind spot",
    body: `John,

AT&T has invested heavily in AI for agent tooling — but the customer-facing experience still looks traditional: IVR, queue, callback.

We just launched ElevenAgents for Support. Revolut, Klarna, TELUS Digital, and Cars24 are using it to handle frontline volume across voice, chat, and WhatsApp in 70+ languages.

Worth a quick conversation?`,
  },
  {
    day: "Day 2",
    type: "linkedin",
    label: "Connection Request",
    subject: "LinkedIn Connection Request",
    body: `John — your team's AI-first direction at AT&T is exactly the kind of transformation we're working on with enterprise telecom. Would love to connect.`,
  },
  {
    day: "Day 3",
    type: "phone",
    label: "Cold Call",
    subject: "Cold Call Script",
    sections: [
      { heading: "Opening", content: `"Hi John, this is Michael from ElevenLabs. I know I'm calling cold — do you have 30 seconds?"` },
      { heading: "Context", content: `"I sent you a note about a gap in AT&T's AI stack. You've invested in agent tooling, but the customer-facing side — IVR, queue, callback — is still untouched."` },
      { heading: "Bridge", content: `"We just launched ElevenAgents for Support. Revolut, Klarna, and TELUS Digital are using it to put AI directly in front of the customer. It follows your SOPs, handles de-escalation, and hands off to humans with full context."` },
      { heading: "Ask", content: `"Is that customer-facing layer something your team is actively thinking about, or is it further down the roadmap?"` },
    ],
    objections: [
      { trigger: `"We already have AI initiatives."`, response: `"I'd expect you do. Are any of them changing what the customer hears when they dial in, or are they mostly on the agent side?"` },
      { trigger: `"Send me an email."`, response: `"Already did. I'll resend with some context on what we're seeing in telecom. Best email to use?"` },
      { trigger: `"Not looking at this."`, response: `"That's fair. Can I send a one-pager so you have it when the timing makes sense?"` },
    ],
  },
  {
    day: "Day 5",
    type: "email",
    label: "Competitive Proof",
    subject: "What T-Mobile just announced",
    body: `John,

T-Mobile just partnered with ElevenLabs to put voice AI directly into their telecom network. Early enterprise deployments are seeing 60-88% of routine calls fully automated with 40-66% cost reductions.

I don't know the full picture of what AT&T has in flight, but if the customer interaction layer is on the roadmap, this is worth comparing notes on.`,
  },
  {
    day: "Day 7",
    type: "linkedin",
    label: "LinkedIn Data Drop",
    subject: "LinkedIn Message",
    body: `John — one data point that might be relevant: EliseAI deployed our voice AI and hit 88% AI-handled calls with a 66% cost reduction. Only 15% of callers realized they were talking to AI. At AT&T's scale, even automating billing and order tracking calls would move the needle. Happy to send more detail.`,
  },
  {
    day: "Day 9",
    type: "email",
    label: "The ROI Play",
    subject: "Quick math on AT&T's support costs",
    body: `John,

At the volume AT&T handles across consumer channels, even automating a fraction of routine calls (billing, order tracking, password resets) with voice AI would meaningfully change the cost structure.

I can put together a rough model based on what we're seeing in similar deployments. Would 15 minutes be worth it to test the numbers?`,
  },
  {
    day: "Day 12",
    type: "email",
    label: "The Breakup",
    subject: "Closing the loop",
    body: `John,

I've reached out a few times and don't want to keep filling your inbox.

If AT&T evaluates customer-facing voice AI down the road, I'd welcome being part of that conversation. We're in production with T-Mobile, Cisco, TELUS Digital, Revolut, Klarna, and several other enterprise deployments.

Either way, your team's AI-first direction is the right one. The question is just where it shows up next.`,
  },
];

const IconEmail = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const IconLinkedIn = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const IconPhone = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const typeConfig = {
  email: { color: "#c8ff00", bg: "rgba(200,255,0,0.08)", border: "rgba(200,255,0,0.18)", label: "Email", icon: <IconEmail size={14} color="#0a0a0a" /> },
  linkedin: { color: "#4dabf7", bg: "rgba(77,171,247,0.08)", border: "rgba(77,171,247,0.18)", label: "LinkedIn", icon: <IconLinkedIn size={14} color="#0a0a0a" /> },
  phone: { color: "#ffa94d", bg: "rgba(255,169,77,0.08)", border: "rgba(255,169,77,0.18)", label: "Phone", icon: <IconPhone size={14} color="#0a0a0a" /> },
};

const personPoints = [
  { color: "rgba(200,255,0,0.08)", accent: "#c8ff00", text: <><strong style={{ color: "#f5f5f5" }}>VP of Consumer & Retail Solutions at AT&T</strong>, owns the tech stack for phone, retail, and chat channels (~1M customers/day)</> },
  { color: "rgba(99,230,190,0.08)", accent: "#63e6be", text: <><strong style={{ color: "#f5f5f5" }}>Senior enough to champion internally</strong>, hands-on enough to make tech decisions for exact deployment channels</> },
  { color: "rgba(177,151,252,0.08)", accent: "#b197fc", text: <>Maps to proven buyer profile: <strong style={{ color: "#f5f5f5" }}>mirrors Cisco's SVP of CX Solutions</strong>, who was ElevenLabs' entry point there</> },
  { color: "rgba(255,169,77,0.08)", accent: "#ffa94d", text: <>Publicly vocal on AI: podcast appearances on <strong style={{ color: "#f5f5f5" }}>AT&T's AI-first 2026 strategy</strong>, Forrester 2025 Customer-Obsessed Leadership Award</> },
  { color: "rgba(77,171,247,0.08)", accent: "#4dabf7", text: <><strong style={{ color: "#f5f5f5" }}>Active LinkedIn presence</strong> on AI topics signals receptivity to outreach</> },
];

const companyPoints = [
  { color: "rgba(200,255,0,0.08)", accent: "#c8ff00", text: <><strong style={{ color: "#f5f5f5" }}>~1M customer calls/day, 100M+ U.S. customers</strong>, still running on an IVR Menu with queues, and callbacks with no voice AI layer</> },
  { color: "rgba(177,151,252,0.08)", accent: "#b197fc", text: <>Current AI investment sits <strong style={{ color: "#f5f5f5" }}>behind the agent</strong> (agent-assist tools), not customer-facing</> },
  { color: "rgba(99,230,190,0.08)", accent: "#63e6be", text: <>ElevenLabs closes this exact gap: <strong style={{ color: "#f5f5f5" }}>handles routine calls</strong> (billing, order tracking, password resets), deflects volume before it hits the queue</> },
  { color: "rgba(200,255,0,0.08)", accent: "#c8ff00", text: <>Proof points: <strong style={{ color: "#f5f5f5" }}>EliseAI</strong> (88% calls handled by AI, 66% cost reduction), <strong style={{ color: "#f5f5f5" }}>Everlywell</strong> (replaced IVR, 250% higher conversion for Spanish-speaking members)</> },
  { color: "rgba(255,107,107,0.08)", accent: "#ff6b6b", text: <>Competitive pressure: <strong style={{ color: "#ff6b6b" }}>T-Mobile has already partnered with ElevenLabs</strong></> },
];

export default function ElevenLabsATTPlaybook() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeSection, setActiveSection] = useState("person");
  const [loaded, setLoaded] = useState(false);
  const [showStrategy, setShowStrategy] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);

  useEffect(() => { setLoaded(true); }, []);

  const current = steps[activeStep];
  const ct = typeConfig[current.type];

  const sections = [
    { id: "person", label: "Why This Person" },
    { id: "company", label: "Why This Company" },
    { id: "sequence", label: "Outreach Sequence" },
  ];

  const BulletList = ({ items }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {items.map((d, i) => (
        <div key={i} style={{
          paddingLeft: 16,
          borderLeft: `2px solid ${d.accent}`,
        }}>
          <div style={{ fontSize: 14, color: "#aaa", lineHeight: 1.6 }}>{d.text}</div>
        </div>
      ))}
    </div>
  );

  const renderDetailContent = () => {
    if (current.type === "phone") {
      return (
        <div style={{ flex: 1, overflowY: "auto" }}>
          {/* Script sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            {current.sections.map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 10, fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.1em", color: ct.color, marginBottom: 6,
                }}>{s.heading}</div>
                <div style={{
                  fontSize: 14, color: "#ccc", lineHeight: 1.65,
                  padding: "12px 16px", background: "rgba(255,255,255,0.02)",
                  borderRadius: 10, border: "1px solid #2a2a2a",
                  fontStyle: "italic",
                }}>{s.content}</div>
              </div>
            ))}
          </div>

          {/* Objection handling */}
          <div style={{
            borderTop: "1px solid #2a2a2a", paddingTop: 20,
          }}>
            <div style={{
              fontSize: 10, fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#888", marginBottom: 14,
            }}>Objection Handling</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {current.objections.map((o, i) => (
                <div key={i} style={{
                  padding: "14px 16px", background: "rgba(255,255,255,0.02)",
                  borderRadius: 10, border: "1px solid #2a2a2a",
                }}>
                  <div style={{
                    fontSize: 12.5, color: "#ff6b6b", fontWeight: 600, marginBottom: 6,
                    fontStyle: "italic",
                  }}>{o.trigger}</div>
                  <div style={{
                    fontSize: 13, color: "#ccc", lineHeight: 1.55,
                    fontStyle: "italic",
                  }}>→ {o.response}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Email / LinkedIn body
    return (
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: 14.5, color: "#ccc", lineHeight: 1.75, whiteSpace: "pre-line",
        }}>{current.body}</div>
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#f5f5f5",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-12px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 32px 80px" }}>

        {/* ── HEADER ── */}
        <div style={{
          marginBottom: 48,
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24,
          }}>
            <div style={{
              width: 36, height: 36, background: "#f5f5f5", borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
            }}>
              <div style={{ width: 4, height: 18, background: "#0a0a0a", borderRadius: 1 }} />
              <div style={{ width: 4, height: 18, background: "#0a0a0a", borderRadius: 1 }} />
            </div>
            <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.2px" }}>
              ElevenLabs <span style={{ color: "#888", fontWeight: 400, marginLeft: 6 }}>Outbound Playbook</span>
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 700, lineHeight: 1.08,
            letterSpacing: "-1.5px", marginBottom: 14,
          }}>
            Outbounding{" "}
            <span style={{
              background: "linear-gradient(135deg, #c8ff00 0%, #a8e000 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>AT&T</span>
          </h1>
          <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.6, maxWidth: 520 }}>
            A strategic, multi-channel approach to engage John C. Miller and position ElevenLabs as the voice AI layer AT&T's customer experience is missing.
          </p>
        </div>

        {/* ── NAV TABS ── */}
        <div style={{
          display: "flex", gap: 4, marginBottom: 36, background: "#141414",
          borderRadius: 14, padding: 4, border: "1px solid #2a2a2a", width: "fit-content",
          opacity: loaded ? 1 : 0, transition: "opacity 0.6s 0.15s ease",
        }}>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              style={{
                padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                border: "none", cursor: "pointer", fontFamily: "inherit",
                background: activeSection === s.id ? "#2a2a2a" : "transparent",
                color: activeSection === s.id ? "#f5f5f5" : "#888",
                transition: "all 0.2s ease", letterSpacing: "-0.1px",
              }}
            >{s.label}</button>
          ))}
        </div>

        {/* ── WHY THIS PERSON ── */}
        {activeSection === "person" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>

            {/* LinkedIn Profile toggle */}
            <div style={{ marginBottom: 24 }}>
              <button
                onClick={() => setShowLinkedIn(!showLinkedIn)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", border: "1px solid #2a2a2a", borderRadius: 10,
                  padding: "8px 16px", cursor: "pointer", fontFamily: "inherit",
                  color: "#888", fontSize: 12, fontWeight: 600, letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: showLinkedIn ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                ><path d="m9 18 6-6-6-6"/></svg>
                LinkedIn Profile
              </button>

              {showLinkedIn && (
                <div style={{
                  marginTop: 14, borderRadius: 14, overflow: "hidden",
                  border: "1px solid #2a2a2a", background: "#1a1a1a",
                  maxWidth: 480,
                }}>
                  <img
                    src="/john-miller-linkedin.png"
                    alt="John C. Miller — LinkedIn profile"
                    style={{ width: "100%", display: "block" }}
                  />
                </div>
              )}
            </div>

            <div style={{
              background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 20,
              padding: "36px 40px", position: "relative", overflow: "hidden", maxWidth: 720,
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #c8ff00, transparent)",
              }} />
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 10.5, textTransform: "uppercase", letterSpacing: "1.5px", color: "#888", marginBottom: 20,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c8ff00" }} />
                Decision Maker
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 4 }}>John C. Miller</h3>
              <div style={{ fontSize: 14, color: "#aaa", marginBottom: 28 }}>VP, Consumer & Retail Solutions — AT&T</div>
              <BulletList items={personPoints} />
            </div>
          </div>
        )}

        {/* ── WHY THIS COMPANY ── */}
        {activeSection === "company" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>
            <div style={{
              background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 20,
              padding: "36px 40px", position: "relative", overflow: "hidden", maxWidth: 720,
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #4dabf7, transparent)",
              }} />
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                fontSize: 10.5, textTransform: "uppercase", letterSpacing: "1.5px", color: "#888", marginBottom: 20,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4dabf7" }} />
                Account Thesis
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.5px", marginBottom: 4 }}>AT&T</h3>
              <div style={{ fontSize: 14, color: "#aaa", marginBottom: 28 }}>The AI is behind the agent — not in front of the customer.</div>
              <BulletList items={companyPoints} />
            </div>
          </div>
        )}

        {/* ── OUTREACH SEQUENCE ── */}
        {activeSection === "sequence" && (
          <div style={{ animation: "fadeUp 0.4s ease both" }}>

            {/* Why This Sequence toggle */}
            <div style={{ marginBottom: 24 }}>
              <button
                onClick={() => setShowStrategy(!showStrategy)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", border: "1px solid #2a2a2a", borderRadius: 10,
                  padding: "8px 16px", cursor: "pointer", fontFamily: "inherit",
                  color: "#888", fontSize: 12, fontWeight: 600, letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: showStrategy ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
                ><path d="m9 18 6-6-6-6"/></svg>
                Why This Sequence
              </button>

              {showStrategy && (
                <div style={{
                  marginTop: 14, background: "#1a1a1a", border: "1px solid #2a2a2a",
                  borderRadius: 16, padding: "24px 28px", position: "relative", overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                    background: "linear-gradient(90deg, #ffa94d, transparent)",
                  }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { accent: "#ffa94d", color: "rgba(255,169,77,0.08)", text: <><strong style={{ color: "#f5f5f5" }}>Multi-channel.</strong> I'm using three channels (email, LinkedIn, phone) so no single inbox gets saturated. Each one reinforces the others without repeating the same format.</> },
                      { accent: "#63e6be", color: "rgba(99,230,190,0.08)", text: <><strong style={{ color: "#f5f5f5" }}>Cold call at Touch 3.</strong> John has seen my name twice. A call is the only touch that gets a yes or no in real time.</> },
                      { accent: "#c8ff00", color: "rgba(200,255,0,0.08)", text: <><strong style={{ color: "#f5f5f5" }}>New information every touch.</strong> I move from gap framing → competitive urgency (T-Mobile) → third-party proof (EliseAI) → value offer (custom model) → clean exit. I never make the same argument twice.</> },
                      { accent: "#b197fc", color: "rgba(177,151,252,0.08)", text: <><strong style={{ color: "#f5f5f5" }}>Escalates, not repeats.</strong> I move from awareness to competitive pressure to proof to a direct offer. Each step raises the stakes without restating the pitch.</> },
                      { accent: "#4dabf7", color: "rgba(77,171,247,0.08)", text: <><strong style={{ color: "#f5f5f5" }}>Breakup protects the relationship.</strong> I close professionally, leave the door open, and reinforce enterprise logos one last time.</> },
                      { accent: "#ff6b6b", color: "rgba(255,107,107,0.08)", text: <><strong style={{ color: "#f5f5f5" }}>12-day compressed timeline.</strong> I front-load the heaviest activity in Days 1-3 when name recognition builds fastest. It's short enough that Touch 1 is still remembered by Touch 7.</> },
                    ].map((d, i) => (
                      <div key={i} style={{
                        paddingLeft: 14,
                        borderLeft: `2px solid ${d.accent}`,
                      }}>
                        <div style={{ fontSize: 13, color: "#aaa", lineHeight: 1.55 }}>{d.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>

              {/* Left step list */}
              <div style={{ display: "flex", flexDirection: "column", minWidth: 240, maxWidth: 280 }}>
                {steps.map((s, i) => {
                  const active = i === activeStep;
                  const tc = typeConfig[s.type];
                  return (
                    <div key={i}>
                      <div
                        onClick={() => setActiveStep(i)}
                        style={{
                          display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
                          padding: "10px 14px", borderRadius: 12,
                          background: active ? tc.bg : "transparent",
                          border: `1px solid ${active ? tc.border : "transparent"}`,
                          transition: "all 0.2s ease",
                        }}
                      >
                        <div style={{
                          width: 32, height: 32, borderRadius: 8,
                          background: active ? tc.color : "#2a2a2a",
                          color: active ? "#0a0a0a" : "#888",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 12, fontWeight: 700, flexShrink: 0,
                          fontFamily: s.type === "linkedin" ? "'Space Mono', monospace" : "inherit",
                          transition: "all 0.2s ease",
                        }}>{tc.icon}</div>
                        <div style={{ overflow: "hidden" }}>
                          <div style={{
                            fontSize: 10, fontWeight: 600, textTransform: "uppercase",
                            letterSpacing: "0.08em", color: active ? tc.color : "#666", marginBottom: 1,
                            transition: "color 0.2s",
                          }}>{s.day}</div>
                          <div style={{
                            fontSize: 12.5, fontWeight: 600, color: active ? "#f5f5f5" : "#aaa",
                            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                            transition: "color 0.2s",
                          }}>{s.label}</div>
                        </div>
                      </div>
                      {i < steps.length - 1 && (
                        <div style={{
                          width: 1.5, height: 12, margin: "0 0 0 29px",
                          background: `repeating-linear-gradient(to bottom, #2a2a2a 0px, #2a2a2a 3px, transparent 3px, transparent 6px)`,
                        }} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right detail card */}
              <div
                key={activeStep}
                style={{
                  flex: 1, minWidth: 340, background: "#1a1a1a",
                  borderRadius: 20, border: "1px solid #2a2a2a",
                  padding: "28px 32px", display: "flex", flexDirection: "column",
                  animation: "slideIn 0.3s ease both",
                  maxHeight: 580, overflow: "hidden",
                }}
              >
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginBottom: 20, flexWrap: "wrap", gap: 10, flexShrink: 0,
                }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "6px 14px", borderRadius: 100,
                    background: ct.bg, color: ct.color, border: `1px solid ${ct.border}`,
                    fontSize: 11, fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase",
                  }}>
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {current.type === "email" && <IconEmail size={12} color={ct.color} />}
                      {current.type === "linkedin" && <IconLinkedIn size={12} color={ct.color} />}
                      {current.type === "phone" && <IconPhone size={12} color={ct.color} />}
                    </span>
                    {ct.label}
                  </div>
                  <div style={{
                    fontSize: 11, fontWeight: 600, color: "#666",
                    background: "rgba(255,255,255,0.03)", padding: "6px 12px", borderRadius: 100,
                    border: "1px solid #2a2a2a",
                  }}>{current.day}</div>
                </div>

                {current.subject && (
                  <h2 style={{
                    fontSize: 18, fontWeight: 700, color: "#f5f5f5",
                    letterSpacing: "-0.3px", marginBottom: 16, lineHeight: 1.3, flexShrink: 0,
                  }}>
                    {current.type === "email" && <span style={{ color: "#666", fontWeight: 500, fontSize: 13 }}>Subject: </span>}
                    {current.subject}
                  </h2>
                )}

                <div style={{ flex: 1, overflowY: "auto", paddingRight: 4 }}>
                  {renderDetailContent()}
                </div>

                {/* Navigation */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  marginTop: 20, paddingTop: 16, borderTop: "1px solid #222", flexShrink: 0,
                }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {steps.map((_, i) => (
                      <button key={i} onClick={() => setActiveStep(i)} style={{
                        width: i === activeStep ? 20 : 7, height: 7,
                        borderRadius: i === activeStep ? 3.5 : "50%",
                        background: i === activeStep ? ct.color : "#333",
                        border: "none", cursor: "pointer", transition: "all 0.25s ease", padding: 0,
                      }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {[
                      { dir: -1, disabled: activeStep === 0, path: "m15 18-6-6 6-6" },
                      { dir: 1, disabled: activeStep === steps.length - 1, path: "m9 18 6-6-6-6" },
                    ].map((btn, i) => (
                      <button key={i}
                        disabled={btn.disabled}
                        onClick={() => setActiveStep(activeStep + btn.dir)}
                        style={{
                          width: 32, height: 32, borderRadius: 8,
                          border: "1px solid #2a2a2a", background: "#141414",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: btn.disabled ? "default" : "pointer",
                          opacity: btn.disabled ? 0.25 : 1, transition: "all 0.15s ease",
                          padding: 0, color: "#aaa",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={btn.path}/></svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
