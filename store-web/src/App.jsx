import { Services } from './Components/Services';
import { FooterCentered } from './Components/Footer';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import BusinessHours from './Components/BusinessHours';
import About from './Components/About'
import Home from './Components/Home'
import {Routes, Route} from "react-router-dom"
import Header1 from './Components/Header';
function App() {
  return (
    <>
    <Header1/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/FAQ" element = {<FAQ/>}/>
      <Route path = "/About" element = {<About/>}/>
      <Route path = "/Services" element = {<Services/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
    </Routes>
    <FooterCentered/>
    </>
  );
}

export default App;
