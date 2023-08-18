import {ADD_FAV, FILTER, REMOVE_FAV, ORDER} from './action-types'

const initialState = {
    myFavorites: [], // [char1, char2, char3]
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
               allCharacters: [...state.allCharacters, action.payload],
            }
        case REMOVE_FAV:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload),
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload ) // [char1, cha2] eliminamos char3 
            }
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


