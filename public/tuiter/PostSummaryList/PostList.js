import tweets from "./tweet.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
    ${tweets.map((i) => PostItem(i)).join("")}
    `);
};
export default PostList;