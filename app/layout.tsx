import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/Header";
import SideLinks from "@/components/SideLinks";

const spacemono = localFont({
  src: "../public/SpaceMono-Regular.ttf"
});

export const metadata: Metadata = {
  title: "Own3r's Website",
  description: "Own3r's Personal Website, Portfolio and Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spacemono.className} antialiased`}>

        <div id="grid">
          <div className="flex flex-col min-h-[100vh]">
            <Header />
            <SideLinks />
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
