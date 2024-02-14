import React from "react";
import Navbar from "./Navbar";

export default function UserHistory() {
    const data = {firstUrl:"user", secondUrl:"userhistory", icon:"mr-2", text:"History"};
    document.title = "Referral - History";
  return (
    <>
      <Navbar data={data} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-10 table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th>Email</th>
                  <th>Document</th>
                  <th>Date</th>
                  <th className="text-center">Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mac Anderson</td>
                  <td>07-21-2022</td>
                  <td>macanderson@gmail.com</td>
                  <td>Test Document</td>
                  <td>07-21-2022</td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <span className="icon">
                        <i className="fa fa-download" alt="Download"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mac Anderson</td>
                  <td>07-21-2022</td>
                  <td>macanderson@gmail.com</td>
                  <td>Test Document</td>
                  <td>07-21-2022</td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <span className="icon">
                        <i className="fa fa-download" alt="Download"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mac Anderson</td>
                  <td>07-21-2022</td>
                  <td>macanderson@gmail.com</td>
                  <td>Test Document</td>
                  <td>07-21-2022</td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <span className="icon">
                        <i className="fa fa-download" alt="Download"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mac Anderson</td>
                  <td>07-21-2022</td>
                  <td>macanderson@gmail.com</td>
                  <td>Test Document</td>
                  <td>07-21-2022</td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <span className="icon">
                        <i className="fa fa-download" alt="Download"></i>
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Mac Anderson</td>
                  <td>07-21-2022</td>
                  <td>macanderson@gmail.com</td>
                  <td>Test Document</td>
                  <td>07-21-2022</td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <span className="icon">
                        <i className="fa fa-download" alt="Download"></i>
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
