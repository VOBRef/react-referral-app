import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function User() {
    const data = {firstUrl:"user", secondUrl:"userhistory", icon:"mr-2", text:"History"};
    document.title = "Referral - User";
  return (
    <>
      <Navbar data={data} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-5">
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link to="/user" className="documentname">
                      Document Name
                    </Link>
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
