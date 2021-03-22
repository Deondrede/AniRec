import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <input type="username" className="form-control" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
        );
    }
}