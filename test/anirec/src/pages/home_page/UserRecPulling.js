import React from "react";
import {useQuery, gql} from '@apollo/client';

function GetUserRecs(){
    const promise = axios.get('http://localhost:5000');
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

GetUserRecs().then(data => {
    for (var user in data){
        if (data[user]["fields"]["username"] == "doggo"){
            var recArray = data[user]["fields"]["recommendations"].match(/\d+/g);
            for (var i = 0; i < recArray.length; i++){
                recArray[i] = parseInt(recArray[i], 10);
            } 
            console.log(recArray);
        }
    }
})

const RecQueryComponent = ({username, index}) =>{
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
        }        UserArray.push(data);

    }`;

    const RecArray = GetUserRecs(username);
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

const ReturnRecArray = ({num, userId}) => {
    const UserArray = [];
    for (let i = 0; i < num; i++) {
        UserArray.push(<RecQueryComponent username={userId} index={i}/>);
    }
    return UserArray;
}

export default ReturnRecArray;