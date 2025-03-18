import React from "react";
import "./_navi.css";
import { Link } from "react-router-dom";

function InForm() {

  return (
    <>
      <div className="sideOpacity"></div>
      <div
        className="container z-1 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <div className="card-body">
              <p className="lead">
                Bu web sitesi Eskişehir Osmangazi Üniversitesi Hastanesinde
                anestezi alacak olan hastalar için hazırlanmıştır. Bu sitede
                bulunan bilgiler genel popülasyona yöneliktir. Anestezi
                yönetiminiz, tıbbi geçmişinize ve olacağınız ameliyatın türüne
                göre değişiklik gösterebilir. Tüm hastalar ameliyat öncesi
                kişisel risklerini ve anestezi yönetimini anestezi doktoruyla
                görüşerek öğrenebilecektir.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <Link
                to="/ameliyatöncesi"
                className="btn btn-success"
              >
                Anladım
              </Link>
              
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default InForm;
