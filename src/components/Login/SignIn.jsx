import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import SocialSignUp from './SocialSignUp';
import { useForm } from "react-hook-form";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'react-bootstrap';
import { useResetPasswordMutation, useUserLoginMutation } from '../../redux/api/authApi';
import { message } from 'antd';
import { useMessageEffect } from '../../utils/messageSideEffect';

const SignIn = ({ handleResponse }) => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [infoError, setInfoError] = useState('');
    const [show, setShow] = useState(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [userLogin, { isError, isLoading, isSuccess, error }] = useUserLoginMutation();
    const [forgotEmail, setForgotEmail] = useState('');
    const [resetPassword, { isError: resetIsError, isSuccess: resetIsSuccess, error: resetError, isLoading: resetIsLoading }] = useResetPasswordMutation();

    setTimeout(() => {
        setShow(false);
    }, 10000);

    const onSubmit = async (event) => {
        userLogin({ ...event })
    }

    const onHandleForgotPassword = async (e) => {
        e.preventDefault();
        resetPassword({ email: forgotEmail })
        setForgotEmail("");
        setShowForgotPassword(false);
    }
    useMessageEffect(resetIsLoading, resetIsSuccess, resetIsError, resetError, "Успешно сброшен пароль. Пожалуйста, проверьте свою электронную почту!")
    useEffect(() => {
        if (isError) {
            message.error(error?.data?.message)
            setInfoError(error?.data?.message)
        }
        if (isSuccess) {
            message.success('Сәтті кіру');
            navigate('/')
        }
    }, [isError, error, isSuccess, navigate])

    const handleShowForgotPassword = () => {
        setShowForgotPassword(!showForgotPassword);
    }

    return (
        <>
            {
                showForgotPassword
                    ?
                    <form className="sign-in-form" onSubmit={onHandleForgotPassword}>
                        <h2 className="title">Құпия сөзді ұмыттыңыз ба</h2>
                        <div>Құпия сөзді ұмыту үшін электрондық пошта мекенжайын енгізіңіз</div>
                        <div className="input-field">
                            <span className="fIcon"><FaEnvelope /></span>
                            <input value={forgotEmail !== undefined && forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder="Электрондық пошта мекенжайын енгізіңіз" type="email" required />
                        </div>
                        <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Құпия сөз әлі есіңізде ме?</div>
                        <button className="iBtn" type="submit" value="sign In" >
                            {resetIsLoading ? <Spinner animation="border" variant="info" /> : "Жіберу"}
                        </button>
                    </form>
                    :
                    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
                        <Toast show={show} onClose={() => setShow(!show)} className="signInToast">
                            <Toast.Header>
                                <strong className="mr-auto">Демо тіркелу деректері</strong>
                            </Toast.Header>
                            <Toast.Body>Дәрігер ретінде кіру үшін осы есептік жазбаны пайдаланыңыз<br />
                                <hr />
                                <div className='bg-dark text-white p-2 px-3 rounded'>
                                    электрондық пошта : doctor@gmail.com <br />
                                    пароль : 123456 <br />
                                </div>
                                <hr />
                                <div className='bg-primary p-2 rounded text-white'>
                                    Өтінемін, қызметтерді теріс пайдаланбаңыз.
                                </div>
                            </Toast.Body>
                        </Toast>
                        <h2 className="title">Кіру</h2>
                        <div className="input-field">
                            <span className="fIcon"><FaEnvelope /></span>
                            <input {...register("email", { required: true })} placeholder="Электрондық пошта мекенжайын енгізіңіз" type="email" />
                        </div>
                        {errors.email && <span className="text-danger">Бұл өріс міндетті түрде толтырылады</span>}
                        <div className="input-field">
                            <span className="fIcon"><FaLock /></span>
                            <input {...register("password", { required: true })} type="password" placeholder="Құпия сөзді енгізіңіз" />
                        </div>
                        {errors.password && <span className="text-danger">Бұл өріс міндетті түрде толтырылады</span>}
                        {infoError && <p className="text-danger">{infoError}</p>}
                        <div onClick={handleShowForgotPassword} className='text-bold' style={{ cursor: "pointer", color: '#4C25F5' }}>Құпия сөзді ұмыттыңыз ба ?</div>
                        <button className="iBtn" type="submit" value="sign In" >
                            {isLoading ? <Spinner animation="border" variant="info" /> : "Кіру"}
                        </button>
                        <p className="social-text">Немесе әлеуметтік медиа арқылы кіріңіз</p>
                        <SocialSignUp handleResponse={handleResponse} />
                    </form>
            }
        </>
    );
};

export default SignIn;