import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import apiService from "../Services/apiService";

export default function Login(props) {
  const navigate = useNavigate();

  const submit = async (e) => {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const response = await apiService.post('',formDatab);
    console.log(response,'eeeeeeeeeeeee');
    localStorage.setItem("token",response?.data?.token);
    if(localStorage.getItem("token") !== "undefined" && localStorage.getItem("token") ) {
      navigate('/admin');
    }
  }
  return (
    <section id="wrapper">
      <section className="common-sec login-page-sec">
        <div className="container mb-5">
          <div className="logo-dv text-center">
            <Link className="navbar-brand" to="/">
              <span className="site-logo">
                <img src={logo} alt="Logo" />
              </span>
            </Link>
          </div>

          <div className="login-form-dv mb-4">
            <section className="custom-form-sec">
              <form className="icon-form" action="" method="post">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-bx">
                      <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="form-control"
                        autocomplete="off"
                        required
                        placeholder="Username"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-12">
                    <div className="input-bx pass-bx">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        autocomplete="off"
                        required
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>

                <div className={`text-right mt-5 ${props.log === 'user' ? 'd-none' : 'd-block'}`}>
                  <Link href="/" className="text-dark">Forgot Password</Link>
                </div>

                <div className="submit mt-5">
                  <Link className="custom-btn round-btn" onClick={submit}>Login</Link>
                  {/* <button type="submit" className="custom-btn round-btn">
                    Login
                  </button> */}
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </section>


  );
}
