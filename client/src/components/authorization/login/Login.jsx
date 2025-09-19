import React from 'react';
import styles from './LoginStyles.module.css';
import * as Yup from "yup";
import { Field, Form, Formik } from 'formik';
import googleIcon from '../../../images/google.png';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    login: '',
    password: '',
};

const LOGIN_SCHEMA = Yup.object().shape({
    login: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
});

const Login = () => {

    const navigate = useNavigate();

    const navigateToRegistration = () => {
        navigate('/accounts/signup');
    }

    const submitHadler = (values, formikBag) => {
        try {
            formikBag.resetForm();
        } catch (error) {
            console.error('Login user error: ', error);
        }
    }

    return (
        <div className={styles['login-bg']}>         
            <div className={styles['login-form']}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHadler}
                    validationSchema={LOGIN_SCHEMA}
                >
                    {({ isValid, dirty }) => (
                        
                    <Form>
                        <div className={styles['icon-container']}>
                            {/* <svg class={styles['grambook-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="24 34 68 46"> 
                                
                                <rect x="30" y="40" width="60" height="40" rx="12" fill="currentColor"/>

                                <path d="M50 80 l-8 12 l18-6 Z" fill="currentColor"/>
        
                                <polygon points="36,40 32,26 44,38" fill="currentColor"/>
                                <polygon points="84,40 88,26 76,38" fill="currentColor"/>
                
                                <circle cx="48" cy="60" r="4" fill="var(--gb-accent, white)"/>
                                <rect x="68" y="56" width="8" height="8" fill="var(--gb-accent, white)"/>
                            </svg> */}

                            <svg class={styles['grambook-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="24 34 68 46">
                                <defs>
                                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stop-color="#5865F2"/>
                                    <stop offset="100%" stop-color="#00B2FF"/>
                                    </linearGradient>
                                </defs>

                                <rect x="24" y="48" width="38" height="26" rx="8" fill="url(#grad)"/>
                                <path d="M42 74 l-6 8 l12-4 Z" fill="url(#grad)"/>
                                <rect x="54" y="34" width="38" height="26" rx="8" fill="url(#grad)" opacity="0.85"/>
                                <path d="M76 60 l6 8 l-12-4 Z" fill="url(#grad)" opacity="0.85"/>
                                                                
                                <circle cx="64" cy="46" r="3" fill="white"/>
                                <circle cx="74" cy="46" r="3" fill="white"/>
                                <circle cx="84" cy="46" r="3" fill="white"/>
                            </svg>

                        </div>

                        <p className={styles['grambook-title']}>Crumbook</p>
                        
                        <div>
                            <Field className={styles['input-field']} name="login" placeholder="Username or email" />
                        </div>
                        <div>
                            <Field className={`${styles["input-field"]} ${styles["last-input-field"]}`} name="password" placeholder="Password" />
                        </div>

                        <div className={styles['forgot-password']}>Forgot password</div>
                            
                        <button
                            type="submit"
                            disabled={!(isValid && dirty)}
                            className={`${styles["btn-confirm"]} ${
                                isValid && dirty ? styles.active : styles.disabled
                            }`}
                        >
                            Sign in
                        </button>
                        
                        </Form>
                        )}
                </Formik>

                <div className={styles['or-container']}>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>

                <div className={styles['via-google']}>
                    <img src={googleIcon} alt="google icon" />
                    Sign in via Google
                </div>

                <div className={styles['link-signup']}>Don't have an account?
                    <span onClick={navigateToRegistration}>Sign Up</span>
                </div>

            </div>
        </div>
    );
}

export default Login;