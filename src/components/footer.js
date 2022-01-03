import React from "react";
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h5>Contact</h5>
            <h6 className="list-unstyled">
              <li>Email:****@ur.ac.rw</li>
              <li>Phone:079999333</li>
            </h6>
          </div>

          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} UR | All rights reserved |
            Designed by xxx
          </p>
        </div>
      </div>
    
  );
}

export default Footer;