import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';
// I used axios for this but if you want to try using something else like ajax you're free to do so
// Also axios is a separate module so don't forget to do 'npm install axios'
// const axios = require('axios').default;


// // An example of a GET request
// axios.get('http://localhost:5000').then((response) =>{
//         console.log(response.data);
// });

// // How the login is going to work
// // Note: This isn't the most secure way to do this but since the crux of this project isn't in the security then it should be fine
// // Setting the cookie is going to be how we're going to keep track of what user is signed in
// // If they log out then we either reset the cookie to "" or delete it entirely and redirect back to login page
// // function onLogin(){
//     // Compare what's in the username and password text fields with what's in the database via a GET request
//     // If they match then we can set the cookie to the username of the logged in user and redirect them to the main page
//     // document.cookie = "username=jsondata.fields.username; path/"; The "/" means that it will be set for all pages
// // } We can then use the cookie to determine what user info we need to load e.g preferred genres





// //Probably don't need to set these CSRF tokens, but too lazy to remove to see what ungodly errors might appear
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.withCredentials = true;

// // Function registered to onCLick
// // Since this is the login page and not the register page, once the register page is done we can just copy this over
// // Implemented it here just for testing purposes
// function register(){
//     // All requests need to be sent in the FormData format
//     let bodyFormData = new FormData();
//     // Obtain the values from the textfields and append them to the FormData
//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;
//     bodyFormData.append("username", username);
//     bodyFormData.append("password", password);
//     // Sends the POST request to the backend, all POST requests are sent to the localhost:5000/users
//     // Sending POST requests to the normal localhost:5000 will not fulfil any requests
//     axios({
//         method: "post",
//         url: "http://localhost:5000/users",
//         data: bodyFormData,
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//         .then(function (response) {
//           //handle success
//           console.log(response);
//         })
//         .catch(function (response) {
//           //handle error
//           console.log(response);
//         });
// }


class SignUp extends Component {
    render() {
        return (
            <Fragment>
                <form>
                    <h3>Register</h3>

                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                </form>
                <Router>
                    <div>
                        <button className="btn btn-dark btn-lg btn-block">
                            <Link to="/Survey"> Register </Link>
                        </button>
                    </div>
                    
                </Router>
            </Fragment>
            
        );
    }
}

export default withRouter(SignUp);