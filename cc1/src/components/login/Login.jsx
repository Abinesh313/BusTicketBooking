import { Link } from 'react-router-dom'
import React from "react";
import './Login.css'
function Login()
{
    return(
        <div>
<div class="login-container">
  <div class="form">
    <div class="sign-in-section">
      <h6></h6>
      <h1>Log in</h1>
      <br></br>
      <ul>
        <li><i class="fab fa-facebook-f"></i></li>
        <li><i class="fab fa-linkedin-in"></i></li>
        <li><i class="fab fa-twitter"></i></li>
      </ul>
      <p>or use your email</p>
      <form>
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Email" required/>
        </div>
        <div class="form-field">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password" required/>
        </div>
        <div class="form-options">
          <div class="checkbox-field">
            <input id="rememberMe" type="checkbox" class="checkbox" />
            <label for="rememberMe">Remember Me</label>
          </div>
          <a href="#">Forgot Password?</a>
        </div>
        <div class="form-field">
          <input type="submit" class="btn btn-signin" value="Submit" />
        </div>
      </form>
      <div class="links">
        <span><Link to='/Register'>Sign up</Link></span>
        <a href="#">Terms & Conditions</a> 
      </div>
    </div>
  </div>
</div>
	    </div>
    )
}
export default Login;