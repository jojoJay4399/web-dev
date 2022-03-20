import React from "react";
import NavigationSidebar from "../NavigationSidebar";

const ListScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="lists"/>
                </div>
            </div>
        </>
    );
};
export default ListScreen;