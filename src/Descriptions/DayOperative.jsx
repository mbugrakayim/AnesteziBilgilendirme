import React from "react";
import tufi from "../Images/tufi.png";
import koridor from "../Images/koridor.png";
import hasta2 from "../Images/hasta2.png";
import hasta3 from "../Images/hasta3.png";
import dmryl1 from "../Images/dmryl1.png";
import dmryl2 from "../Images/dmryl2.png";
import izle from "../Images/izle.png";
import uyandırma from "../Images/uyandırma.png";

export default function DayOperative() {
  return (
    <>
      <div className="container mt-5">
        <h2>
          <u>Ameliyat Günü</u>
        </h2>

        <div className="card w-100 mt-5">
          <div className="card-body">
            <p className="lead">
              Genel anestezi çok yaygın kullanılan bir yöntemdir. Anestezistler
              bu işlem için uzun yıllar eğitim almış kişilerdir.
            </p>

            <p className="lead">
              Ameliyat günü servis odanızda ameliyat için hemşireniz tarafından
              ameliyat önlüğü ve bone verilecektir. Hazır olduğunuzda
              ameliyathaneye götürülmek üzere personel tarafından sedye ile
              transferiniz sağlanacaktır.
            </p>
            <div className="text-center">
              <img
                src={koridor}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>
            <p className="lead">
              Ameliyathane odasının önünde bir süre bekletilmeniz gerekebilir.
              Ameliyathane odası sizin için hazır olduğunda içeri alınacaksınız.
            </p>
            <p className="lead">
              Burada doktorunuz ve hemşireniz ile güvenlik prosedürlerini içeren
              bir görüşme daha yapacaksınız.
            </p>
            <div className="text-center">
              <img
                src={tufi}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>

            <p className="lead">
              Uyutulmadan önce, kalp hızınızı, oksijen değerlerinizi ve
              tansiyonunuzu görmek için çeşitli kablolar yerleştirilecektir.
            </p>
            <div className="text-center">
              <img
                src={hasta2}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>
            <p className="lead">
              Ardından oksijen maskesiyle nefes almanız istenecektir. Anestezi
              genellikle damar yolu da denilen intravenöz hattınızdan uygulanan
              ilaçlar ile verilir. Eğer damar yolunuz yok ise damar yolu
              açılacaktır.
            </p>
            <div className="text-center">
              <img
                src={hasta3}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>
            <div className="text-center mt-3">
              <img
                src={dmryl1}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
              <img
                src={dmryl2}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>
            <p className="lead">
              Bu aşamada tekrardan doktorunuz tarafından bilgilendirileceksiniz.
              Sizin uyuduğunuza emin olduktan sonra sonra solunum tüpü soluk
              borunuza yerleştirilecektir. Ardından ameliyatınızın büyüklüğü ve
              uzunluğuna bağlı olarak gerekli damar yolları veya diğer
              girişimler yapılabilir.
            </p>
            <p className="lead">
              Ameliyatınız boyunca anestezistiniz tarafından bütün yaşamsal
              değerleriniz yakından izlenecek ve gerekli müdahaleler
              yapılacaktır
            </p>
            <div className="text-center">
              <img
                src={izle}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>
            <p className="lead">
              Ameliyatınız bittiğinde yine aynı ekip tarafından uyandırılacak ve
              ayılma ünitesi adı verilen odaya götürüleceksiniz. Burada bir süre
              gözlem altında tutulacak ve kendinize gelmeniz beklenecek ve
              ardından ameliyathane personeli tarafından odanıza
              götürüleceksiniz.
            </p>
            <div className="text-center">
              <img
                src={uyandırma}
                alt=""
                style={{ maxWidth: "50%", height: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
