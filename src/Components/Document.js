import React from "react";
import Navbar from "./Navbar";
import CloudComputing from "../assets/img/cloud-computing.png";

export default function Document() {
  const data = {
    firstUrl: "admin",
    secondUrl: "document",
    icon: "d-none",
    text: "Document",
  };
  document.title = "Referral - Document";
  return (
    <>
      <Navbar data={data} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 my-3">
            <button
              className="custom-btn"
              data-toggle="modal"
              data-target="#addNewDocumentModal"
            >
              Add New Document
            </button>
          </div>

          <div className="col-md-10">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th className="text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>04-06-2022</td>
                  <td>
                    Lorem_ipsum_consectetur_adipisicingelit_File_name_2022.pdf
                  </td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>04-06-2022</td>
                  <td>
                    Lorem_ipsum_consectetur_adipisicingelit_File_name_2022.pdf
                  </td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>04-06-2022</td>
                  <td>
                    Lorem_ipsum_consectetur_adipisicingelit_File_name_2022.pdf
                  </td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>04-06-2022</td>
                  <td>
                    Lorem_ipsum_consectetur_adipisicingelit_File_name_2022.pdf
                  </td>
                  <td className="text-center">
                    <button className="btn btn-del">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* <!-- Modal addNewDocumentModal --> */}

      <div
        className="modal fade custom-modal"
        id="addNewDocumentModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
          style={{ maxWidth: "600px" }}
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
              <h3 className="modal-title text-center">Add Document</h3>

              <section className="custom-form-sec">
                <div className="drag-and-drop-wrapp">
                  <div className="drop-zone">
                    <form
                      action="#"
                      name="form"
                      method="get"
                      className="formWrappFile"
                    >
                      <div className="file">
                        <div className="file__input" id="file__input">
                          <input
                            className="file__input--file"
                            id="customFile"
                            type="file"
                            multiple="multiple"
                            name="files[]"
                          />
                          <label
                            className="file__input--label"
                            for="customFile"
                            data-text-btn="Upload"
                          >
                            <div className="drop-zone__prompt">
                              <h3>Drag & Drop Files Here To Share</h3>
                              <p> PDF Files ONLY. less than 5 Mb each</p>
                              <div className="img">
                                <img
                                  src={CloudComputing}
                                  alt="Upload"
                                  disabled
                                />
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                      <div className="link-dv">
                        <button className="custom-btn">Select Files</button>
                        <button
                          type="submit"
                          className="custom-btn btnUpload d-none"
                        >
                          Upload
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
