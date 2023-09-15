// const axios = require("axios");

// function getCharById(res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         console.log(response.data);
//         debugger
//         const { name, image, species, gender, status,  id, origin } = response.data; // data : { id: 2, image:... }
//         res.writeHead(200, {'Content-Type' : 'application/json'});
//         res.end(JSON.stringify({ id, name, gender, species, status, origin, image }))
//     })
//     .catch((error) => {
//         res.writeHead(500, {'Content-Type' : 'text/plain'})
//         res.end(error.message)
//     } )
// }

// module.exports = {
//     getCharById
// };


// CON EXPRESS

const express = require ('express')
const server = express();
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require ("axios");

function getCharById(req, res) {
    const { id } = req.params;
    axios.get(URL+id)
        .then((response) =>{
            if(response.status === 200){
                const character = response.data;
                const characterInfo = {
                    id: character.id,
                    status: character.status,
                    name: character.name,
                    species: character.species,
                    origin: character.origin,
                    image: character.image,
                    gender: character.gender,
                  };
                  res.json(characterInfo);
            }else{
                res.status(404).send('Not found');
            }
        })
        .catch((error)=>{
            res.status(500).json({message: error.message});
        });
}

server.get('/character/:id', getCharById);


module.exports = getCharById;