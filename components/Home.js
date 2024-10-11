import styles from '../styles/Home.module.css';
import Login from './Login';
import { useSelector } from 'react-redux';
import { logout } from '../reducers/user';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import LastTweets from './LastTweets';
import Trends from './Trends';
import Tweet from './Tweet.js'


function Home() {


  return (
    <div>
      <div id="left"><Login />logout
      </div>
      <div id="center"><LastTweets />
      </div>
      <div>
        <Tweet />
      </div>
      <div id="right"><Trends /></div>
    </div>
  );
}

export default Home;
