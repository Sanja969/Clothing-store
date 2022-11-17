/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './directory-item.styles.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  return (
    <div className="directory-item-container" onClick={() => navigate(route)}>
      <div
        className="background-image"
        style={
        {
          backgroundImage: `url(${imageUrl})`,
        }
      }
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

DirectoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default DirectoryItem;
