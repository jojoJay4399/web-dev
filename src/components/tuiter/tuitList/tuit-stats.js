import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-action";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    // const likeTuit = () => {
    //     dispatch({
    //         type: 'like-tuit',
    //         tuit});
    // };
    return (
        <div className="d-flex justify-content-between">
            <div>
                <i className="far fa-comment me-1">
                    {tuit.comments}
                </i>
            </div>
            <div>
                <i className="fas fa-retweet me-1">
                    {tuit.retuits}
                </i>
            </div>
            <div onClick={() => updateTuit(dispatch, {...tuit, likes: tuit.likes + 1})}>
                {
                    tuit.liked && <i className="fas fa-heart me-1" style={{color: 'red'}}/>
                }
                {
                    !tuit.liked && <i className="far fa-heart me-1"/>
                }
                {tuit.likes}
            </div>
            <div onClick={() => updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1})}>
                {
                    tuit.disliked && <i className="fas fa-thumbs-down me-1" style={{color: 'green'}}/>
                }
                {
                    !tuit.disliked && <i className="far fa-thumbs-down me-1"/>
                }
                {tuit.dislikes}
            </div>
            <div>
                <i className="fas fa-upload me-1"/>
            </div>
        </div>
    );

}
export default TuitStats;