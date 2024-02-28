import React from 'react'

function Card() {

  return (
    <div className="container">
      <div className="row  justify-content-center align-items-center g-5 mt-5">
        <div className="col shadow d-flex justify-content-center m-3 py-4">
          <div className="card " style={{ width: "20rem" }}>
            <div className="card-body">
              <div className="cardheader text-center">
                <h6 className="text-muted">free</h6>
                <h2>$0/month</h2>
              </div>
              <hr />
              <p className="card-text ">
                <ul>
                  <li>
                    <i className="bi bi-check"></i>single User
                  </li>
                  <li>
                    <i className="bi bi-check"></i>50GB Storage
                  </li>
                  <li>
                  <i className="bi bi-check"></i>Unlimitd Public Projects
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Community Access
                  </li>
                  <li className="text-muted opacity-50">
                    <i className="bi bi-x"></i>Unlimited Private Projects
                  </li>
                  <li className="text-muted opacity-50">
                    <i className="bi bi-x"></i>Dedicated Phone Support
                  </li>
                  <li className="tetx-muted opacity-50">
                    <i className="bi bi-x"></i>Free Subdomain
                  </li>
                  <li className="text-muted opacity-50">
                    <i className="bi bi-x"></i>Monthly Status Reports
                  </li>
                </ul>
              </p>
              <div className="cardfooter text-center">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ width: "18rem" }}
                >
                  click here
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---Creating plus Tier-- */}
        <div className="col shadow d-flex justify-content-center m-3 py-4">
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body">
              <div className="cardheader text-center">
                <h6 className="text-muted">plus</h6>
                <h2>$9/month</h2>
              </div>
              <hr />
              <p className="card-text">
                <ul>
                  <li>
                    <i className="bi bi-check"></i>single User
                  </li>
                  <li>
                    <i className="bi bi-check"></i>50GB Storage
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Unlimited Public Projects
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Community Access
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Unlimited Private Projects
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Dedicated Phone Support
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Free Subdomain
                  </li>
                  <li className="text-muted opacity-50">
                    <i className="bi bi-x"></i>Monthly Status Reports
                  </li>
                </ul>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ width: "18rem" }}
              >
                click here
              </a>
            </div>
          </div>
        </div>
        {/* ---Creating pro Tier-- */}
        <div className="col shadow d-flex justify-content-center m-3 py-4">
          <div className="card " style={{ width: "20rem" }}>
            <div className="card-body">
              <div className="cardheader text-center">
                <h6 className="text-muted">pro</h6>
                <h2>$49/month</h2>
              </div>
              <hr />
              <p className="card-text">
                <ul>
                  <li>
                    <i className="bi bi-check"></i>single User
                  </li>
                  <li>
                    <i className="bi bi-check"></i>50GB Storage
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Unlimited Public Projects
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Community Access
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Unlimited Private Projects
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Dedicated Phone Support
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Free Subdomain
                  </li>
                  <li>
                    <i className="bi bi-check"></i>Monthly Status Reports
                  </li>
                </ul>
              </p>
              <a
                href="#"
                className="btn btn-primary"
                style={{ width: "18rem" }}
              >
                click here
              </a>
            </div>
          </div>
        </div>
        {/*column */}
      </div>
      </div>
    
  );
}

export default Card