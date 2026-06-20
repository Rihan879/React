import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './components/Student'


function App() {
  return (
    <div>
      <Student
        name="Rihan"
        branch="Computer Science"
        marks={85}
      />
    </div>
  );
}

export default App
