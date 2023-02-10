import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ handleFilter }) => {
  return (
    <div className={css.wrap}>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilter} />
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
