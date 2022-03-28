import React from "react";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList";

import whoReducer from "./reducers/who-reducers";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import { useLocation } from 'react-router-dom'

const reducer = combineReducers({tuits : tuitsReducer, who : whoReducer, profile : profileReducer});
const store = createStore(reducer);

const Tuiter = () => {
    const location = useLocation();
    const str = location.pathname.toString();
    const words = str.split('/');
    let active = words[2].toString();
    if (words[2].toString() === 'editProfile') {
        active = 'profile';
    }
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={active}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Outlet/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
};

export default Tuiter;

