import tweets from "./tweet.json";
import PostItem from "./PostItem.js";
import React from "react";

const PostList = () => {
    return (
        <>

            {
                tweets.map(tweet => {
                    return (<PostItem key = {tweet.id} tweet={tweet}/>);
                })
            }

        </>
    );
};
export default PostList;