import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.json"


const PostSummaryList = () => {
    return (
        <>
            <ul className = "list-group rounded">
                {
                    posts.map(post => {
                        return (<PostSummaryItem key = {post.id} post={post}/>);
                    })
                }
            </ul>
        </>
    );
};
export default PostSummaryList;


