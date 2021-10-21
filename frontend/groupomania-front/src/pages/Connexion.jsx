const handleSubmit = (username) => {
    console.log(username)
    const url = 'http://localhost:8080/api/user/find?username=' + username;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.username === username) {
                onLogin(data);
                setRedirectToReferrer(true)
            }
        }).catch(err => {console.log(err)});
}
const handleRegister = () => {
    setRedirectToAccountCreated(true)
}

// Si Login, rediriger l'utilisateur sur une autre page
if (redirectToReferrer) {
    return <Redirect to={state?.from.pathname || '/'} />
}
// Si compte créé, rediriger vers la page AccountCreated
if (redirectToAccountCreated) {
    return <Redirect to={state?.from.pathname || '/new-account'} />
}


export default Connexion;