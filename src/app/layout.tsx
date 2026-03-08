import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nihal Shafi — Web & Mobile Developer",
  description: "Portfolio of Nihal Shafi, a skilled Web Developer and Mobile Developer crafting seamless digital experiences with React, Next.js and React Native.",
  keywords: ["Nihal Shafi", "Web Developer", "Mobile Developer", "React", "Next.js", "React Native", "Portfolio"],
  authors: [{ name: "Nihal Shafi" }],
  openGraph: {
    title: "Nihal Shafi — Web & Mobile Developer",
    description: "Crafting seamless digital experiences through code.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {children}
      </body>
    </html>
  );
}
