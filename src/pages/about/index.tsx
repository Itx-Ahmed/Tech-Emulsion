import AboutAndConnectSection from "../../components/about/about-and-connect-section";
import CreativePortfolio from "../../components/about/CreativePortfolio";
import HowweEmpower from "../../components/about/HowweEmpower";
import Innofusiontech from "../../components/about/Innofusiontech";
import SaaSShowcase from "../../components/about/SaaSShowcase";
import ServicesOverview from "../../components/about/ServicesOverview";
import VisionAndExpertise from "../../components/about/VisionAndExpertise";

function About() {
  return (
    <>
      <Innofusiontech />
      <AboutAndConnectSection />
      <HowweEmpower />
      <VisionAndExpertise />
      <ServicesOverview />
      <CreativePortfolio />
      <SaaSShowcase />
    </>
  );
}

export default About;
