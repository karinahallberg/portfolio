// components
import DefaultNavbar from '../src/components/navbar/DefaultNavbar'
import './App.css';
import DefaultCarousel from "./components/defaultCarousel/DefaultCarousel";
import PersonalTitleMessage from './components/title-message/PersonalTitleMessage';


const App = () => {
  return (
    <div>
    <DefaultNavbar/>
    <DefaultCarousel/>
    <PersonalTitleMessage/>
    </div>
  );
}

export default App;
