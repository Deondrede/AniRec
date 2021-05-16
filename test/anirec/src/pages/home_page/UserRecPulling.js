import React, {useEffect, setState} from "react";
import {useQuery, gql} from '@apollo/client';

export default function GetUserRecs(props){
    const [recArr, setRecArr] = setState([]);
    const axios = require('axios').default;
    const promise = axios.get('http://localhost:5000');

    useEffect(() => {
        GetUserRecs().then((data) => {
            for (var user in data){
                if (data[user]["fields"]["username"] == props.username){
                    var recArray = data[user]["fields"]["recommendations"].match(/\d+/g);
                    for (var i = 0; i < recArray.length; i++){
                        recArray[i] = parseInt(recArray[i], 10);
                    } 
                    setRecArr(recArray);
                }
            }
        })
        
    }, []);
    const returnRecArr = []

    for (let i = 0; i < props.num; i++) {
        returnRecArr.push(<RecQueryComponent arrayOfIDs={recArr} index={i}/>);
    }
    return returnRecArr;
}


const RecQueryComponent = ({arrayOfIDs, index}) =>{

    const REC_QUERY = gql`
    query RecQuery($id: id) {
        Media(type: ANIME, id: $id){
            id
            title{
                english
                romaji
            }
            genres
            description
            coverImage{
                medium
                large
                extraLarge
            }
            studios{
                nodes{
                    name
                }
            }
        }

    }`;
    const RecArray = arrayOfIDs;
    const {error, loading, data} = useQuery(REC_QUERY,
        {
            variables:{
                id: RecArray[index]
            }
        });

    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>
    return data
}