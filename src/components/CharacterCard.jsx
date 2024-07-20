import PropTypes from 'prop-types';
import './CharacterCard.css';

const CharacterCard = ({ character, name, onClick }) => {
  return (
    <div className="character-card" onClick={() => onClick(character.id)}>
      <img src={character.image} alt={character.name} className="character-image" />
      {name && <input
        type="text"
        value={name}
        className="character-input"
        readOnly
      />}
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CharacterCard;