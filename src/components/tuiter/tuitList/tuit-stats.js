import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
    dispatch({
        type: 'like-tuit',
        tuit});
    };
    //console.log(tuit.liked);
    return (
            <div className="d-flex justify-content-between">
                <div>
                    <i className="far fa-comment me-1">
                        {tuit.stats.comments}
                    </i>
                </div>
                <div>
                    <i className="fas fa-retweet me-1">
                        {tuit.stats.retuits}
                    </i>
                </div>
                <div onClick={likeTuit}>
                    {
                        tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}/>
                    }
                    {
                        !tuit.liked && <i className="far fa-heart me-1"/>
                    }
                    {tuit.stats && tuit.stats.likes}
                </div>
                <div>
                    <i className="fas fa-upload me-1"/>
                </div>
            </div>
    );

}
export default TuitStats;