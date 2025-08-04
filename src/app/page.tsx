import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white w-full relative overflow-hidden">
      <div className="relative">
        <Header />
        <Navbar />
      </div>
      <Home />
      <About />
     
    </div>
  );
}
