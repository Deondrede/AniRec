import React from "react";
import "./Loginpage.css";
//function for login page = home page
function LoginPage(){
    return(
        <div className="login">
            <h1>AniRec</h1>
            <p>A plot based Anime Recommender</p>
            <p>made by students of CUNY Hunter College Spring 2021 CSCI 499</p>

            <button onClick>Login</button>
            <button onClick>Register</button>

        </div>
    );
}

export default LoginPage;