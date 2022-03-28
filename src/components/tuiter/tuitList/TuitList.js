// import tweets from "./tuits.json";
import {useSelector} from "react-redux";
import TuitListItem from "./TuitListItem.js";
import React from "react";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <ul className="list-group mt-2">
            {
                tuits.map && tuits.map(tuit => {
                    return (<TuitListItem key = {tuit.id} tuit={tuit}/>);
                })
            }
        </ul>
    );
};
export default TuitList;