import react, {Component} from "react";
import about from './img/GroupPhoto.png';
import './App.css';
import giftest from "./img/3Ph.gif";
import gameplay1 from "./img/gameplay1.gif";
import gameplay2 from "./img/gameplay2.gif";
import gameplay3 from "./img/gameplay3.gif";
import logopart1 from "./img/partner1.png";
import logopart2 from "./img/partner2.png";
import logopart3 from "./img/partner3.png";

function App() {
  return (
    /*
      *testando
      */
    <div className="App">
      
      <div className="sitecontent">
        <header className="top-bar">
          <div className="top-barA">
          <a href="#about" style={{textDecoration:'none', color:'black'}}>About Us</a>
          </div>
          <div className="top-barB">
            <a href="#download" style={{textDecoration:'none', color:'black'}}>Check our Games</a>
          </div>
        </header>
        <div className="site">
          <div className="aboutus"id="about">
            <img src={about}/>
            <div className="abouttext">
            <text className="abouttitle" >About <text style={{color:'#E94F02'}}>Us</text></text>
            <text className="abouttext">
            <p>We are a studio of passionate professionals, born to turn bold ideas into unforgettable experiences — going where no one has gone before.</p></text>
            </div>
          </div>
          <div className="game">
            <p style={{fontSize:'x-large'}}>
              Games in development
            </p>
            <div className="ZombieRanch">
              <div className="zombieimg">
                <img src={gameplay3}/>
              </div>
              <div className="zombietext" id="download">
                <p style={{fontSize:'larger'}}>Zombie Ranch</p>
                <p style={{fontSize:'small'}}>Relax while growing your farm — but don’t get bored! Hordes of zombies are coming for you! With each mission, your farm gets stronger. Show those brain-dead creeps who's boss in this zombie-like farming game! <a href="https://not-a-fox.itch.io/zombie-ranch" style={{textDecoration:'none', color:'#E94F02'}}>CLICK HERE</a> to see more</p>
              </div>
            </div>
          </div>
          <div className="partners">
            <p style={{fontSize:'x-large'}}>Partners and contributors</p>
            <div className="partimg">
              <a href="https://blogs.pucpr.br/jogosdigitais/"><img src={logopart1}/></a>
              <a href="https://www.pucpr.br/"><img src={logopart2}/></a>
              <a href="https://www.unrealengine.com"><img src={logopart3}/></a>
            </div>
            <p>Contact Us: <text style={{fontFamily:'Arial, Helvetica, sans-serif'}}>Alvoradastudios@gmail.com</text> </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
