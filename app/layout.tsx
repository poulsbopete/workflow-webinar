import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elastic Workflows | Intelligent Observability Automation",
  description: "Webinar: From Alert to Resolution — AI-Powered Workflows in Elastic",
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
