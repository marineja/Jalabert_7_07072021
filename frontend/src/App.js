import * as React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Connexion from "./pages/Connexion";
import Posts from "./pages/Posts"; 
import AccountCreated from "./pages/AccountCreated";
import PrivateRoute from "./components/PrivateRoute";

// importer le scss?

/*function App() {
  const [loggedUser, setLoggedUser] = React.useState([]);
  const [auth, setAuth] = React.useState(false);
  

  const handleLogin = (user) => {
    setAuth(true);
    setLoggedUser(user);
  };
  

  return (
    <div className="App container-fluid d-flex flex-column min-vh-100">
      <Router>
      

        {/* Main : Corps de l'application */ // ajouter}
       /* <main className="container-fluid">
          <Routes>
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

            
          </Routes>
        </main>

        
      </Router>
    </div>
  );
} */

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Connexion />} />
          
          <Route path="/profil" element={<Profil />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
