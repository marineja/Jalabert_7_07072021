import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container row align-items-center">
            <div className="col-md-6 text-center home-left">
                <h1 className="display-1">Bienvenue <strong>sur</strong></h1>
                <h2  className="display-3">Groiupomania</h2>
                <blockquote className="blockquote">
                    <p>Le meilleur réseau social d'entreprise</p>
                </blockquote>

                <Link to="/connexion">
                <button type="button" className="btn btn-outline-success home-btn ">
                    Veuillez vous connecter ou vous inscrire:
                    <i className="bi-bell btn-icon"></i>
                </button>
                </Link>
               
            </div>

            
        </div>
    )
}

export default Home;