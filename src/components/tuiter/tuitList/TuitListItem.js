import React from "react";
import './TuitListItem.css'
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuit} from "../../actions/tuits-action";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <li className="list-group-item">
            <div className="row wd-bottom-line mt-2">
                <div className="col-1 me-1">
                    <img src={tuit.avatar} className="wd-tweet-img" alt="..."/>
                </div>

                <div className="col-10">
                    <div className="row">
                        <span className="wd-tweet-userName float-start">
                            <b>{tuit.username}</b>
                            <i className="fa fa-certificate position-absolute ms-1 mt-1"/>
                            <span className="position-absolute ms-4 wd-tweet-handle">
                                @{tuit.handle} &middot; {tuit.time}
                            </span>
                        </span>
                        <span className="wd-tweet-title">
                            {tuit.title}
                        </span>
                    </div>
                    <div className = "card float-start ">
                        <img src={tuit.image} className="card-img-top img-fluid" alt="..."/>
                        {tuit.withTuit ?
                            <div className = "card-body">
                                {/*<div className = "card-title" style={{"color": "white"}}>*/}
                                {/*    {tuit.cardTitle}*/}
                                {/*</div>*/}
                                <p className="card-text"> {tuit.tuit} </p>
                            </div> : ''}
                    </div>
                    <div className="row mt-2">
                        <TuitStats tuit={tuit}/>
                    </div>
                </div>

                <div className="col-auto">
                    {/*<i onClick={() => deleteTuit(tuit)} className="fas fa-trash fa-pull-right"/>*/}
                    <i className="fas fa-trash float-end" onClick={() => deleteTuit(dispatch, tuit)}/>
                </div>
            </div>
        </li>

    );
}
export default TuitListItem;