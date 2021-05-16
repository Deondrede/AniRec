import React, { Component } from "react";
/*
// I used axios for this but if you want to try using something else like ajax you're free to do so
// Also axios is a separate module so don't forget to do 'npm install axios'
const axios = require('axios').default;

// An example of a GET request
axios.get('http://localhost:5000').then((response) =>{
        console.log(response.data);
});

// How the login is going to work
// Note: This isn't the most secure way to do this but since the crux of this project isn't in the security then it should be fine
// We're going to set check whether a user is logged by making use of local storage,
// on login, a key value with their username is going to be set, we're going to use that value to load their prefernces,
// and once they log out we can delete what's inside local storage and return them to the main page
function onLogin(){
    axios.get('http://localhost:5000').then((response) =>{
        let getRequest = response.data
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        for (let user in getRequest){
            if (getRequest[user]["fields"]["username"] == username && getRequest[user]["fields"]["password"] == password){
                window.localStorage.setItem("username", username); // Set the user's username in local storage
                //Transition to next screen, however this is supposed to work in React
            }
            else{
                alert("No user found")
            }
        }
    });
}
// Compare what's in the username and password text fields with what's in the database via a GET request
// If they match then we can set the key in local storage to the username of the logged in user and redirect them to the main page
// We can then use what's in local storage to determine what user info we need to load e.g preferred genres


//Probably don't need to set these CSRF tokens, but too lazy to remove to see what ungodly errors might appear
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

// Function registered to onCLick
// Since this is the login page and not the register page, once the register page is done we can just copy this over
// Implemented it here just for testing purposes

*/
export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input id="username" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input id="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" /*onClick={onLogin}*/>
                    <a id="reg_btn" href="/Anime"> Sign in </a>
                </button>
            </form>
        );
    }
}
//onClick={register}