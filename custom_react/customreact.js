function customRender(reactElemnt,mainContainer){
    const domElement = document.createElement
    (reactElemnt.type)
    domElement.innerHTML = reactElemnt.children
    domElement.setAttribute('href', reactElemnt.props.href )
    domElement.setAttribute('target', reactElemnt.props.target)
    constainer.appendChild(domElement)
}

const reactElemnt = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer =  document.getElementById("#root")

customRender(reactElemnt,mainContainer) 
