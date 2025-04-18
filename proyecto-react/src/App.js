import logo from './logo.svg';
import './App.css';
import Header from './page/base/header';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
      const loadStorage = async () => {
        const data = await getCapitulos();
        
        if(!localStorage.getItem('likes&dislikes')) {
          loadVotesData(data.results)
        }
  
        if(!localStorage.getItem('Personajesfav')){
          loadFavPersonajes(data.results)
        }

        if(!localStorage.getItem('CharactersVotes')){
          loadCharacterVotes(data.results)
        }
      }
      
      loadStorage();
  
    }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

async function getCapitulos() {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data;
}

function loadVotesData(capitulos) {
  const votes = []
  capitulos.forEach(element => {
    votes.push({
      id: element.id,
      like: 0,
      dislike: 0
    })
  });
  localStorage.setItem('likes&dislikes', JSON.stringify(votes))
}

function loadFavPersonajes(capitulos) {
  const favs = []
  capitulos.forEach(element => {
    favs.push({
      id: element.id,
      personajes: []
    })
  });
  localStorage.setItem('Personajesfav', JSON.stringify(favs))
}

function loadCharacterVotes(capitulos){
  const voteChracters = []
  capitulos.forEach(element => {
    voteChracters.push({
      id: element.id,
      personajes: []
    })
  });
  localStorage.setItem('CharactersVotes', JSON.stringify(voteChracters))
}

export default App;
