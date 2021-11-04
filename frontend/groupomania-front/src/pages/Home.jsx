import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div className="home-container row align-items-center">
            <div className="col-md-6 text-center home-left">
                <h1 className="display-1">Bienvenue <strong>to</strong></h1>
                <h2  className="display-3">GROUPOMANIA</h2>
                <blockquote className="blockquote">
                    <p>Le meilleur reseau social d'entreprise!</p>
                </blockquote>

                <Link to="/login">
                <button type="button" className="btn btn-outline-success home-btn ">
                    J'ai besoin d'aide
                    <i className="bi-bell btn-icon"></i>
                </button>
                </Link>
                
            </div>

            <div className="col-md-6 home-right">
                <img src="/home-ban.png" alt="Home banner"></img>

            </div>
        </div>
    )
}

export default Home;