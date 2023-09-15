import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { orderCards,filterCards } from "../../redux/actions";


const Favorites = ({ onClose }) => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value)); // Despachamos la acción de ordenar
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value)); // Despachamos la acción de filtrar
  };

  return (
    <>
      <div>
        {/* Selector para ordenar */}
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        {/* Selector para filtrar */}
        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};


export default Favorites;



