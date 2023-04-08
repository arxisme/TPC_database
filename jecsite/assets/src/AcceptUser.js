const AcceptUser = ({userTrue, submitted}) => {
    
    return(
        <main>
        {userTrue && <p>Login Accepted</p>}
        {!userTrue && submitted && <p>User Not registered</p>}
        </main>   
    )

}

export default AcceptUser;