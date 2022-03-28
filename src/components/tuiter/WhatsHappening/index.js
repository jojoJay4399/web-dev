import React from "react";
import {useState} from "react";
import { useDispatch } from "react-redux";
import pic from "./3.jpg"
import "./index.css"

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    
    return ( 
    <div className="row">
        <div className="col-1 me-1">
            <img src ={pic} className="wd-tweet-img" alt="..."/>
        </div>
        <div className="col-10">
        <textarea value={whatsHappening} 
                onChange={(event) =>
                setWhatsHappening(event.target.value)} className="form-control wd-textarea"
                  placeholder="What's happening?">
        </textarea>
            <div style={{height: "5px"}}/>
            <i className="far fa-image text-primary me-3"/>
            <i className="fa fa-chart-line text-primary me-3"/>
            <i className="far fa-smile text-primary me-3"/>
            <i className="far fa-calendar text-primary"/>
            <button onClick={tuitClickHandler} className="btn btn-primary btn-block rounded-pill float-end">
                Tweet
            </button>
        </div>

    </div>
    );
}
export default WhatsHappening;