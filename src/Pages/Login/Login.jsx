import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
        setDisabled(false);
    }

    else {
        setDisabled(true);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="text-center  md:w-1/2 lg:text-right">
          <h1 className="text-5xl font-bold text-stone-700">Login now!</h1>
        </div>
        <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="type captcha above"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-xs btn-outline mt-2 rounded-md mx-16"
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-2">
              <input
                type="submit"
                disabled={disabled}
                className="btn btn-primary rounded-md"
                value="Login"
              />
              <p className="">
                New Here?{" "}
                <Link to={"/register"} className="text-emerald-600 font-bold">
                  Register
                </Link>{" "}
                Please
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
