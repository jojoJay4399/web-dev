import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
            <ul className="list-group">
                <li className="list-group-item">
                   <span className="d-none d-xxl-inline d-xl-inline d-lg-inline"><b>Who to follow</b></span>
                </li>
                {
                    who.map && who.map(who => {
                        return (<WhoToFollowListItem key = {who.id} who={who}/>);
                    })
                }
            </ul>
            );
}
export default WhoToFollowList;