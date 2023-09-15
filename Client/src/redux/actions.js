import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
}
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden,
}
}

// orderCards: esta función recibe por parámetro un orden (será: A: ascendente o D: descendente). Debe retornar una action con el type igual a "ORDER" y el payload será igual al parámetro recibido.
