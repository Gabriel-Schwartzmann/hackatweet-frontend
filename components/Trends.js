import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import styles from '../styles/Trends.module.css';

function Trends() {
  
    const user = useSelector((state) => state.user.value);
  const tweetsData = useSelector((state) => state.tweets.value);
  const [trendsValues, setTrendsValues] = useState([]);

  useEffect(() => {
    fetch(
      `https://hacka-tweet-back-five.vercel.app/tweets/trends/${user.token}`
    )
      .then((response) => response.json())
      .then((data) => {
        data.result && setTrendsValues(data.trends);
      });
  }, [tweetsData]);

  const trends = trendsValues.map((data, i) => {
    return (
      <Link key={i} href={`/hashtag/${data.hashtag.slice(1)}`}>
        <div className={styles.tweetContainer}>
          <h3 className={styles.hashtag}>{data.hashtag}</h3>
          <h4 className={styles.nbrTweet}>{data.count} Tweets</h4>
        </div>
      </Link>

    );
  });

  return (
    <div className={styles.container}>
      {trends}
    </div>
  );
}

export default Trends;