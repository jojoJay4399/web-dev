import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center justify-content-center me-1">
                    <i className="fas fa-arrow-left"/>
                </div>
                <div className="col-10">
                    <div style={{ fontSize: '20px', color: 'white'}}>
                        <b>{profile.name}</b>
                    </div>

                    <div style={{color: 'gray'}}>
                        5,169 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img src={profile.bannerPicture} height="219px" width="100%" style={{ objectFit: 'cover'}} alt="..."/>

            </div>
            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>
                    <img src={profile.profilePicture}
                        className="rounded-circle"
                        height="150px"
                        style={{ position: 'relative',  border: '#060606 solid 5px', marginTop: "-75px"}}
                        alt="..."
                    />

                    <div>
                        <div style={{ fontSize: '20px', fontWeight: "bold", color: "white"}}>
                            {profile.name}
                        </div>
                        <div style={{color: 'gray'}}>
                            @{profile.handle}
                        </div>
                    </div>
                </div>

                <div className="col">
                    <Link to="/tuiter/editProfile">
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white">
                            <b>Edit Profile</b>
                        </button>
                    </Link>

                </div>
            </div>
            <div className="ms-2">
                <div style={{color: 'white'}}>
                    {profile.bio}
                </div>
                <div className="row d-flex justify-content-start" style={{color: 'gray'}}>
                    <div className="col-3">
                        <i className="fas fa-map-marker-alt"/>
                        <span className="p-2">{profile.location}</span>
                    </div>
                    <div className="col-4">
                        <i className="fa fa-birthday-cake"/>
                        <span className="p-2">Born {profile.dateOfBirth}</span>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-calendar-alt"/>
                        <span className="p-2">Joined {profile.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <span className="fw-bold text-white">{profile.followingCount}</span>
                        <span style={{color: 'gray'}} className="p-2">Following</span>
                        <span className="fw-bold text-white">{profile.followersCount}</span>
                        <span style={{color: 'gray'}} className="p-2">Followers</span>
                    </div>
                    {/*<div className="col-3">*/}
                    {/*    <span className="fw-bold text-white">{profile.followersCount}</span>*/}
                    {/*    <span style={{color: 'gray'}} className="p-2">Followers</span>*/}
                    {/*</div>*/}
                </div>
            </div>

        </>
    )
}
export default ProfileComponent;