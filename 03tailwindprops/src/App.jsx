/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  let myObj = {
    userName: 'Dreekt seayger',
    email: 'd@gmail.com'
  }

  let newArr = [1,2,3,4]
  // myObj, newArr can only be passed like {}

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>Chai aur code</h1>
    <Card channel="chai aur code" someObj={myObj} theArr = {newArr} btntext = "click me" /> 
    <Card channel="loren epsum" btntext="visit me"/>

    </>
  )
}

export default App
