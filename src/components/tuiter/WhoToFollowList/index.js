import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";
import React from "react";
import todos from "../../labs/todo/todos.json";
import TodoItem from "../../labs/todo/todo-item";


const WhoToFollowList = () => {
    return (
        <>
            <ul className="list-group">

                <li className="list-group-item">
                    <span className="d-none d-xxl-inline d-xl-inline d-lg-inline"><b>Who to follow</b></span>
                </li>
                {
                    who.map(who => {
                        return (<WhoToFollowListItem key = {who.id} who={who}/>);
                    })
                }
            </ul>
        </>
);
}
export default WhoToFollowList;