// components
import DefaultNavbar from '../src/components/navbar/DefaultNavbar'
import './App.css';
import DefaultCarousel from "./components/defaultCarousel/DefaultCarousel";
import PersonalTitleMessage from './components/title-message/PersonalTitleMessage';
import About from "./pages/about/About";
import { Parallax } from "react-parallax";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import './App.css'


const App = () => {
  return (
     <div className="App" style={{ position: "relative" }}>
    <DefaultNavbar/>
    <DefaultCarousel/>
    <PersonalTitleMessage/>
    {/* About section */}
    <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
