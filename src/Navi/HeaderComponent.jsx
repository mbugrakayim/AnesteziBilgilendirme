import React from "react";
import { Link } from "react-router-dom";

function HeaderComponent() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md mt-4">
          <div className="container-fluid justify-content-center">
            <Link to="/ameliyatöncesi" className="btn btn-success mx-2 btn-lg">
              Ameliyat öncesi
            </Link>
            <Link to="/ameliyatgünü" className="btn btn-success mx-2 btn-lg">
              Ameliyat günü
            </Link>
            <Link to="/ameliyatsonrası" className="btn btn-success mx-2 btn-lg">
              Ameliyat sonrası
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderComponent;
