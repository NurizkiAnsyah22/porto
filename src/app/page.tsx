import { Hero } from "@/components/Hero";
import { WhatIBuild } from "@/components/WhatIBuild";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Differentiators } from "@/components/Differentiators";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <FeaturedWork />
      <Differentiators className="mx-auto max-w-4xl px-6 pb-20 sm:px-10 lg:px-16" />
      <Footer />
    </>
  );
}
