import React from 'react';
import styles from './RegistrationStyles.module.css';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import googleIcon from '../../../images/google.png';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
};

const SIGNUP_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .max(100)
        .email("Write the correct email format")
        .required("Email is required"),
    username: Yup.string()
        .min(2, "Minimum 2 and maximum 30 symbols")
        .max(30, "Minimum 2 and maximum 30 symbols")
        .matches(/^[A-Za-z0-9_.]+$/, "Only letters, digits, _ or .")
        .required("Last name is required"),
    password: Yup.string()
        .min(8, "At least 8 symbols")
        .matches(/[A-Z]/, "At least one capital letter")
        .matches(/[a-z]/, "At least one lowercase letter")
        .matches(/[0-9]/, "At least one digit")
        .required("Password is required"),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passowrds must match")
        .required("Password confirmation is required"),
});

const Registration = () => {

    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate('/accounts/signin');
    }

    const submitHadler = (values, formikBag) => {
        try {
            formikBag.resetForm();
        } catch (error) {
            console.error('Registration user error: ', error);
        }
    }

    return (
        <div className={styles['signup-bg']}>         
            <div className={styles['signup-form']}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHadler}
                    validationSchema={SIGNUP_SCHEMA}
                >
                    {({ isValid, dirty, errors, touched }) => (
                        
                    <Form>
                        <div className={styles['icon-container']}>
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
                            <Field
                                name="email"
                                placeholder="Email"
                                className={`${styles["input-field"]} 
                                    ${touched.email && errors.email ? styles["input-error"] :
                                    touched.email && !errors.email ? styles["input-correct"] : ""}
                                `}
                            />
                            <ErrorMessage name="email" component="p" className={styles["error"]} />
                        </div>
                        <div>
                            <Field
                                name="username"
                                placeholder="Username"
                                className={`${styles["input-field"]}
                                    ${touched.username && errors.username ? styles["input-error"] :
                                    touched.username && !errors.username ? styles["input-correct"] : ""}
                                `}
                            />
                            <ErrorMessage name="username" component="p" className={styles["error"]} />
                        </div>
                        <div>
                            <Field
                                name="password"
                                placeholder="Password"
                                className={`${styles["input-field"]}
                                    ${touched.password && errors.password ? styles["input-error"] :
                                    touched.password && !errors.password ? styles["input-correct"] : ""}
                                `}
                            />
                            <ErrorMessage name="password" component="p" className={styles["error"]} />
                        </div>
                        <div>
                            <Field
                                name="passwordConfirm"
                                placeholder="Confirm password"
                                className={`${styles["input-field"]} ${styles["last-input-field"]}
                                    ${touched.passwordConfirm && errors.passwordConfirm ? styles["input-error"] :
                                    touched.passwordConfirm && !errors.passwordConfirm ? styles["input-correct"] : ""}
                                `}
                            />
                            <ErrorMessage name="passwordConfirm" component="p" className={styles["last-error"]} />
                        </div>
                            
                        <button
                            type="submit"
                            disabled={!(isValid && dirty)}
                            className={`${styles["btn-confirm"]} ${
                                isValid && dirty ? styles.active : styles.disabled
                            }`}
                        >
                            Sign up
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
                    Sign up via Google
                </div>

                <div className={styles['link-signup']}>Already have an account?
                    <span onClick={navigateToLogin}>Sign In</span>
                </div>

            </div>
        </div>
    );
}

export default Registration;