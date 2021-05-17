import React, { Component } from "react";

const axios = require('axios').default;

// An example of a GET request
axios.get('http://localhost:5000').then((response) =>{
        console.log(response.data);
});

function register(){
    // All requests need to be sent in the FormData format
    let bodyFormData = new FormData();
    // Obtain the values from the textfields and append them to the FormData
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    window.localStorage.setItem("username",username);
    // Sends the POST request to the backend, requests dealing with setting username and password are sent to localhost:5000/users
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
export default class SignUp extends Component {
    render() {
        return (
            <form>
                {/* forms */}
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username *" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password *" />
                </div>

                {/* register btn */}
                <a id="reg_btn" href="/Survey"> 
                <button className="btn btn-dark btn-lg btn-block" onClick={register}>
                    Register
                    </button></a>
            </form>
        );
    }
}