import React from "react";
import { Redirect, useLocation } from 'react-router-dom';

const Connexion = ({onLogin}) => {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false)
    const { state } = useLocation()

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        e.stopPropagation()
        onLogin()
        setRedirectToReferrer(true)
    }

    if (redirectToReferrer) {
        return <Redirect to={state?.from.pathname || '/'} />
    }

    return (
        <div>
            <form className="form-connexion me-auto ms-auto" method="GET" action="/">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Adresse mail</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberCheck"/>
                    <label className="form-check-label" htmlFor="rememberCheck">Rester connecté</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitLogin}>Login</button>
            </form>
        </div>
    )
}

export default Connexion;