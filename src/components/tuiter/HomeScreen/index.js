import React from "react";
import TuitList from "../tuitList/TuitList";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => { 
    return(
    <div>
        {/* <h2>Home</h2> */}
        <WhatsHappening/>
        <TuitList/>
    </div> 
    )
}
export default HomeScreen;