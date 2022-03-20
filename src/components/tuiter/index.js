import React from "react";
import {Link} from "react-router-dom";
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
            <HomeScreen/>
        </>
    )
};

export default Index;

