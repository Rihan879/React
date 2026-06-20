import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import ToggleText from './components/ToggleText';
import CharacterCounter from './components/CharacterCounter';

function App() {
  return (
    // <div>
    //   <Student
    //     name="Rihan"
    //     branch="Computer Science"
    //     marks={85}
    //   />
    // </div>
    //  <div>
    //   <Greeting />
    // </div>
    <div>
      {/* <Counter /> */}
      {/* <ToggleText /> */}
      <CharacterCounter />
    </div>
  );
}

export default App
