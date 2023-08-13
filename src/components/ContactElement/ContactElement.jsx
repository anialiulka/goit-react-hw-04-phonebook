import css from './ContactElement.module.css';
import PropTypes from 'prop-types';

export const ContactElement = ({ contacts, deleteContact }) => {
  return contacts.map(contact => {
    return (
      <li className={css.listItem} key={contact.id}>
        {contact.name} : {contact.number}
        <button
          className={css.button}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactElement.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
