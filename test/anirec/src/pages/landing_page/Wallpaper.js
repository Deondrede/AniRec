import React, { Fragment, useEffect } from "react";
import {useQuery, gql} from '@apollo/client'
import "./Wallpaper.css"

export default function Wallpaper(){
    const WALLPAPER = gql`
    {
        Page(page: 1, perPage: 48) {
            media(sort: POPULARITY_DESC, isAdult: false, type: ANIME) {
                coverImage{
                    extraLarge
                }
                bannerImage
            }
        }
    }
    `;

    const {error, loading, data} = useQuery(WALLPAPER);

    useEffect(()=>{
       }, [data]
    );

    /*
    {data.Page.media.map((img) => (
            <img src={img.bannerImage}/>
        ))}
    */
    if (loading) return <p>Loading1...</p>
    else if (error) return <p>Error1 :(</p>
    else{
    return(
        <Fragment>
            <div className="img-wrapper">
                <div className="img-overlay"></div>
                <div className="img-box">
                    <img className="wallpaper-img" src={data.Page.media[13].bannerImage}/>
                </div>
            </div>
            
        </Fragment>

    );}
}