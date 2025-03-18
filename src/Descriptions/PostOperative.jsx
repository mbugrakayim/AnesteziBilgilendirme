import React from "react";

export default function PostOperative() {
  return (
    <>
      <div className="container mt-5">
        <h2>
          <u>Ameliyat Sonrası Dönem</u>
        </h2>
        <div className="card w-100 mt-5">
          <div className="card-body">
            <h4>Ameliyat Sonrası Ağrı</h4>
          </div>
          <div>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  <p className="lead">
                    Ameliyat sonrası ağrınız olmaması için anestezistiniz
                    tarafından uygun ağrı kesici uygulanacaktır. Fakat anestezi
                    sonrası ağızda ve boğazda kuruluk ve hafif ağrı olması
                    normaldir. Eğer şiddetli ağrınız olursa hemşirenize bilgi
                    verebilirsiniz.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card w-100 mt-5">
          <div className="card-body">
            <h4> Ameliyat Sonrası Bulantı-Kusma</h4>
          </div>
          <div>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  <p className="lead">
                    Ameliyat sonrası bulantı kusma istenmeyen bir durumdur. Daha
                    önceki ameliyatınızda bulantı-kusmanız oldu ise, taşıt
                    tutmanız oluyor ise, kadın cinsiyette iseniz ve ameliyat
                    süreniz uzun ise bulantı kusma riskiniz artar. Olmaması için
                    uygun ilaç ameliyat sırasında yapılacaktır. Fakat bulantı
                    kusmanız mevcut ise, hemşirenize bilgi veriniz.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
