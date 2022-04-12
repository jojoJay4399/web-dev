import React from "react";
import PostSummaryList from "../PostSummaryList"
// import PIC from "../../../../public/images/JOO.png"
import "./ExploreComponent.css"

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11">
                    <i className = "fa fa-search fa-lg mt-2 pt-1 ms-2 ps-1" style={{"position": "absolute"}}/>
                    <div className="search">
                        <input className="form-control wd-input input-field" placeholder="Search Twitter"/>
                    </div>
                </div>
                <div className="col-1 p-0">
                    <i className="fas fa-cog fa-2x"/>
                </div>
            </div>

            <ul className="nav mb-2 nav-tabs mt-1">
                <li className="nav-item">
                    <a className="nav-link active" href="/">
                        <b>For your</b>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Trending
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        News
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        Sports
                    </a>
                </li>
                <li className="nav-item d-none .d-sm-block d-sm-none d-md-block">
                    <a className="nav-link" href="/">
                        Entertainment
                    </a>
                </li>
            </ul>

            <div className = "card text-white">
                <img src ={"../../../images/JOO.png"} className="img-responsive p-0" alt="..."/>
                <div className="card-img-overlay p-2">
                    <div className="wd-img-text">
                        <b style = {{color: "hotpink"}}>JoJo : Stone Ocean</b>
                    </div>
                </div>
            </div>

            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
