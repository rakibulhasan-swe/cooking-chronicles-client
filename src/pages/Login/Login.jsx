import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  // sign in user
  const handleLogin = (e) => {
    // preventing refreshing
    e.preventDefault();
    setLoginError("");

    // form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // login user
    loginUser(email, password)
    .then(res => {
      const loggedUser = res.user;
      console.log(loggedUser);
    })
    .catch(err => {
      console.log(err?.message);
      if(err?.message){
        setLoginError("Please insert correct email and password!");
      }
    })

    // reseting form value
    e.target.reset();
  };
  return (
    <>
      <div className="container pt-4">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-md-5">
            <div className="card p-4">
              <div className="text-center">
                <h3>Welcome to Login</h3>
                <img src="" alt="" />
              </div>
              <form className="card-body" onSubmit={handleLogin}>
                <span className="fs-5 d-block pb-1">Email</span>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    required
                  />
                </div>
                <span className="fs-5 d-block pb-1">Password</span>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                    required
                  />
                </div>
                <p className="text-danger pt-2"><small>{loginError}</small></p>
                <div>
                  <button className="btn btn-dark mt-3 w-100 fw-bold fs-5">
                    Login
                  </button>
                </div>
                <p className="text-center pt-2">or</p>
                <div className="pb-3">
                  <button className="btn btn-outline-dark w-100">
                    SignIn with google
                  </button>
                </div>
                <div>
                  <button className="btn btn-outline-dark w-100">
                    SignIn with Github
                  </button>
                </div>
                <p className="text-center pt-4">
                  Haven't an account?{" "}
                  <Link
                    className="text-decoration-none d-text fw-bold"
                    to="/register"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
