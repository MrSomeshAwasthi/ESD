import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import profile from '../images/profile.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {


    localStorage.clear();

    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState(
        {
            'email': '',
            'password': ''
        }
    );

    const [emailErrorMsg, setEmailError] = useState('');
    const [passErrorMsg, setPassError] = useState('');

    const handleEmailChange = (e) => {
        setLoginDetails({
            ...loginDetails,
            'email': e.target.value
        })
    }

    const handlePasswordChange = (e) => {
        setLoginDetails({
            ...loginDetails,
            'password': e.target.value
        })
    }



    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginDetails)
        setEmailError('');
        setPassError('');
        axios.post('http://localhost:9191/login',loginDetails)
        .then((res)=>{
            console.log(res);
            window.localStorage.setItem('student', JSON.stringify(res.data));
            window.localStorage.setItem('IsAuthenticated', true);
            navigate('/cal')
            // setErrorMsg('');
        })
        .catch((err)=>{
            console.log(err)
            if(err.response.data==="Invalid Email Provided!" || err.response.data === "Enter the required details!"){
                setEmailError(err.response.data);
            }
            if(err.response.data==="Invalid Password Provided!" || err.response.data === "Enter the required details!"){
                setPassError(err.response.data);
            }
            console.log(err.response.data);
        })
    }



    return (
        <div>
            <Navbar props={{"page":"login"}}/>
            <div className='wrap'>

                <div className="login-wrapper">
                    <div className='login-head container col-12'>
                        <h1>Student Login</h1>
                    </div>
                    <div className='profile-img'>
                        <img src={profile} width="200px" height="200px"></img>
                    </div>
                    <div className="col-12">
                        <form className="p-3">
                            <div className='fg'>
                                <label for="email">Enter Email:</label>
                                <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email" onChange={handleEmailChange} style={emailErrorMsg!==''?{border:"1px solid red"}:{}}></input>
                            </div>
                            <div className='fg'>
                                <label for="password">Enter Email:</label>
                                <input type="password" class="form-control" id="password" aria-describedby="email" placeholder="Enter password" onChange={handlePasswordChange} style={passErrorMsg!==''?{border:"1px solid red"}:{}}></input>
                            </div>
                            <div className="log mt-5 d-flex justify-content-evenly">
                                <button type="submit" onClick={handleLogin} className="btn btn-primary">Login</button>
                                <button id="reset" type="reset" className="btn btn-primary">Reset</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-12 text-center'>
                        <span className='error'>{emailErrorMsg !== '' ? emailErrorMsg : passErrorMsg}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login