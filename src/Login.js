import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase"


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth) {
                history.push('/') 
            }
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
        <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png" alt=""/>
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/> 
                <h5>Password</h5>
                <input type="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Condition of use & sale. Please see our Privacy Notice, our COokies Notice nd our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className="login__registerButton">create amazon accout</button>
        </div>
        </div>
    )
}
