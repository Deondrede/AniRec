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
   /*constructor(props){
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // email
        if (!fields["email"]){
            formIsValid = false;
            errors["email"] = "Required"
        }

        if (typeof fields["email"] !== "undefined"){
            let atPos = fields["email"].lastIndexOf('@');
            let dotPos = fields["email"].lastIndexOf('.');

            if (!(atPos < dotPos && atPos > 0 && fields["email"].indexOf('@@') == -1 && dotPos > 2 &&fields["email"].length - dotPos > 2)){
                formIsValid = false;
                errors["email"] = "Not a Valid Email"
            }
        }

        // username
        if (!fields["name"]){
            formIsValid = false;
            errors["name"] = "Required"
        }

        if (typeof fields["name"] !== "undefined"){
            if (!fields["name"].match(/^[a-zA-Z0-9]+$/)){
                formIsValid = false;
                errors["name"] = "Invalid Username"
            }
        }

        if (!fields["password"]){
            formIsValid = false;
            errors["password"] = "Required"
        }

        if (typeof fields["password"] !== "undefined"){
            if (!fields["name"].match(/^[a-zA-Z0-9]+$/)){
                formIsValid = false;
                errors["name"] = "Invalid Characters Found"
            }
        }

        // password
        this.setState({errors: errors});
        return formIsValid;
    }*/

    //<button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>


    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username *" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password *" />
                </div>

                <button className="btn btn-dark btn-lg btn-block" onClick={register}>
                        <a id="reg_btn" href="/Survey"> Register </a>
                    </button>
            </form>
        );
    }
}