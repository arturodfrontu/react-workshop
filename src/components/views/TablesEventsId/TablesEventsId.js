import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEventsId.module.scss';

const TablesEventsId = ({id='ABC123'}) => (
  <div className={styles.component}>
    <h2>TablesEventsId view.</h2>
    <h2>Id: {id}</h2>
  </div>
);

TablesEventsId.propTypes = {
  id: PropTypes.string,
};

export default TablesEventsId;
