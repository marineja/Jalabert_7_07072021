import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Connexion from "./pages/Connexion";
import Posts from "./pages/Posts"; 

import Login from "./components/Login"; 
import NotFound from "./pages/NotFound";

import AccountCreated from "./pages/AccountCreated";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedUser, setLoggedUser] = React.useState([]);
  const [auth, setAuth] = React.useState(false);
  

  const handleLogin = (user) => {
    setAuth(true);
    setLoggedUser(user);
  };
  const handleLogout = () => {
    setAuth(false);
    setLoggedUser([]);
  };

  return (
    <div className="App container-fluid d-flex flex-column min-vh-100">
      <Router>
        {/* Header : barre de navigation */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" aria-label="Navigation">
            <div className="container-fluid">
              {/* Conditionnelle pour changer une classe du logo si Login/Logout  penser à rajouter les image des logo*/}
              {auth ? (
                <a className="navbar-brand" href="/#">
                  <img src="" className="main-logo" alt="Logo de Groupomania"/>  
                  <img src="" className="main-brand" alt="Brand Logo de Groupomania"/>
                </a>
              ) : (
                <a className="navbar-brand navbar-brand-logout" href="/#">
                  <img src="" className="main-logo" alt="Logo de Groupomania"/>
                  <img src="" className="main-brand" alt="Brand Logo de Groupomania"/>
                </a>
              )}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarNavigation" aria-controls="navBarNavigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navBarNavigation">
                <ul className="nav navbar-nav mb-2 mb-lg-0 navbar-right">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link"activeClassName="active">Accueil</NavLink>
                  </li>
                  
                  {/* Conditionnelle pour les liens de navigation à masquer lorsque Logout */}
                  {auth ? (
                    <li className="nav-item">
                      <NavLink exact to="/profil" className="nav-link" activeClassName="active">Profil</NavLink>
                    </li>
                  ) : null}
                  {auth ? (
                    <li className="nav-item">
                      <NavLink exact to="/missions" className="nav-link" activeClassName="active">Posts</NavLink>
                    </li>
                  ) : null}
                 
                  {/* Conditionnelle pour le lien de navigation "Connexion" OU "Logout" */}
                  {auth ? (
                    <li className="nav-item">
                      <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <NavLink exact to="/connexion" className="nav-link" activeClassName="active">Login</NavLink>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Main : Corps de l'application */}
        <main className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            
            <Route path="/connexion">
              <Connexion onLogin={handleLogin} />
            </Route>
            <Route path="/new-account" component={AccountCreated} />

            <PrivateRoute isAuth={auth}>
              <Route path="/profil">
                <Profil user={loggedUser} />
              </Route>
              <Route path="/posts">
                <Posts user={loggedUser}/>
              </Route>
            </PrivateRoute>

            <Route component={NotFound} />
          </Switch>
        </main>

        {/* Footer : Bas de page */}
        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Mentions légales</h6>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Politique en matière de cookies</h6>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Politique de confidentialité</h6>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Conditions d'utilisation</h6>
              </div>
            </div>
          </div>
          <div className="text-center p-3 copyright-footer">
            © 2020 Copyright:<div className="text-dark">Groupomania</div>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
