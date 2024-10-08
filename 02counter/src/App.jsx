import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(0)

  //let counter = 5
  const addValue = () => {
    console.log("added value", Date().toString());
    //counter = counter + 1 
    if(counter<20){ 
      setCounter(counter + 1)
    }
    else{
      console.log("value has to remian less than 21");
    }
    console.log(counter); // counter will be updated but no changes will appear on the UI
  }

  /*
  const addValue =() =>{
    setCounter(counter +1)
    serCounter(counter +1) -> this will return 16 because this is sent a bunch of packages or batch task in fibre and since all are similar functions, set counter returns call back.
  }
  ---------------------------------------------------
  const addValue =() =>{
    setCounter(prevcounter => prevcounter +1)
    serCounter(prevcounter => prevcounter +1) -> this will return 17  
  }
  */

  const removeValue = () =>{
    console.log("decreased Value" , Date().toString());
    if(counter>0){
      setCounter(counter -1)
    }
    else{
      console.log("value has to remian more than -1");
    }

    console.log(counter)// this is updated later because it is comming from the set counter which is comming for the queue again.
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>
     <button
     onClick={addValue}
     >add value</button>
     <br />
     <button
     onClick={removeValue}
     >remove value</button>
    </>
  )
}

export default App
