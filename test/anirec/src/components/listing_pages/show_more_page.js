import React, { Component, Fragment, useEffect } from "react";
import "./show_more_page.css";
import Header from "../global_elements/Header";
import TopSpace from "../global_elements/TopSpacer";
import {AIRING_NOW} from '../../GraphQL/Queries';
import ShowCard from '../home_page/ShowCard';
import { Container, Row, Col, Button } from "react-bootstrap";
import returnGrid from '../listing_pages/show_more_grid.component';

class ShowMorePage extends Component{


    render (){  
        return <returnGrid />
    }
}

export default ShowMorePage;