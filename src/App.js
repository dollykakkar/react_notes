import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Home from './Components/Home';
import Intro from './Components/Intro';
import Dom from './Components/Dom';
import NodeJs from './Components/NodeJs';
import Question from './Components/Question';
import GitHub from './Components/GitHub';
import Others from './Components/Others';
import Routing from './Components/Routing';
import Component from './Components/Component';
import Hooks from './Components/Hooks';
import Props from './Components/Props';
import CallBackHell from './Components/CallBackHell';
import PropsDrilling from './Components/PropsDrilling';
import Barrr from './Components/Barrr';
// import { Component } from 'react';
// import PrismExample from './Components/PrismExample';
function App() {
  // const code='let a=10'
 
  return (
    <div className="App">
      {/* <div>
        <h2>Prism example</h2>
        <PrismExample code={code} language="javascript"/>
      </div> */}
      <Router>
      <Barrr/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Intro' element={<Intro/>}/>
          <Route path='/Dom' element={<Dom/>}/>
          <Route path='/Node' element={<NodeJs/>}/>
          <Route path='/Git' element={<GitHub/>}/>
          <Route path='/Question' element={<Question/>}/>

          <Route path='/others' element={<Others/>}/>
          <Route path='/routing' element={<Routing/>}/>
          <Route path='/component' element={<Component/>}/>
          <Route path='/hooks' element={<Hooks/>}/>
          <Route path='/props' element={<Props/>}/>
          <Route path='/callback' element={<CallBackHell/>}/>
          <Route path='/drilling' element={<PropsDrilling/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
