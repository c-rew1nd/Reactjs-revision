import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

function Login(){
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = () => {
        e.preventDehault()
        setUser({userName, password})
    }

    return(
        <div>
            <h3>Login</h3>
            <input type="text" 
            value= {userName}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name" />
            <br/>
            <input type="text" 
            value= {password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login