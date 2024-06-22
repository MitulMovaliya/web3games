import { Manrope } from "next/font/google";
import "./globals.css"

const inter = Manrope({
  weight: '600',
  subsets: ["latin"]
});

export const metadata = {
  title: "Web3Games",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
