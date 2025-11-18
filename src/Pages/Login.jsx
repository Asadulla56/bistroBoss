import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import SocialLogin from './Shared/SocialLogin';
import registerBg from '../assets/others/authentication.png';
import loginImg from '../assets/others/authentication2.png';
import { Link } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signinUser } = useAuth();
  const recaptchaRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const captchaValue = recaptchaRef.current.getValue();
    if (!captchaValue) {
      alert('Please complete the captcha');
      return;
    }

    console.log(email, password);
    signinUser(email, password)
      .then(res => {
        console.log(res.user);
        form.reset();
        recaptchaRef.current.reset(); // reset captcha after submit
      })
      .catch(err => console.log(err));
  };

  const handleCaptchaChange = (value) => {
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${registerBg})` }} className='min-h-screen'>
        <Link to={'/'}>Back to Home</Link>
        <div className='flex justify-around md:flex-row-reverse flex-col-reverse items-center'>
          <div className='w-full mb-10 lg:w-1/3'>
            <h1 className='text-3xl font-bold text-center'>Sign In</h1>
            <div className="card bg-transparent w-full shrink-0 ">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                </div>
                <div className="form-control my-4">
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    ref={recaptchaRef}
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div className="form-control mt-6">
                  <button disabled={disabled} className="btn btn-primary bg-[#fedaa8] border-none text-black">Login</button>
                </div>
                <h5 className='text-center text-sm text-[#D1A054]'>
                  New here? <Link className='underline' to={'/register'}>Create a New Account</Link>
                </h5>
              </form>
              <SocialLogin />
            </div>
          </div>
          <div>
            <img src={loginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
