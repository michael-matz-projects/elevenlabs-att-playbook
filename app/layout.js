export const metadata = {
  title: "ElevenLabs × AT&T — Outbound Playbook",
  description: "A strategic, multi-channel outbound playbook for engaging AT&T.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
