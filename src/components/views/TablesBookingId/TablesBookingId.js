import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBookingId.module.scss';

const TablesBookingId = ({id='abc123'}) => (
  <div className={styles.component}>
    <h2>TablesBookingId view.</h2>
    <h2>Id: {id}</h2>
  </div>
);

TablesBookingId.propTypes = {
  id: PropTypes.string,
};

export default TablesBookingId;
