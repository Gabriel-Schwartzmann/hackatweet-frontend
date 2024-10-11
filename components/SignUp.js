import styles from '../styles/SignUp.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { login } from '../reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router'

function SignUp() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    
    const router = useRouter();
    if (user.token) {
        router.push('/home')
    }

    const [signUpFirstname, setSignUpFirstname] = useState('');
    const [signUpUsername, setSignUpUsername] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstName: signUpFirstname, username: signUpUsername, password: signUpPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch(login({ firstName: signUpFirstname, username: signUpUsername, token: data.token }));
                    setSignUpUsername('');
                    setSignUpFirstname('');
                    setSignUpPassword('');
                    setIsModalVisible(false)
                }
            });
    };

    return (
        <div>
            <div className={styles.container}>
            <main className={styles.main}>
                <Image
                    src="/white-twitter-logo-icon-8.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <h1 className={styles.title}>
                    Create your Hackatweet account
                </h1>
            </main>
            <input className={styles.input} type="text" placeholder="Firstname" id="signUpFirstname" onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} />
            <input className={styles.input} type="text" placeholder="Username" id="signUpUsername" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} />
            <input className={styles.input} type="password" placeholder="Password" id="signUpPassword" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} />
            <button className={styles.register} onClick={() => handleRegister()}>Sign up</button>
            </div>
        </div>
    );
}

export default SignUp;
