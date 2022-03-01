import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
    <ul class = "rounded">
    ${posts.map((i) => PostSummaryItem(i)).join("")}
    </ul>
    `);
};
export default PostSummaryList;


