import React, { Component } from "react";
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
// If they match then we can set the cookie to the username of the logged in user and redirect them to the main page
// We can then use the cookie to determine what user info we need to load e.g preferred genres


//Probably don't need to set these CSRF tokens, but too lazy to remove to see what ungodly errors might appear
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

// Function registered to onCLick
// Since this is the login page and not the register page, once the register page is done we can just copy this over
// Implemented it here just for testing purposes
function register(){
    // All requests need to be sent in the FormData format
    let bodyFormData = new FormData();
    // Obtain the values from the textfields and append them to the FormData
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    // Sends the POST request to the backend, all POST requests are sent to the localhost:5000/users
    // Sending POST requests to the normal localhost:5000 will not fulfil any requests
    axios({
        method: "post",
        url: "http://localhost:5000/users",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
}

export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input id="username" type="username" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input id="password" type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={onLogin}>Sign in</button>
            </form>
        );
    }
}