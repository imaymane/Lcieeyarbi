import HeroSection from "./hero-section";
import ContactUs from "./contact-us";
import DisplayLaboratories from "./laboratories";
import FooterBar from "./footer-bar";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center z-40">
      <HeroSection />
      <div className="flex">
        <ContactUs />
        <DisplayLaboratories />
      </div>
      <FooterBar />
    </div>
  );
}

export default Footer;