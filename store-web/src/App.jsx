import Header1 from './Components/Header';
import { HeroHeader } from './Components/HeroHeader';
import { Services } from './Components/Services';
import Testimonials from './Components/Testimonials';
import { FooterCentered } from './Components/Footer';
import ContactHome from './Components/ContactHome';
import BusinessHours from './Components/BusinessHours';
function App() {
  return (
    <>
    <Header1/>
    <HeroHeader/>
    <Services/>
    <ContactHome/>
    <BusinessHours/>
    <FooterCentered/>
    </>
  );
}

export default App;
