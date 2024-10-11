import { useSelector } from 'react-redux';
import Tweet from './Tweet';
import styles from '../styles/LastTweets.module.css';


function LastTweets() {
  const tweetsList = useSelector((state) => state.tweets.value);

  const tweets = tweetsList.map((data, i) => {
    return <Tweet key={i} {...data} />;
  });

  return (
    <>
      {tweets}
    </>
  );
}

export default LastTweets;