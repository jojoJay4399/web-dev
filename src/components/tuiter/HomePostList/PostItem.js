import React from "react";
import './PostItem.css'

const PostItem = (
    {
        tweet = {
            "avatarIcon": "../../../images/1.jpg",
            "userName": "Giorno Giovanna",
            "handle": "giorno_giovanna",
            "time": "23h",
            "title": "The anime adaptation of Golden Wind was personally announced by series creator",
            "cardImage": "../../../images/bookmarks2.jpg",
            "cardContent": true,
            "cardTitle":"JoJo\"s Bizarre Adventure: Golden Wind...",
            "cardText": "The anime adaptation of Golden Wind was personally announced by series creator Hirohiko Araki at the \"Ripples of Adventure\" art exhibition on June 21, 2018.Golden Wind is chief directed by returning director Naokatsu Tsuda, who is accompanied by series directors Yasuhiro Kimura and Hideya Takahashi and the senior writer Yasuko Kobayashi.",
            "comment": 10,
            "retweet": 9,
            "heart": 10,
            "id": 1
        }
    }) => {
    return (
        <>
            <div className="row wd-bottom-line mt-2">
                <div className="col-1 me-1">
                    <img src={tweet.avatarIcon} className="wd-tweet-img"/>
                </div>

                <div className="col-10">
                    <div className="row">
                        <span className="wd-tweet-userName">
                            <b>{tweet.userName}</b>
                            <i className="fa fa-certificate position-absolute ms-1 mt-1"/>
                            <span className="position-absolute ms-4 wd-tweet-handle">
                                @{tweet.handle} &middot; {tweet.time}
                            </span>
                        </span>
                        <br/>
                        <span className="wd-tweet-title">
                            {tweet.title}
                        </span>
                    </div>

                    <div className = "card float-start ">
                            <img src={tweet.cardImage} className="card-img-top img-fluid" alt="..."/>
                            {tweet.cardContent ?
                                <div className = "card-body">
                                    <div className = "card-title" style={{"color": "white"}}>
                                        {tweet.cardTitle}
                                    </div>
                                    <p className="card-text"> {tweet.cardText} </p>
                                </div> : ''}
                    </div>

                    <div className="row position-relative mt-3">
                        <div className="col">
                            <a href="#" className="far fa-comment wd-tweet-icon">
                                {tweet.comment}
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="fas fa-retweet wd-tweet-icon">
                                {tweet.retweet}
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="fas fa-heart wd-tweet-icon" style={{"color": "red"}}>
                                {tweet.heart}
                            </a>
                        </div>

                        <div className="col">
                            <a href="#" className="fas fa-upload wd-tweet-icon"/>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}
export default PostItem;