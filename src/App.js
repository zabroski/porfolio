import React from 'react';
import './App.css';
import About from './components/About'
import Icone from './components/Icone'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Restaurant from './components/Restaurant'
import SnakeGame from './components/SnakeGame'
import RoutineApp from './components/RoutineApp'
import MusicApp from './components/MusicApp'
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }
  render(){
    return (
      <div className="App">
        {/* <Header/> */}

        
        <Route path="/" exact={true} render={(props) => {
          return (
            <span>
              <About />
              <Icone />
              <Projects />
              <Footer />
            </span>
          );
        }} />

        <Route path="/project/routine" exact={true}  render={(props) => {
          return (
            <span>
              <Icone />
              <RoutineApp />
            </span>
          )
        }} />

        <Route path="/project/restaurant" exact={true} render={(props) => {
          return (
            <span>
              <Icone />
              <Restaurant  />
            </span>
          );
        }} />

         <Route path="/project/snake" exact={true}  render={(props) => {
          return (
            <span>
              <Icone />
              <SnakeGame />
            </span>
          ) 
        }} />

          <Route path="/project/music" exact={true}  render={(props) => {
          return(
            <span>
               <Icone />
                <MusicApp />
            </span>
          ) 
        }} />
      </div>
    );
  }
}

export default App;
