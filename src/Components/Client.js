import React from "react";
import logo from "../assets/img/logo.svg";
// import Logout from "../assets/img/logout.png";
import Verified from "../assets/img/verified.png";
import { Link } from "react-router-dom";

export default function Client() {
  document.title = "Referral - Client";

  function DropdownDate() {
    let items = [];
    for (let date = 1; date <= 31; date++) {
      items.push(
        <option key={date} value={date}>
          {date}
        </option>
      );
    }
    return items;
  }

  function DropdownYear() {
    var currentdate = new Date();
    let currentyear = currentdate.getFullYear();
    let items = [];
    for (let year = currentyear; year >= 1935; year--) {
      items.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return items;
  }

  return (
    <>
      <section id="wrapper">
        <header className="site-header">
          <div className="container-fluid">
            <nav className="navbar site-navigation">
              <div className="navbar-brand">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>

              <ul className="navbar-nav">              
                <li>
                  <Link to="/">
                    <span className="icon">
                      <i className="fa fa-sign-out text-webtext"></i>
                      {/* <img src={Logout} alt="LogOut" /> */}
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="site-main">
          <section className="common-sec">
            <div className="container-fluid">
              <div className="date-of-birth-fields">
                <h4 className="heading">
                  Please Enter Your Date of Birth to Access the Message
                </h4>
                <div className="dob-wrapp">
                  <div className="dob-select dob-month">
                    <select name="" className="form-control" id="">
                      <option value="">Month</option>
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </select>
                  </div>

                  <div className="dob-select dob-date">
                    <select name="" className="form-control" id="dropDate">
                      <option value="">Date</option>
                      {DropdownDate()}
                    </select>
                  </div>

                  <div className="dob-select dob-year">
                    <select name="" className="form-control" id="dropYear">
                      <option value="">Year</option>
                      {DropdownYear()}
                    </select>
                  </div>
                </div>

                <div className="input-submit">
                  <button
                    type="submit"
                    className="custom-btn"
                    data-toggle="modal"
                    data-target="#verifiedDobModal"
                  >
                    Submit
                  </button>
                </div>
                <p className="msg-error">Please Enter Correct Date of Birth</p>
              </div>
            </div>
          </section>
        </main>
      </section>

      <div
        className="modal fade custom-modal verifiedModalClass"
        id="verifiedDobModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close ml-auto"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body text-center">
              <div className="img mb-4">
                <img src={Verified} alt="Success" />
              </div>
              <h3 className="modal-title font-weight-bolder">Thank You!</h3>
              <p>Please Check Your Email.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
