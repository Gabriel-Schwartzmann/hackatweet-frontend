import styles from '../styles/Home.module.css';
import Login from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../reducers/user';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import LastTweets from './LastTweets';
import Trends from './Trends';
import Tweet from './Tweet';


function Home() {

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div id="left"><Login />
      <button onClick={handleLogout}>Logout</button>
      </div>
      <div id="center">
        <Tweet/>
        <LastTweets/>
      </div>
      <div id="right"><Trends/></div>
    </div>
  );
}

export default Home;
