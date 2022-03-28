import tuits from '../data/tuits.json'

const tuitsReducer = (state = tuits, action) => { 
    switch (action.type) {
        case 'like-tuit':
            return state.map(tuit =>{
                if (tuit.id === action.tuit.id) {
                    if (tuit.liked === true) {
                        tuit.liked = false;
                        tuit.stats.likes--;
                    } else {
                        tuit.liked = true;
                        tuit.stats.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });
        case 'delete-tuit':
            return state.filter(tuit => tuit.id !== action.tuit.id);
        case 'create-tuit':
            const newTuit = {
                title: action.tuit,
                id: (new Date()).getTime() + '',
                postedBy: {
                    "username": "Bruno Bucciarati"
                },
                handle: "bruno_bucciarati",
                avatar: "../../../images/3.jpg",
                time: "1 second ago",
                withTuit: false,
                attachments: {
                    "image": "../../../images/bookmarks1.jpg"
                },
                stats: {
                    comments: 233,
                    retuits: 233,
                    likes: 233
                }
            }
            return [
                newTuit,
                ...state,
            ];
        default:
            return tuits;
    }
}
export default tuitsReducer;