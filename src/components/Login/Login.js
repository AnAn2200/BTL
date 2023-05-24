import React, { useState } from "react";
import { AiFillLock, AiOutlineUser } from 'react-icons/ai';
import Link from "antd/es/typography/Link";
import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
      username: "user3",
      password: "pass3"
    },
    {
      username: "user4",
      password: "pass4"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  
  const renderForm = (
    <div className="form">
      
      <form onSubmit={handleSubmit}>
        
        <div className="input-container" >
          <label>Tài khoản <AiOutlineUser/>  </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Mật khẩu  <AiFillLock/></label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div class="button-container">
          <div><input  type ="submit" value="Đăng nhập"/></div>
        </div>
        <div class="input-link1">
        <div > 
        <a href="Form">Đăng ký</a>
        </div>
        <div>
          <Link to="#">Quên mật khẩu</Link>
        </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      
      <div className="login-form">
      
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
        <img src={require('./user.png')} width={40} height={40}  />   
      </div>
        
      <div className="title">ĐĂNG NHẬP THANH CONG</div>
        {isSubmitted ? <Link href="/" >Nhap vao day de ve trang chu</Link> : renderForm}
      </div>
    </div>
  );
}

export default Login;