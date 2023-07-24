import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import logoXs from "./assets/ironhackLogo.png"
import menuXs from "./assets/menuIcon.png"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"

// src/App.jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-part">
        <div className="logo-menu-img">
          <img src={logoXs} className="logo-Xs" alt="ironhack-logo"/>
          <img src={menuXs} className="menu-Xs" alt="ironhack-menu"/>
        </div>
        <div className="title">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        </div>
        <div>
          <button>Awesome!</button>
        </div>
      </div>
      <div className="items">
        <div>
          <img src={icon1} className="icon1" alt="icon1"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} className="icon2" alt="icon2"/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} className="icon3" alt="icon3"/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} className="icon4" alt="icon4"/>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
