function customRender(reactElement,mainContainer){

    /*
    const domElement = document.createElement
    (reactElemnt.type)
    domElement.innerHTML = reactElemnt.children
    domElement.setAttribute('href', reactElemnt.props.href )
    domElement.setAttribute('target', reactElemnt.props.target)
    constainer.appendChild(domElement)
    */

    const domElement = document.createElement (reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
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
