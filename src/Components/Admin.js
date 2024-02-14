import React from "react";
import Navbar from "./Navbar";

export default function Admin() {
  const data = {
    firstUrl: "admin",
    secondUrl: "document",
    icon: "d-none",
    text: "Document",
  };
  document.title = "Referral - Admin";
  return (
    <>
      <Navbar data={data} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 my-3">
            <button
              className="custom-btn mr-3"
              data-toggle="modal"
              data-target="#addNewUserModal"
            >
              Add New User
            </button>
            <button
              className="custom-btn"
              data-toggle="modal"
              data-target="#backupModal"
            >
              Backup
            </button>
          </div>

          <div className="col-md-10">
            <table className="table table-borderless">
              <tr>
                <th>Email</th>
                <th>Passwords</th>
                <th>History</th>
                <th></th>
              </tr>
              <tr>
                <td>walter.fisher@gmail.com</td>
                <td>Walter@123</td>
                <td>10 days</td>
                <td>
                  <button className="btn btn-del">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>walter.fisher@gmail.com</td>
                <td>Walter@123</td>
                <td>10 days</td>
                <td>
                  <button className="btn btn-del">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>walter.fisher@gmail.com</td>
                <td>Walter@123</td>
                <td>10 days</td>
                <td>
                  <button className="btn btn-del">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>walter.fisher@gmail.com</td>
                <td>Walter@123</td>
                <td>10 days</td>
                <td>
                  <button className="btn btn-del">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>walter.fisher@gmail.com</td>
                <td>Walter@123</td>
                <td>10 days</td>
                <td>
                  <button className="btn btn-del">
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/*  Modal Add new user */}
      <div
        className="modal fade custom-modal"
        id="addNewUserModal"
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

            <div className="modal-body">
              <h3 className="modal-title text-center">Add New User</h3>

              <section className="custom-form-sec">
                <form className="icon-form" action="" method="post">
                  <div className="mdl-input-bx">
                    <label>Email</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      autocomplete="off"
                      required
                      placeholder="Enter Email"
                    />
                  </div>

                  <div className="mdl-input-bx">
                    <label>Password</label>
                    <input
                      type="password"
                      name=""
                      id=""
                      className="form-control"
                      autocomplete="off"
                      required
                      placeholder="Enter Password"
                    />
                  </div>

                  <div className="mdl-input-bx">
                    <label>History</label>
                    <select name="" className="form-control" id="">
                      <option value="7-days">0 Days</option>
                      <option value="7-days">7 Days</option>
                      <option value="30-days">30 Days</option>
                      <option value="90-days">90 Days</option>
                      <option value="180-days">180 Days</option>
                      <option value="365-days">365 Days</option>
                    </select>
                  </div>

                  <div className="mdl-input-bx">
                    <label>IP Address (Optional)</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      autocomplete="off"
                      placeholder="Enter IP Address"
                    />
                  </div>

                  <button type="submit" className="custom-btn popSubmit">
                    Add
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/*  <!-- Modal backup --> */}
      <div
        className="modal fade custom-modal"
        id="backupModal"
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

            <div className="modal-body">
              <h3 className="modal-title text-center">Backup</h3>

              <section className="custom-form-sec">
                <form className="icon-form" action="" method="post">
                  <div className="mdl-input-bx">
                    <label>Enter Backup Email</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      autocomplete="off"
                      required
                      placeholder="Enter Backup Email"
                    />
                  </div>

                  <button type="submit" className="custom-btn popSubmit">
                    Backup
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
