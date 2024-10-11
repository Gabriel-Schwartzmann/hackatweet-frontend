import styles from '../styles/Login.module.css';
import Image from 'next/image';
import { Modal } from 'antd';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
//

function Login() {
    const user = useSelector((state) => (state.user.value));
    const [isModalSignInVisible, setIsModalSignInVisible] = useState(false);
    const [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);

    const onClickSignIn = () => {
        setIsModalSignInVisible(true);
    };

    const onClickSignUp = () => {
        setIsModalSignUpVisible(true);
    };

    const handleCloseSignIn = () => {
        setIsModalSignInVisible(false);
    };

    const handleCloseSignUp = () => {
        setIsModalSignUpVisible(false);
    };

    const router = useRouter();
    if(user.token){
        router.push('/home');
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
            <Image
                    src="/logo.png"
                    alt="logo"
                    width={400}
                    height={400}
                />
            </div>
            <div className={styles.rightSide}>
            <div>
            <Image
                    src="/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
            </div>
                <main className={styles.main}>
                    <h1 className={styles.firstTitle}>See what's happening</h1>
                </main>
                <h3 className={styles.secondTitle}>Join Hackatweet today.</h3>
                <button className={styles.Signup} onClick={onClickSignUp}><a>Sign Up</a></button>
                <Modal
                    getContainer="#react-modals"
                    className={styles.modal}
                    open={isModalSignUpVisible}
                    onCancel={handleCloseSignUp}
                    footer={null}
                >
                    <SignUp />
                </Modal>
                <div className={styles.secondTitle}><h5>Already have an account?</h5></div>
                <button className={styles.Signin} onClick={onClickSignIn}><a>Sign In</a></button>
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