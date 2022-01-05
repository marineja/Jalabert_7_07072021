import React from "react";

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Mentions légales</h6>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Politique en matière de cookies</h6>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Politique de confidentialité</h6>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h6 className="text-black">Conditions d'utilisation</h6>
              </div>
            </div>
          </div>
          <div className="text-center p-3 copyright-footer">
            © 2020 Copyright:<div className="text-dark">Groupomania</div>
          </div>
        </footer>
    )
}
export default Footer;