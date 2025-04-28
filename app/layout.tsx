import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yemo Consulting",
  description: `
  Yemo Consulting is consulting company that helps business save costs and gain profits (revenue growth).
  For this reason, we offer our services in different area like: 
  In Technology:
    - Data Science
    - Machine Learning 
    - Artificial Intelligence 
    - Cloud Computing 
    - Computer Vision
  In Business:
    - How to start a new business 
    - Business Communication 
`,
  icons: {
    icon: "/favicon.ico",
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
        <title>{metadata.title as string}</title>
      </head>
      <body className={`${font.className}`}>{children}</body>
    </html>
  );
}
