
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Switch

} from "react-router-dom";
import BgParallax from './components/BgParallax';
import Dummydiv from './components/Dummydiv';
import Home from './components/Home';
import Footer from './components/Footer';
import Srhsuccess from './components/Srhsuccess'


function App() {


  const [progress, setProgress] = useState(0)
  return (
    <Router>

      <NavBar />
      <BgParallax />
      <Dummydiv />
      <div style={{backgroundColor: 'rgb(255 255 255)', marginTop: '33px'}}> 
      {/* <Carousel /> */}
      

        <Switch>

          <Route exact path="/"> <Home/> </Route>

          <Route exact path="/searchresult"><Srhsuccess/></Route>
          <Route exact path="/team">  </Route>
          <Route exact path="/about">  </Route>
          <Route exact path="/projects">  </Route>
          <Route exact path="/works">  </Route>
        </Switch>

        </div>
        <Footer/>
    </Router>
  );
}

export default App;
