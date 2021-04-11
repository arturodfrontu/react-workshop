import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.module.scss';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view.</h2>
    <ul>
      <li><Link to="tables/booking/:id">Booking Id</Link></li>
      <li><Link to="tables/booking/new">New Booking</Link></li>
      <li><Link to="tables/events/:id">Event Id</Link></li>
      <li><Link to="tables/events/new">New Event</Link></li>
    </ul>
  </div>

);

export default Tables;
