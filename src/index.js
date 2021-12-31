import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
function Form() {
  return <section className='loginSection'>
    <article>
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
      <div>
        <label className='label' htmlFor='userName'> Username</label>
        <input className='inp' type='text' id='userName' name='userName' ></input>
      </div>
      <div>
        <label className='label' htmlFor='password'> Password</label>
        <input className='inp' type="password" id='password' name='password' ></input>
      </div>
      <div>
        <button className='button' type='submit'> Login </button>
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
        <button className='button'>Sign up</button>

      </div>
    </article>
  );
}

ReactDom.render(<Form />, document.getElementById('root'));