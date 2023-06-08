import Header1 from './Header';
import { HeroHeader } from './HeroHeader';
import { Services } from './Services';
import Testimonials from './Testimonials';
import { FooterCentered } from './Footer';
import ContactHome from './ContactHome';
import FAQ from './FAQ';
import Contact from './Contact';
import BusinessHours from './BusinessHours';
import AboutUs from './AboutUs'
function Home() {
    return (
      <>
      <Header1/>
      <HeroHeader/>
      <Testimonials/>
      <BusinessHours/>
      <ContactHome/>
      <FooterCentered/>
      </>
    );
  }
  
  export default Home;