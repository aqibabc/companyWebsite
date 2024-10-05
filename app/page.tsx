import Footer from "./(components)/footer/Footer";
import Header from "./(components)/header/Header";
import AlcalineWorks from "./section/alcalineWorks/AlcalineWorks";
import FeaturedResources from "./section/featuredResources/FeaturedResources";
import Hero from "./section/hero/Hero";
import OurTech from "./section/ourTech/OurTech";
import Project from "./section/project/Project";
import ServicesAproach from "./(components)/servicesApproach/ServicesApproach";
import Services from "./(components)/services/Services";
import GreatSoftware from "./section/greatSoftware/GreatSoftware";

export default function Home() {
  return (
    <>
      <div className="px-2 lg:px-5 pt-4">
        <Header />
        <Hero />
        <div className="containerbody">
          <Services />
          <Project />
          <GreatSoftware />
          <ServicesAproach />
          <AlcalineWorks />
          <FeaturedResources />
        </div>
        <Footer />
      </div>
    </>
  );
}
