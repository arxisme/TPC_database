import { FaCheck } from 'react-icons/fa';

const LoginForm = ({userName, setUserName, handleSubmit, passwd, setPasswd}) => {

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
            autoComplete= "0"
            type="password" 
            id="passwd"
            className="passwd"
            placeholder="Password"
            value={passwd}
            onChange={(e) => {setPasswd(e.target.value)}}
            />
            <button 
            type="submit"
            ><FaCheck/></button>
        </form>
        </>
    )
}

export default LoginForm;