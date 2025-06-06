import React from "react";
import { AdoptionSection } from "./AdoptionSection";
import { Banner } from "./Banner";
import { FeaturedPetsSection } from "./FeaturedPetsSection";
import { FooterSection } from "./FooterSection";
import { NewsletterSection } from "./NewsletterSection";
import { ProductShowcaseSection } from "./ProductShowcaseSection";
import { HeaderSection } from "./HeaderSection";

export const Homepage = () => {
  return (
    <div className="bg-white d-flex flex-column align-items-center w-100">
      <div className="bg-light w-100 mx-auto" style={{ maxWidth: '1440px', overflow: 'hidden' }}>
        <HeaderSection />
        <FeaturedPetsSection />
        <Banner from={'banner1'} />
        <ProductShowcaseSection />
        <AdoptionSection />
        <Banner from={'banner2'} />
        <NewsletterSection />
        <FooterSection />
      </div>
    </div>
  );
};
