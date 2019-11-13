import React,{Component} from 'react';
import styles from './Signup.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import axios from 'axios';
import base_url from '../../base_url';

const cx = classNames.bind(styles);

class Signup extends Component {

    constructor(props){
        super(props);

        this.state = {
            nickname : '',
            email: '',
            password: ''
        };
    }

    ChangeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }

    onSubmit = () => {
        const {history} = this.props;
        const {nickname, email, password} = this.state;
        if(nickname === '' || email === '' || password === ''){
            alert("회원 정보를 입력해주세요.");
        }
        else{
            axios({
                url: `${base_url}/joinRequest`,
                method: 'POST',
                data: {
                    username : nickname,
                    userid : email,
                    password : password
                }
            }).then((res) => {
                console.log(res);
                if(res.status === 200){
                    alert("POG.GG에 가입 하신 것을 환영합니다!");
                    history.push('/');
                }
                else if(res.status === 403){
                    alert("닉네임 중복입니다, 다시 입력해주세요!");
                    
                }
                else{
                    alert("회원 가입 실패");
                    
                }
            })
        }
    }



    render() {
        const{
            ChangeInput
        } = this;

        const {
            nickname,
            email,
            password
        } = this.state;

        return(
            <div className={cx('Signup-page')}>
                <div className={cx('Signup-form')}>
                    <div className={cx('Signup-title')}>Create your account now</div>
                    <div className={cx('input-wrapper')}>
                        <span className={cx('sub-title')}>Nickname</span>
                        <input type="text" placeholder="your nickname" value={nickname} onChange={ChangeInput} name="nickname"/>
                        <span>Email</span>
                        <input type="text" placeholder="your email" value={email} onChange={ChangeInput} name="email"/>
                        <span>Password</span>
                        <input type="password" placeholder="password" value={password} onChange={ChangeInput} name="password"/>
                        <input type="submit" value="Sign up" id="submit" onClick={this.onSubmit}/>
                        <div className={cx('info')}>Already have an account? <Link to="/signin">Login.</Link></div>
                    </div>
                </div>
            </div>
            
        );
    };

    
};

export default Signup;