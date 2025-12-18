import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prince Insight Studio",
  description: "Portfolio Content Management",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default Layout;
