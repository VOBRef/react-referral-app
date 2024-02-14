import React from "react";
import Navbar from "./Navbar";
import Iframe from "react-iframe";
import Verified from "../assets/img/verified.png";
// import PDFFILE from "../assets/img/verified.png";

export default function UserSendEmail() {
  const data = {
    firstUrl: "user",
    secondUrl: "userhistory",
    icon: "mr-2",
    text: "History",
  };  

  document.title = "Referral - Send Email";
  return (
    <>
      <Navbar data={data} />
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3" style={{marginTop:'180px'}}>
            <form action="" id="secure-message-form mt-3">
              <div className="user-send-email-wrapp">
                <div className="mdl-input-bx">
                  <label>Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    autocomplete="off"
                    required
                    placeholder="Copy & paste only"
                  />
                </div>

                <div className="mdl-input-bx">
                  <label>Email</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    autocomplete="off"
                    required
                    placeholder="Copy & paste only"
                  />
                </div>

                <div className="mdl-input-bx">
                  <label>Date of Birth</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    autocomplete="off"
                    required
                    placeholder="Copy & paste only"
                  />
                </div>

                <button
                  type="submit"
                  className="custom-btn w-50 mt-3 mb-5"
                  data-toggle="modal"
                  data-target="#sentEmailModal"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <Iframe id="MyIframe"
              src="./file/sample.pdf"
              // src="https://docs.google.com/viewer?url=http://www.snee.com/xml/xslt/sample.doc&embedded=true"
              width="100%"
              height="795"
              frameborder="0"
              allow="autoplay"
              style={{ border: "none" }}
            ></Iframe>
          </div>
        </div>
      </div>

      <div
        className="modal fade custom-modal success-modal"
        id="sentEmailModal"
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
              <h3 className="modal-title text-center">Thank You!</h3>
              <p>Successfully Sent Document</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
