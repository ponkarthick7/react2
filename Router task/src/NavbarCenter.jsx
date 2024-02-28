import React from "react";

import { Link } from "react-router-dom";

function NavbarCenter() {
  return (
    <>
{/*     // creating navbar compnents using Bootstrap and created path using react-Router-Dom // */}
      <nav className="navbar navbar-expand-lg border border-black bg-warning-subtle rounded-4 mt-3">
        <div className="container-fluid shadow border rounded-5   border-black">
          <div className="col-12">
            <ul className="nav d-flex  justify-content-center mt-2 mb-2">
              <li className=" nav-item">
                <Link
                  className="nav-link  bg-white border border-black rounded-2 m-2"
                  to="/"
                >
                  All
                </Link>
              </li>
              <li className=" nav-item">
                <Link
                  className="nav-link  bg-white border border-black rounded-2 m-2"
                  to="/Fullstackdevelopement"
                >
                  FULL STATCK DEVELOPEMENT
                </Link>
              </li>
              <li className=" nav-item">
                <Link
                  className="nav-link bg-white border border-black rounded-2 m-2"
                  to="/Cybersecurity"
                >
                  CYBER SECURITY
                </Link>
              </li>

              <li className=" nav-item bg-white border border-black rounded-2 m-2">
                <Link className="nav-link " to="/Datascience">
                  DATA SCIENCE
                </Link>
              </li>
              <li className=" nav-item bg-white border border-black rounded-2 m-2">
                <Link className="nav-link " to="/Career">
                  CAREER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarCenter;