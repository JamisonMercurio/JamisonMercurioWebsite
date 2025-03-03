import type { Metadata } from "next";
import "./globals.css";
import "./NavBarStyle.css";

export const metadata: Metadata = {
  title: "Jamison Mercurio",
  description: "Personal website and portfolio of Jamison Mercurio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
