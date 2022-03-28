import profileData from '../data/profile'

const profileReducer = (state = profileData, action) =>{
    switch (action.type) {
        case 'save':
            const newProfile = {
                name: action.name.name,
                bio: action.bio.bio,
                website: action.web.web,
                location: action.local.local,
                dateOfBirth: action.birth.birth,

                handle: 'jose_joestar',
                profilePicture: '../../../images/1.jpg',
                bannerPicture: '../../../images/bookmarks2.jpg',
                dateJoined: '4/2009',
                followingCount: 312,
                followersCount: 180
            }
            return (newProfile);
        default:
            return profileData;
    }
    // return (state);
};
export default profileReducer;