import {ADD_FAV, FILTER, REMOVE_FAV, ORDER} from './action-types'
import axios from "axios";

const initialState = {
    myFavorites: [], // [char1, char2, char3]
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
       // REDUCER | ADD_FAV
case ADD_FAV:
    return { ...state, myFavorites: action.payload, allCharacters: action.payload };
    case REMOVE_FAV:
        return { ...state, myFavorites: action.payload };
        case FILTER:
            const filteredCharacters = state.allCharacters.filter(char => char.gender === action.payload);
            return {
                    ...state,
                    myFavorites: filteredCharacters,
                };
                case ORDER:
            const orderedCharacters = [...state.allCharacters];
            orderedCharacters.sort((charA, charB) => {
                if (action.payload === "A") {
                    return charA.id - charB.id;
                } else if (action.payload === "D") {
                    return charB.id - charA.id;
                }
                return 0;
            });
              return {
                ...state,
                myFavorites: orderedCharacters,
            };
        default:
            return state
    }
}

export default rootReducer;


