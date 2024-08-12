import Chai from "./Chai"
// refresh by using reload windows
function App() {
  const username='chai aur code'
  return (
    <> 
    <Chai/>
    <h1>Chai aur react {username}</h1> 
    <p>Test Para</p>
    </>// {username} this is called as evaluated expression i.e, only the final outcome is written.
  )
}
// we use <> </> to pass the code as a single object
export default App

