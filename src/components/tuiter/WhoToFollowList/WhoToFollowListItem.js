import React from "react";
import './WhoToFollowListItem.css'

const WhoToFollowListItem = (
    {
        who = {
            "avatarIcon" : './1.jpg',
            "userName": 'jojo',
            "handle": 'JOJO',
        }
    }) => {
    return (
        <>
        <div className="list-group-item" key = {who.userName + who.handle}>
            <div className = "row">
                <div className = "col-8">
                    <div className = "float-start">
                        <img src={who.avatarIcon}  className="rounded-circle wg-image"/>
                    </div>
                    <div className = "float-start ms-5 position-absolute">
                        <span className="wg-userName">
                            <b>{who.userName}</b>
                        </span><br/>
                        <span className="wg-handle">@{who.handle}</span>
                    </div>
                    <div className = "float-done"/>
                </div>
                <div className = "col-4">
                    <button className = "btn btn-primary mt-1 wg-button float-end"><b>Follow</b></button>
                </div>
            </div>
        </div>
        </>
    );
}
export default WhoToFollowListItem;