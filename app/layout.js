import { Manrope } from "next/font/google";
import "./globals.css"

const inter = Manrope({
  weight: '500',
  subsets: ["latin"]
});

export const metadata = {
  title: "M2P Esports",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
