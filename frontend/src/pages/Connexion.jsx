import axios from "axios"
import React from "react";
import {Link, NavLink} from "react-router-dom"
import {useForm} from "react-hook-form"
import {useState} from "react"
//import Posts from "./pages/Posts"; 

import logorouge from 'C:/Users/marin/Desktop/projet 7/Jalabert_7_07072021/frontend/src/assets/logo-nom-rouge.png';


function myFunction1() {
    let minHeight = document.getElementById("login-wrap");
    minHeight.style.minHeight = "550px";

    }
function myFunction2() {
    let minHeight = document.getElementById("login-wrap");
    minHeight.style.minHeight = "850px";

}
const Login = ({onSubmit, onRegister}) => {
    const[badCredentials, setBadCredentials] = React.useState(false);
    // FORM STATE
    const[logUserValue, setLogUserValue] = React.useState("");
    const[logPassValue, setLogPassValue] = React.useState("");
    const[regPrenomValue, setRegPrenomValue] = React.useState("");
    const[regNomValue, setRegNomValue] = React.useState("");
    const[regUserValue, setRegUserValue] = React.useState("");
    const[regPassValue, setRegPassValue] = React.useState("");
    const[regEmailValue, setRegEmailValue] = React.useState("");
    

    // FIELD HANDLERS
    const onLogUserChange = (e) => setLogUserValue(e.target.value);
    const onLogPassChange = (e) => setLogPassValue(e.target.value);
    const onRegPrenomChange = (e) => setRegPrenomValue(e.target.value);
    const onRegNomChange = (e) => setRegNomValue(e.target.value);
    const onRegUserChange = (e) => setRegUserValue(e.target.value);
    const onRegPassChange = (e) => setRegPassValue(e.target.value);
    const onRegEmailChange = (e) => setRegEmailValue(e.target.value);
    

    // LOGIN HANDLER
    const handleLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                username:logUserValue,
                password:logPassValue,
            })
        };
        
        fetch('http://localhost:3000/api/user/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.status === "ok") {
                    console.log(data)
                    onSubmit(logUserValue);
                } else {
                    console.log(data);
                    setBadCredentials(true)
                }
            }).catch(err => {console.log(err)});
    }
    // REGISTER HANDLER
    const handleRegister = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                username:regUserValue,
                password:regPassValue,
                email: regEmailValue,
              
            })
        };
        fetch('http://localhost:3000/api/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.status === "ok") {
                    onRegister();
                } else {
                    console.log(data);
                }
            }).catch(err => {console.log(err)});
    }
    // RENDER FORM
    //function AfficheLogin() {
    return (
        <>  <img src={logorouge} /> 
            <div id="login-wrap">
            <div id="login-html">
                {/* CONNEXION / INSCRIPTION */}
                <input id="tab-1" type="radio" name="tab" className="sign-in" onClick={myFunction1} defaultChecked></input>
                <label htmlFor="tab-1" className="tab">Connexion</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" onClick={myFunction2}></input>
                <label htmlFor="tab-2" className="tab">Inscription</label>
                {/* FORMULAIRE */}
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label htmlFor="user" className="label">Pseudo</label>
                            {/* Champ controlé : logUserValue */}
                            <input id="user" type="text" className="input" value={logUserValue} onChange={onLogUserChange}></input>
                        </div>
                        <div className="group">
                            <label htmlFor="pass" className="label">Mot de passe</label>
                            {/* Champ controlé : logPassValue */}
                            <input id="pass" type="password" className="input" data-type="password" value={logPassValue} onChange={onLogPassChange}></input>
                        </div>
                        {badCredentials ? <span className="text-danger">Veuillez vérifier votre nom d'utilisateur et password</span> : null}
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" onClick={handleLogin}></input>
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Mot de passe oublié?</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label htmlFor="prenom" className="label">Prénom</label>
                            {/* Champ controlé : regPrenomValue */}
                            <input id="prenom" type="text" className="input" value={regPrenomValue} onChange={onRegPrenomChange}></input>
                        </div>
                        <div className="group">
                            <label htmlFor="nom" className="label">Nom</label>
                            {/* Champ controlé : regNomValue */}
                            <input id="nom" type="text" className="input" value={regNomValue} onChange={onRegNomChange}></input>
                        </div>
                        <div className="group">
                            <label htmlFor="regUser" className="label">Username </label>
                            {/* Champ controlé : regUserValue */}
                            <input id="regUser" type="text" className="input" value={regUserValue} onChange={onRegUserChange}></input>
                        </div>
                        <div className="group">
                            {/* Champ controlé : regPassValue */}
                            <label htmlFor="regPass" className="label">Mot de passe</label>
                            <input id="rePass" type="password" className="input" data-type="password" value={regPassValue} onChange={onRegPassChange}></input>
                        </div>

                        <div className="group">
                            <label htmlFor="email" className="label">Email </label>
                            {/* Champ controlé : regEmailValue */}
                            <input id="email" type="text" className="input" value={regEmailValue} onChange={onRegEmailChange}></input>
                        </div>
                        
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up"  onClick={handleRegister}></input>
                        </div>
                        <div className="hr"></div>
                    </div>
                </div>
            </div>
        </div><div className="home-container row align-items-center">
                <div className="col-md-6 text-center home-left">
                    <h1 className="display-1">Bienvenue <strong>sur</strong></h1>
                    <h2 className="display-3">Groupomania</h2>
                    <blockquote className="blockquote">
                        <p>Le meilleur réseau social d'entreprise</p>
                    </blockquote>



                </div>


            </div></>
    )
}


export default Login 



