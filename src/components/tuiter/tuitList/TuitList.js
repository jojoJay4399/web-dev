import {useSelector, useDispatch} from "react-redux";
import TuitListItem from "./TuitListItem.js";
import React, {useEffect} from "react";
import {deleteTuit, findAllTuits, createTuit} from "../../actions/tuits-action";
import {useState} from "react";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);
    return (
            <ul className="list-group mt-2">
            {
                tuits.map && tuits.map(tuit => {
                    return (
                        <TuitListItem key = {tuit._id} tuit={tuit}/>
                    )
                        // <div>
                        // <span key = {tuit._id}>
                        //     {tuit.tuit}
                        // </span>;
                    //     <TuitListItem key = {tuit.id} tuit={tuit}/>
                    //     {/*<i className="fas fa-trash float-end"*/}
                    //     {/*   onClick={() => deleteTuit(dispatch, tuit)}/>*/}
                    //     {/*</div>*/}
                    // );
                })
            }
        </ul>
    );
};
export default TuitList;