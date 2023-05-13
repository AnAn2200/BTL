import React from 'react'
import '../pages/signup.css'
import useForm from './useForm'
import validateInfo from './validateInfo'

const SignupPage = () => {

  var {handChange, values, handSubmit, error} = useForm(validateInfo);

  return (
    <div className = "form-content">
      <form className='form' onSubmit={handSubmit}>
        <h1>Create a new account</h1>
        <div className='form-input'>
          <label htmlFor='username'
                className='form-label'
          >
           Username
          </label>
          <input id="username"
                type='text'
                name='username'
                className='form-input'
                placeholder='Enter your username'
                value={values.username}
                onChange={handChange}/>
                {error.username && <p>{error.username}</p>}
        </div>
        <div className='form-input'>
          <label htmlFor='email'
                className='form-label'
          >
            Email
          </label>
          <input id="email"
                type='email'
                name='email'
                className='form-input'
                placeholder='Enter your email'
                value={values.email}
                onChange={handChange}/>
                {error.email && <p>{error.email}</p>}
        </div>
        <div className='form-input'>
          <label htmlFor='password'
                className='form-label'
          >
            Password
          </label>
          <input id="password"
                type='password'
                name='password'
                className='form-input'
                placeholder='Enter your password'
                value={values.password}
                onChange={handChange}/>
                {error.password && <p>{error.password}</p>}
        </div>
        <div className='form-input'>
          <label htmlFor='password2'
                className='form-label'
          >
            Confirm password
          </label>
          <input id="password2"
                type='password'
                name='password2'
                className='form-input'
                placeholder='Confirm your password'
                value={values.password2}
                onChange={handChange}/>
                {error.password2 && <p>{error.password2}</p>}
        </div>
        <button className='form-btn' type='submit'>
            Sign up
        </button>
        <span className='form-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  
  )
}

export default SignupPage