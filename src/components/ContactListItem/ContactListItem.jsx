import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, handleDelete }) => {
  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.btn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
