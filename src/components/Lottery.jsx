import { useState } from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import './Lottery.css';

const Lottery = ({ characters }) => {
  const [names, setNames] = useState({});
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [winner, setWinner] = useState(null);

  const handleNameChange = (id, name) => {
    setNames((prevNames) => ({ ...prevNames, [id]: name }));
  };

  const handleClick = (id) => {
    setSelectedCharacter(id);
  };

  const handleDraw = () => {
    const validEntries = characters.filter((character) => names[character.id]);
    if (validEntries.length > 0) {
      const randomIndex = Math.floor(Math.random() * validEntries.length);
      setWinner(validEntries[randomIndex]);
    } else {
      alert('Por favor ingrese nombres para todos los personajes.');
    }
  };

  return (
    <div className="lottery">
      {!winner && (
        <div>
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              name={names[character.id]}
              onClick={handleClick}
            />
          ))}
          {selectedCharacter !== null && (
            <input
              type="text"
              placeholder="Ingrese nombre"
              value={names[selectedCharacter] || ''}
              onChange={(e) => handleNameChange(selectedCharacter, e.target.value)}
              className="character-input"
            />
          )}
          <button onClick={handleDraw} className="draw-button">Realizar Sorteo</button>
        </div>
      )}
      {winner && (
        <div className="winner">
          <h2>Ganador: {names[winner.id]}</h2>
          <img src={winner.image} alt={winner.name} className="winner-image" />
        </div>
      )}
    </div>
  );
};

Lottery.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Lottery;