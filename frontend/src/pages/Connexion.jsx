import React from "react";
import Login from "../components/Login"   
import { Redirect, useLocation } from 'react-router-dom';

const Connexion = ({onLogin}) => {
    const [redirectToReferrer, setRedirectToReferrer] = React.useState(false)
    const [redirectToAccountCreated, setRedirectToAccountCreated] = React.useState(false)
    const { state } = useLocation()

    const handleSubmit = () => {
        
        const url = 'http://localhost:8000/api/user/login/'; 
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.username === username) {
                    onLogin(data);
                    setRedirectToReferrer(true)
                }
            })
            .catch(err => {console.log(err)});
    }} 

    const handleRegister = () => {
        setRedirectToAccountCreated(true)
    } 

    export default Connexion;   