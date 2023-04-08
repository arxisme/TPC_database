import { useState } from 'react';

const Login_form = () => {

    const [userName,setUserName] = useState('');
    const [passwd,setPasswd] = useState('');
    let encrypt = "";

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(userName);

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Enter Username: </label>
            <input
            id="username"
            className="username"
            placeholder="Username"
            value={userName}
            onChange={(e)=> {setUserName(e.target.value)}}
            type="text"
             />
            <label htmlFor="passwd">Enter Password: </label>
            <input
            autocomplete= "0"
            type="password" 
            id="passwd"
            className="passwd"
            placeholder="Password"
            value={passwd}
            onChange={(e) => {setPasswd(e.target.value)}}
            />

        </form>
        </>
    )
}

export default Login_form;