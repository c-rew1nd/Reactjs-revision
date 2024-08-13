import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 5
  const addValue = () => {
    console.log("added value", Date().toString());
    counter = counter + 1
    
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: 5</h2>
     <button
     onClick={addValue}
     >add value</button>
     <br />
     <button>remove value</button>
    </>
  )
}

export default App
