import styles from '../styles/Home.module.css';
import Login from './Login';
import { useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


function Home() {


  return (
    <div>
      <div id="left">logo<Login />logout
      </div>
      <div id="center">tweet
        last tweet
      </div>
      <div id="right">trend</div>
    </div>
  );
}

export default Home;
