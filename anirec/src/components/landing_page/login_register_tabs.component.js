import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";

import { BrowserRouter as Link } from "react-router-dom";

import "./login_register_tabs.component.css"

export default class LR_Tabs extends Component {
    render(){
        return(
            <Fragment>
                <Button id="sign_in" variant="flat">
                    <Link id="tab_name" to={"/log-in"}>Log in</Link>
                </Button>
                <Button  id="register" variant="flat">
                    <Link id="tab_name" to={"/register"}>Register</Link>
                </Button> 
            </Fragment> 
        );
    }
}