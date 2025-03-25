import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "A website to showcase my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="Main Body">
        {children}
      </body>
    </html>
  );
}
