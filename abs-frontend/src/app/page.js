import Navbar from "./component/layout/Navbar";
import HeroSection from "./component/layout/HeroSection";
import AboutSection from "./component/layout/AboutSection";
import OurServicesSection from "./component/layout/OurServicesSection";
import OurPartnersSection from "./component/layout/OurPartnersSection";
import ReviewSection from "./component/layout/ReviewSection";
import ContactUsSection from "./component/layout/ContactUsSection";
import Footer from "./component/layout/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurServicesSection />
      <OurPartnersSection />
      <ReviewSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
