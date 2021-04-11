import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view.</h2>
    <ul>
      <li><Link to="waiter/order/new">New</Link></li>
      <li><Link to="waiter/order/:id">Order Id</Link></li>

    </ul>
  </div>

);

export default Waiter;
