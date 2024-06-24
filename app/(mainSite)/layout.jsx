import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col">
      <div className=" lg:px-[140px]">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
