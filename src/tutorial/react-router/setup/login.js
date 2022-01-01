import React from 'react';
import { Link } from 'react-router-dom';

const Login1 = () => {
    return <section className='loginSection'>
        <article >
            <Login />
            <Form1 />
            <Signup />
        </article>
    </section>
}
const Login = () => <h2 className='log' >Login</h2>
const Form1 = () => {
    return (<article>
        <form className='form'>
            <div >
                <label className='label' htmlFor='userName'> Username</label>
                <input className='inp' type='text' id='userName' name='userName' ></input>
            </div>
            <div>
                <label className='label' htmlFor='password'> Password</label>
                <input className='inp' type="password" id='password' name='password' ></input>
            </div>
            <div>
                <Link to="/home" >
                    <button className='button' type='submit'> Login </button>
                </Link>

            </div>
        </form>
    </article>

    );
}
const Signup = () => {
    return (
        <article>
            <div>
                <h4 className='label1'> Not a member? </h4>
                <Link to="/home" >
                    <button className='button' type='submit'> Signup </button>
                </Link>
            </div>


        </article>
    );
}
export default Login1;