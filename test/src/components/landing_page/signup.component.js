import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            </form>
        );
    }
}