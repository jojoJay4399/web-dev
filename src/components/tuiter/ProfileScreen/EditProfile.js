import React from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const EditProfile = () => {
    const profile = useSelector(state => state.profile);

    let [name, setName] = useState({name: profile.name})
    let [bio, setBio] = useState({bio: profile.bio})
    let [local, setLocal] = useState({local: profile.location})
    let [web, setWeb] = useState({web : profile.website})
    let [birth, setBirth] = useState({birth: profile.dateOfBirth});

    const dispatch = useDispatch();

    const nameChangeHandler = (event) => {
        const name = event.target.value;
        const newName = {name : name};
        setName(newName);
    }

    const bioChangeHandler = (event) => {
        const bio = event.target.value;
        const newBio = { bio : bio};
        setBio(newBio);
    }

    const locationChangeHandler = (event) => {
        const location = event.target.value;
        const newLocation = {local : location}
        setLocal(newLocation);
    }

    const websiteChangeHandler = (event) => {
        const web = event.target.value;
        const newWeb = {web : web}
        setWeb(newWeb);
    }

    const birthChangeHandler = (event) => {
        const birthday = event.target.value;
        const newBirth = {birth : birthday}
        setBirth(newBirth);
    }

    const saveClickHandler = () => {
        dispatch({type: 'save', bio, local, web, name, birth})
    }
    return (
        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center justify-content-center">
                    <Link to="/tuiter/profile">
                        <i className="fas fa-times"/>
                    </Link>
                </div>

                <div className="col-10">
                    <div style={{ fontSize: '20px', color: 'white'}}>
                        Edit Profile
                    </div>
                </div>

                <div className="col-1">
                    <button className="btn btn-light rounded-pill bg-white me-2 float-end"
                            onClick={saveClickHandler}>
                        <span className="fw-bold text-black">Save</span>
                    </button>
                </div>
            </div>

            <div className="mt-1">
                <img src={profile.bannerPicture}
                     height="219px" width="100%" style={{ objectFit: 'cover' }} alt = "..."/>
            </div>
            <div className="ms-2">
                <div>
                    <img src={profile.profilePicture}
                     className="rounded-circle"
                     height="150px"
                     style={{ position: 'relative', border: '#060606 solid 5px', marginTop: '-75px' }}
                                alt="..."/>
                </div>

                <div className="mt-2">
                    <label>Name</label>
                    <textarea className="bg-black text-white " id="name" style={{width:"100%"}}
                                      value = {name.name} onChange={nameChangeHandler}>
                                {profile.name}
                    </textarea>
                </div>

                <div className="mt-2 ">
                    <label>Bio</label>
                    <textarea className="bg-black text-white" name='bio' style={{width:"100%"}}
                          value={bio.bio} onChange={bioChangeHandler}>
                                {profile.bio}
                    </textarea>
                </div>


                <div className="mt-2">
                    <label>Location</label>

                    <textarea className="bg-black text-white"  name="location" style={{width:"100%"}}
                                      value={local.local} onChange={locationChangeHandler}>
                                {profile.location}
                    </textarea>
                </div>

                <div className="mt-2">
                    <label>Website</label>
                    <textarea className="bg-black text-white" name="website" style={{width:"100%"}}
                                      value={web.web} onChange={websiteChangeHandler}>
                                {profile.website}
                    </textarea>
                </div>

                <div>
                    <div>
                        <span>Birth date - </span>
                        <label className="text-primary">Edit</label>
                    </div>

                    <div>
                        <input id="birthday" type="date" className="bg-light text-white"
                                       value={birth.birth}  onChange = {birthChangeHandler}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile
