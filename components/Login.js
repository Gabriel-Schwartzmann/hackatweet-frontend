import styles from '../styles/Login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Modal } from 'antd';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';


function Login() {
    const [isModalSignInVisible, setIsModalSignInVisible] = useState(false);
    const [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);

    const onClickSignIn = () => {
        setIsModalSignInVisible(true);
    }

    const onClickSignUp = () => {
        setIsModalSignUpVisible(true);
    }

    const handleCloseSignIn = () => {
        setIsModalSignInVisible(false);
    }

    const handleCloseSignUp = () => {
        setIsModalSignUpVisible(false);
    }

    return (
        <div>
            <div>y</div>
            <div>
                <Image
                    src="/white-twitter-logo-icon-8.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <main className={styles.main}>
                    <h1 className={styles.title}>See what's happening</h1>
                </main>
                <div><h3>Join Hackatweet today.</h3></div>
                <button onClick={onClickSignUp}>Sign Up</button>
                <Modal
                    getContainer="#react-modals"
                    className={styles.modal}
                    open={isModalSignUpVisible}
                    onCancel={handleCloseSignUp}
                    footer={null}
                >
                    <SignUp />
                </Modal>
                <div><h5>Already have an account?</h5></div>
                <button onClick={onClickSignIn}>Sign In</button>
                <Modal
                    getContainer="#react-modals"
                    className={styles.modal}
                    open={isModalSignInVisible}
                    onCancel={handleCloseSignIn}
                    footer={null}
                >
                    <SignIn />
                </Modal>
            </div>
        </div>
    );
}

export default Login;