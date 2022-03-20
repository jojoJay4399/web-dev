import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar"
import WhoToFollowList from "./WhoToFollowList"
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import PostSummaryList from "./PostSummaryList";
import HomeScreen from "./HomeScreen/HomeScreen";
const Index = () => {
    return(
        <>
            {/*<h1>Tuiter</h1>*/}
            <Link to = "/hello">
                Hello
            </Link>|
            <Link to = "/">
                Labs
            </Link>
            {/*/!*<h1>hello</h1>*!/*/}
            <HomeScreen/>
            {/*/!*<NavigationSidebar active="home"/>*!/*/}
            {/*/!*<br/>*!/*/}
            {/*/!*<WhoToFollowList/>*!/*/}
            {/*<ExploreScreen/>*/}
        </>
    )
};

export default Index;

