import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const api = 'https://api.cartola.globo.com/clubes';

function Clubs() {
  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    async function fetchClubData() {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setClubData(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    }

    fetchClubData();
  }, []);

  return (
    <div className="justify-start">
      <ul>
        {clubData &&
          Object.keys(clubData).map((key) => {
            const club = clubData[key];
            return (
              <li key={club.id}>
                <img
                  className="itemImg"
                  src={club.escudos['60x60']}
                  alt="Logo"
                />
                <div className="vertical">
                  <h2>{club.nome}</h2>
                  <p>{club.apelido}</p>
                  <Link to={`/players/${club.id}`}>Ver Jogadores</Link>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Clubs;
