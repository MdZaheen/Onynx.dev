import Home from '@/app/Home/page'
import About from '@/app/About/page'
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import MainLayout from '@/app/MainLayout';
// import  AboutDetailZaheen  from '@/app/AboutDetailZaheen/page';

export default function HomePage() {
  return (
    // <MainLayout>

      <div className="flex flex-col min-h-screen bg-black text-white w-full relative overflow-hidden">
        <div className="relative">
          <Header />
          <Navbar />
        </div>
        <Home />
        
      </div>

    // </MainLayout>

  );
}
