import React, { Component } from "react";

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
                    <input type="email" className="form-control" placeholder="Email *" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password *" />
                </div>

                <button className="btn btn-dark btn-lg btn-block">
                        <a id="reg_btn" href="/Survey"> Register </a>
                    </button>
            </form>
        );
    }
}