import styles from '../styles/SignIn.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { login } from '../reducers/user';
import { useRouter } from 'next/router'

function SignIn() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    
    const router = useRouter();
    if (user.token) {
        router.push('/home')
    }

    const [signInFirstname, setSignInFirstname] = useState('');
    const [signInUsername, setSignInUsername] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleConnection = () => {

        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signInUsername, password: signInPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ username: data.username , token: data.token }));
                    setSignInUsername('');
                    setSignInPassword('');
                    setIsModalVisible(false)
                }
            });
    };

    return (
        <div>
            <main className={styles.main}>
                <Image
                    src="/white-twitter-logo-icon-8.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <h1 className={styles.title}>
                    Connect to Hackatweet
                </h1>
            </main>
            <input type="text" placeholder="Username" id="signInUsername" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} />
            <input type="password" placeholder="Password" id="signInPassword" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} />
            <button id="connect" onClick={() => handleConnection()}>Sign in</button>
        </div>
    );
}

export default SignIn;
