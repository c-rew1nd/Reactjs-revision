import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
    <div>
        <h1>Custom App !</h1>
    </div>
    );
}
/*const ReactElemnt = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google' // the reason why ths code won't work here is because in custom react we were writting seperate custom render code to render it but here we are not writting any sort of such code
}*/

const anotherElement = (
    <a href="http://google.com" target="_black">Visit Google</a>
)
const anotherUser = 'Dreekt'
const ReactElemnt = React.createElement(
        'a',
        {
            href: 'https://google.com',
            target:"_blank"},
            'Click me to visit google',
            anotherUser // cannot write a proper function due to proper syntax.
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //ReactElemnt
   // <MyApp /> //MyApp()
    anotherElement
)
