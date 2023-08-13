import css from './Contacts.module.css';

export const Contacts = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};
