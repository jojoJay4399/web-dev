import React from "react";
import NavigationSidebar from "../NavigationSidebar";

const MoreScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="more"/>
                </div>
            </div>
        </>
    );
};
export default MoreScreen;