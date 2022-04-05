import tuits from '../data/tuits.json'
import {UPDATE_TUIT, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS} from "../../actions/tuits-action";
//
// const tuitsReducer = (state = [], action) => {
//     switch (action.type) {
//         case FIND_ALL_TUITS:
//             return action.tuits;
//         case DELETE_TUIT:
//             return state.filter(
//                 tuit => tuit._id !== action.tuit._id
//             );
//         case CREATE_TUIT:
//             return [
//                 ...state,
//                 action.newTuit
//             ];
//         case UPDATE_TUIT:
//             return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
//         default:
//             return state;
//     }
// }
// export default tuitsReducer;


const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FIND_ALL_TUITS':
            return action.tuits;
        case 'DELETE_TUIT':
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case 'CREATE_TUIT':
            return [
                ...state,
                action.newTuit
            ];
        case 'UPDATE_TUIT':
            return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
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
            return state;
    }
}
export default tuitsReducer;