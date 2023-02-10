import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
