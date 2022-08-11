import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Promo from './Promo/Promo';
import Footer from '../Footer/Footer';
import Portfolio from './Portfolio/Portfolio';

function Main(props) {
  return(
    <>
      <Promo loggedIn={props.loggedIn}/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default Main;
