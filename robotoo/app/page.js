import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Stat from "./_components/Stat";
import Showcase from "./_components/Showcase";
import Pricing from "./_components/Pricing";
import Faq from "./_components/Faq";
import CallToAction from "./_components/CallToAction";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="stat">
        <Stat />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="cta">
        <CallToAction />
      </section>
      <Footer />
    </div>
  );
}
