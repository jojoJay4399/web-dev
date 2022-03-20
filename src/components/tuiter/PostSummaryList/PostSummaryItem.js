import React from "react";
import "./PostSummaryItem.css"

const PostSummaryItem = (
    {
        post = {
            "topic" : "Web Development",
            "userName" : "ReactJs",
            "time" : "2h",
            "title" : "React.js is a component based front end library that makes it very easy to build Single Page " +
                "Applications or SPAs",
            "image" : "../../../images/react-blue.png",
            "id" : 1
        }
    }) => {
    return (
        <>
            <div className = "list-group-item" key = {post.id}>
                <div className = "row">
                    <div className = "col-8 col-md-9 mt-2 float-start">
                        <div className="wd-post-topic">{post.topic}</div>
                        <span className="wd-post-username">
                            <b>{post.userName}</b>
                            <i className="fa fa-circle position-absolute ms-1 mt-1"/>
                            <span className = "position-relative ms-4 wd-post-time">-{post.time}</span>
                        </span><br/>
                        <span className="wd-post-title">
                            <b>{post.title}</b>
                        </span>
                    </div>
                    <div className = "col-4 col-md-3 mt-2 float-end">
                        <img src={post.image} className = "rounded mb-4 wd-post-img"/>
                    </div>
                    <div className="float-done"/></div>
                </div>
        </>
    );
}
export default PostSummaryItem;
