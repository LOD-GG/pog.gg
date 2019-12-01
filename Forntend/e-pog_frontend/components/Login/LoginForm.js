import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import axios from 'axios';
import './LoginForm.scss';
const LoginForm = () => {
    const [Username, SetUsername] = useState('');
    const [Email, SetEmail] = useState('');
    const [Password, SetPassword] = useState('');
    const [Disabled, SetDisabled] = useState(true);
    const [isLogin, SetIsLogin] = useState(true);
    const onJoinClick = () => {
        console.log(Email, Password, Username)
        axios.post("http://192.168.137.1:8080/joinRequest", {
            userid: Email,
            password: Password,
            username: Username
        }).then(response => {
            alert('회원가입 완료')
            console.log(response)
        })
        .catch(error => {
            alert(error)
        })
    }
    const onSignInClick = () => {
        console.log(Email, Password)
        axios.post("http://192.168.137.1:8080/loginRequest", {
            userid: Email,
            password: Password,
        }).then(response => {
            localStorage.setItem('token', response.data.token);
            location.href = "/";
        })
        .catch(error => {
            alert(error)
        })
    }
    useEffect(() => {
        if(Email === '' || Password === '') {
            SetDisabled(true);
        } else {
            SetDisabled(false);
        }
    },[Email, Password])
    return (
    <>
        {
            isLogin ? (
                <div className="login-form__contianer">
                    <div className="login-form__inner">
                        <h1 className="login-from__logo"><img class="login-form__logo-image" src="/static/logo.png"/></h1>
                        <div className="login">
                            <form>
                                <div className="member-input">
                                    <div className="member-input__state">
                                        <input class="member-input__box" onChange={(e) => SetEmail(e.target.value)} value={Email} type="text" placeholder="Email"/>
                                    </div>
                                    <div className="member-input__state">
                                        <input class="member-input__box"  id="password-input" onChange={(e) => SetPassword(e.target.value)} value={Password} type="tel" placeholder="Password"/>
                                    </div>
                                    <button onClick={() => onSignInClick()} type="button" class="member-button login__btn" disabled={Disabled}>
                                        LOGIN
                                    </button>
                                </div>
                            </form>
                            <div className="login__l-sign-up">
                                Don’t have an account?
                                <div className="login__sign-up-link"  onClick={() => SetIsLogin(false)}>Sign Up</div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="login-form__contianer">
                    <div className="login-form__inner">
                        <h1 className="login-from__logo"><img class="login-form__logo-image" src="/static/logo.png"/></h1>
                        <div className="login">
                            <form>
                                <div className="member-input">
                                    <div className="member-input__state">
                                        <input class="member-input__box" onChange={(e) => SetUsername(e.target.value)} value={Username} type="text" placeholder="Username"/>
                                    </div>
                                    <div className="member-input__state">
                                        <input class="member-input__box" onChange={(e) => SetEmail(e.target.value)} value={Email} type="text" placeholder="Email"/>
                                    </div>
                                    <div className="member-input__state">
                                        <input class="member-input__box"  id="password-input" onChange={(e) => SetPassword(e.target.value)} value={Password} type="password" placeholder="Password"/>
                                    </div>
                                    <button onClick={() => onJoinClick()} type="button" class="member-button login__btn" disabled={Disabled}>
                                        SignUp
                                    </button>
                                </div>
                            </form>
                            <div className="login__l-sign-up">
                                Do you have an account?
                                <div className="login__sign-up-link" onClick={() => SetIsLogin(true)}>Login</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </>
    )
}

export default LoginForm;