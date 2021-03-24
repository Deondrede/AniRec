import React, { Component } from "react";
// I use axios for this but if you want to try using something else like ajax you're free to do so
// Also axios is a separate module so don't forget to do 'npm install axios'
const axios = require('axios').default;


//Probably don't need to set these CSRF tokens, too lazy to remove to see what ungodly errors might appear
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

// Function registered to onCLick
// Since this is the login page and not the register page, once the register page is done we can just copy this over
// Implemented it here just for testing purposes
function register(){
    // All requests need to be sent int the FormData format
    let bodyFormData = new FormData();
    // Obtain the values from the textfields and append them to the FormData
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    // Sends the POST request to the backend, all POST requests are sent to the localhost:5000/users
    // Sending requests to the normal localhost:5000 will not fulfil any requests
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
                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={register}>Sign in</button>
            </form>
        );
    }
}