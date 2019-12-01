import React, {useEffect} from 'react';
import AppLayout from '../components/AppLayout/AppLayout';
import LoginForm from '../components/Login/LoginForm';
import axios from 'axios';
const Login = () => {
    return (
        <>
            <AppLayout/>
            <LoginForm/>
        </>
    )
}
export default Login;