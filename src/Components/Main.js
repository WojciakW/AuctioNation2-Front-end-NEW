import Navbar from "./Navbar";
import FormContainer from "./FormContainer";
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax';
import Chest from "./Chest";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Chest />
      <FormContainer />
      <Footer />
    </>
  )
};

export default Main;