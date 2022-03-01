import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"


const WhoToFollowList = () => {
    return (`
    <ul class="list-group"> 
    <!-- continue here --> 
    <li class="list-group-item">
    <span class="d-none d-xxl-inline d-xl-inline d-lg-inline"><b>Who to follow</b></span>
    </li>
     ${who.map((i) => WhoToFollowListItem(i)).join("")}
    </ul>
`);
}
export default WhoToFollowList;