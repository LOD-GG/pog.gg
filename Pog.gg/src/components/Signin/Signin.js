import React,{Component} from 'react';
import styles from './Signin.scss';
import classNames from 'classnames/bind';
import {Link } from 'react-router-dom';
import axios from 'axios';
import base_url from '../../base_url';

const cx = classNames.bind(styles);

class Signin extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        };
    };

    ChangeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    LoginSubmit = () => {
        const {history} = this.props;
        const {email, password} = this.state;

        if(email === "" || password === ""){
            alert("정보를 입력해주세요");
        }else{
            axios({
                url : `${base_url}/loginRequest`,
                method: 'POST',
                data: {
                    userid: email,
                    password : password
                }                                                                         
            }).then((res) => {
                console.log(res.data.token);
                if(res.status === 200){
                    console.log(res.status);
                    localStorage.setItem("accessToken", res.data.token);
                    // localStorage.setItem("refreshToken", res.refreshToken);

                    alert("로그인 성공!");
                    history.push('/');
                }   
                else if(res.status === 401){
                    alert("아이디 또는 비밀번호를 다시 확인하세요.POG.GG에 등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.");
                }
                else{
                    alert("로그인 실패");
                }
            }) 
        }
    }
    
    render(){

        const{
            ChangeInput
        } = this;

        const{
            email,
            password
        } = this.state;

        return(

            <div className={cx('Signin-page')}>
                <div className={cx('Signin-form')}>
                    <div className={cx('Signin-title')}>Login</div>
                    <div className={cx('input-wrapper')}>
                        <span>Email</span>
                        <input type="text" placeholder="your email" name="email" value={email} onChange={ChangeInput}/>
                        <span>Password</span>
                        <input type="password" placeholder="password" name="password" value={password} onChange={ChangeInput}/>
                        <input type="submit" value="Login" id="LoginSubmit" onClick={this.LoginSubmit}/>
                        <div className={cx('info')}>the first time here?<Link to="/signup">Sign up.</Link></div>
                    </div>
                </div>
            </div>
            
        );
    }
    
};

export default Signin;