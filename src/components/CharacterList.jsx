import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import './CharacterList.css';

const CharacterList = ({ characters, onNameChange }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} onNameChange={onNameChange} />
      ))}
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default CharacterList;