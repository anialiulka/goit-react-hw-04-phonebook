import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { handleChange, filter } = this.props;
    return (
      <label htmlFor="filter" className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          required
          onChange={handleChange}
          value={filter}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
