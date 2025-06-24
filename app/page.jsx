import Hero from "./components/Hero";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResponsiveHeader from "./components/Header/ResponsiveHeader";

export default function Home() {
  return (
    <div>   
      <Header />
      <Hero />
      <Footer />
      <div className="lg:hidden sticky bottom-0 z-10 bg-white border-t-[1px]">
        <ResponsiveHeader />
      </div>
    </div>
  );
}
