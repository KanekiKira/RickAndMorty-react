import React from 'react'
import {useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CharactersPage = () => {
    const [characters,setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?page=2')
    .then(res => res.json())
    .then(data => setCharacters(data.results))
  })
    
  return (
    <>
    <h1 className='characters' >Characters</h1>
    <div className='charactersList d-flex flex-wrap w-100'>
      {characters.map(character => (
         <Card className='d-flex m-5' >
         <Card.Img variant="top" src={character.image} />
         <Card.Body className=''>
           <Card.Title>{character.name}</Card.Title>
           <Card.Title>Gender:{character.gender}</Card.Title>
           <Card.Title>Species:{character.species}</Card.Title>
         </Card.Body>
       </Card>
      ))}
    </div>
    </>
  )
}

export default CharactersPage
