import AboutAndConnectSection from "../../components/about/about-and-connect-section";
import CreativePortfolio from "../../components/about/CreativePortfolio";
import HowweEmpower from "../../components/about/HowweEmpower";
import Innofusiontech from "../../components/about/Innofusiontech";
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
    </>
  );
}

export default About;
