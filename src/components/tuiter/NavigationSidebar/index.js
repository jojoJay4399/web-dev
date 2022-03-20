import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    return (
        <>
            <div className="list-group">
                <Link to = "/"
                      className= {`list-group-item ${active === 'twitter' ? 'active' : ''}`} href="/">
                    <i className="fab fa-twitter"/>
                </Link>

                <Link to="/tuiter/home"
                      className= {`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"/>
                    <div className="d-none d-xxl-inline d-xl-inline"> Home</div>
                </Link>

                <Link to="/tuiter/explore" className= {`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"/>
                    <div className="d-none d-xxl-inline d-xl-inline"> Explore</div>
                </Link>

                <Link to="/tuiter/notification" className= {`list-group-item ${active === 'notification' ? 'active' : ''}`}>
                    <i className="fa fa-bell"/>
                    <div className="d-none d-xxl-inline d-xl-inline"> Notification</div>
                </Link>

                <Link to="/tuiter/message" className= {`list-group-item ${active === 'message' ? 'active' : ''}`} >
                    <i className="fa fa-envelope"/>
                    <div className="d-none d-xxl-inline d-xl-inline"> Message</div>
                </Link>

                <Link to="/tuiter/bookmarks" className= {`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className ="fa fa-bookmark"/>
                    <span className="d-none d-xxl-inline d-xl-inline"> Bookmarks</span>
                </Link>

                <Link to="/tuiter/lists" className= {`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa fa-list"/>
                    <span className="d-none d-xxl-inline d-xl-inline"> Lists</span>
                </Link>

                <Link to="/tuiter/more" className= {`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa fa-ellipsis-h"/>
                    <span className="d-none d-xxl-inline d-xl-inline"> More</span>
                </Link>

            </div>

            <div className="d-grid mt-2">
                <Link to="/tuiter/create" className="btn btn-primary btn-block rounded-pill">Tweet</Link>
            </div>

</>
    );
}
export default NavigationSidebar;






