import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import "./Players.css";

const apiURL = 'https://api.cartola.globo.com/atletas/mercado';

function Players() {
  const { clubId } = useParams();
  const [playerData, setPlayerData] = useState([]);
  const [clubName, setClubName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPlayerData() {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        const filteredPlayers = data.atletas.filter(player => player.clube_id === parseInt(clubId));
        setPlayerData(filteredPlayers);
        setClubName(filteredPlayers.length ? filteredPlayers[0].clube.nome : ''); // Define o nome do clube com base no primeiro jogador encontrado
      } catch (error) {
        setError('Erro ao buscar os dados dos jogadores.');
        console.error('Erro:', error);
      }
    }

    fetchPlayerData();
  }, [clubId]);

  return (
    <div className='players'>
      <Header />
      <div className="main">
        <div className="space-between">
          <h1>Jogadores do Clube {clubName}</h1>
          <Link to="/">X</Link>
        </div>
        {error && <p className="error">{error}</p>}
        <div className="justify-start">
          <ul>
            {playerData &&
              playerData.map((player) => {
                if (player.foto) {
                  const photoUrl = player.foto.replace('FORMATO', '220x220');
                  
                  return (
                    <li key={player.atleta_id}> 
                      <div className="justify-start">
                        <img
                          className="itemImg"
                          src={photoUrl}
                          alt="Foto do Jogador"
                        />
                        <div className="column-start">
                          <h2>{player.nome}</h2>
                        </div>
                      </div>
                    </li>
                  );
                }
                return null; 
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Players;
