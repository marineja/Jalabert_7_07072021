import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
           <p class = "navbar-brand"> Groupomania</p>
        </div>
        <ul class="nav navbar-nav">
        <li class="active"><a href="/home">Home</a></li> 
        <li><a href="/Profil">Profil</a></li>
        <li><a href="/Posts">Post</a></li>
        </ul>
         <ul class="nav navbar-nav navbar-right">
         <li><a href="/Connexion"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="/Connexion"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
</nav>
    )
 }
export default Navbar;