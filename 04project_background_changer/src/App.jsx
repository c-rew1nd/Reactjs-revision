import {useState} from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div
          className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button 
            onClick={() => setColor("red")} // we cannot write onClick={setColor("")}  and use callback instead because the onClick expects us to pass a function not the reference of a function or executed function and thus it is not a problem of react or js but simply of syntax.
            className="outline-none px-4 py-1 rounded-full text-white shadow-3lg" 
            style={{backgroundColor: "red"}}>Red</button>
            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-3lg" 
            style={{backgroundColor: "green"}}>Green</button>
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-3lg" 
            style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-3lg" 
            style={{backgroundColor: "black"}}>reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
