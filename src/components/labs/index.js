import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";
const Index = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to = "/">
                Hello
            </Link>|
            <Link to = "/tuiter/home">
                Tuiter
            </Link>

            <ReduxExamples/>

        </>

    )
};
export default Index;

