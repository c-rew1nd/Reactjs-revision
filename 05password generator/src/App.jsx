import { useState , useCallback } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passGenerator = useCallback(() => {
    let pass =""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+-=[]{}|;:',.<>?/~`"

    for (let i =1; i<= array.length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
      <h1 className="text-center text-3xl text-white">Password Generator</h1>
        <div className='flex shadow rounded-md overflow-hidden py-4'>
          <input type="text"
          value={Password} 
          className ="rounded-lg outline-none w-full py-1 px-3"
          placeholder='password'
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg ml-2'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min="6" 
              max="100"
              value={length}
              onChange={(e) => setLength(e.target.value)} // Assuming you're using React state
              className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
