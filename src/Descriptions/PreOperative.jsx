import React from "react";
import { useState } from "react";
import su from "../Images/su.png";
import smoke from "../Images/sigara.png";
import ilac from "../Images/ilaç.png";
import hasta from "../Images/hasta.png";

 function PreOperative() {
  const [collapseState, setCollapseState] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
    collapse4: false,
    collapse5: false,
    collapse6: false,
    collapse7: false,
    collapse8: false,
  });

  const toggleCollapse = (collapseId) => {
    setCollapseState((prev) => ({
      ...prev,
      [collapseId]: !prev[collapseId],
    }));
  };
  return (
    <>
      <div className="container mt-5">
        <div className="card w-100 mt-3 ">
          <div
            className="card-body"
            onClick={() => toggleCollapse("collapse1")}
          >
            <button className="btn" >
              Ameliyattan önce aç kalmalı mıyım?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse1 ? "show" : ""}`}>
            <div className="card-body">
              <ul>
                <li>
                  Her türlü anestezi öncesinde oruç tutmak önemlidir. Anestezi
                  öncesinde aç kalmazsanız midenizdeki yiyecek ve içeceklerin
                  akciğerlerinize kaçma riski vardır. Bu durum beklenenden daha
                  uzun süre hastanede kalmanızı veya yoğun bakımda takip
                  edilmenizi gerektirebilir. Ameliyattan önce aç kalmazsanız
                  ameliyat olmanız güvenli değildir
                </li>
                <li>
                  Ameliyattan 2 saat öncesine kadar berrak sıvılar (su, posasız
                  meyve suyu, açık çay) içilebilir.
                </li>
                <li>
                  Ameliyattan veya işlemden önceki 6 saate kadar hafif bir yemek
                  veya süt alınabilir.
                </li>
                <li>
                  Kızartma, yağlı yiyecekler, et içeren yiyecekler ameliyattan 8
                  saat önce kesilmelidir.
                </li>
              </ul>

              <div className="text-center">
                <img src={su} alt="" className="img-thumbnail" />
              </div>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse2")}>
              Sigara içiyorum ne yapmalıyım?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse2 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Sigara içen hastalarda ameliyat sonrası solunum yetersizliği,
                  akciğer enfeksiyonu ve yaranın iyileşmesinin gecikmesi riski
                  artmıştır.
                </li>
                <li>
                  Planlanan ameliyattan en az 4 hafta önce sigara
                  bırakılmalıdır.
                </li>
                <li>
                  Ancak ameliyatınıza daha az süre varsa, mümkün olan en kısa
                  sürede sigara bırakılmalıdır.
                </li>
              </ul>
              <div className="text-center">
                <img src={smoke} alt="" className="img-thumbnail" />
              </div>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse3")}>
              Düzenli Kullandığım İlaçlarımı Bırakmalı mıyım?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse3 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Anestezi Polikliniğinde muayene öncesinde düzenli
                  kullandığınız ilaçlarınızı eksiksiz olarak öğrenmeli veya
                  yanınızda getirmelisiniz. Anestezi doktorunuz sizi hangi
                  ilaçları bırakmanız veya hangilerine devam etmeniz konusunda
                  bilgilendirecektir.
                </li>
                <li>
                  Devam etmeniz istenen ilaçlarınızı ameliyat sabahı dahil olmak
                  üzere küçük bir yudum su ile içebilirsiniz.
                </li>
              </ul>
              <div className="text-center">
                <img src={ilac} alt="" className="img-thumbnail" />
              </div>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse4")}>
              Üst Solunum Yolu Enfeksiyonum Var, Ameliyatıma Engel Midir?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse4 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Aktif veya geçirilmiş enfeksiyon var ise acil olmayan cerrahi
                  ertelenir. Özellikle ciddi semptom varlığında (şiddetli
                  öksürük,nefes darlığı,ateş.) ertelenmelidir.
                </li>
                <li>
                  Altta yatan hastalık varlığında elektif cerrahinin en az 2
                  hafta ertelenmesi gerekir. Çünkü ameliyat sonrası solunum
                  sıkıntısı, yoğun bakım gerekliliği gibi istenmeyen durumlara
                  neden olabilir. Enfeksiyonunuz ilerleyebilir.
                </li>
                <li>
                  Yine de anestezi doktorunuz semptomlarınız ve ameliyatın
                  aciliyetine göre bireysel olarak değerlendirecektir.
                </li>
              </ul>
              <div className="text-center">
                <img src={hasta} alt="" className="img-thumbnail" />
              </div>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse5")}>
              Aşı Oldum, Ameliyatıma Engel Midir?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse5 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Yakın zamanda aşı olduysanız, doktorunuza bildiriniz. Cansız
                  aşılarda 1 hafta, canlı aşılarda ise 2 hafta ameliyat
                  ertelenmelidir. Aksi taktirde aşı etkinliği azalabilir.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse6")}>
              Emziriyorum, Ameliyat Sonrası Emzirebilir Miyim?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse6 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Anestezi uygulamalarından sonra anne sütünde tespit edilen
                  anestezik madde miktarı ihmal edilebilir düzeydedir ve bebeğin
                  sağlığını etkilemez. Bu yüzden anestezi sonrası uyanıp normale
                  döndükten sonra bebeğinizi emzirmeye devam edebilirsiniz. Tam
                  uyanıklık sağlanana kadar ameliyat öncesi sağılan süt
                  verilebilir.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse7")}>
              Ameliyat Günü Regl Kanamam Olabilir, sorun teşkil eder mi?
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse7 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Regl kanamaları anestezi veya cerrahi için herhangi bir sorun
                  teşkil etmez.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card w-100 mt-3">
          <div className="card-body">
            <button className="btn" onClick={() => toggleCollapse("collapse8")}>
              Gebelik Şüphem Var
            </button>
          </div>
          <div className={`collapse ${collapseState.collapse8 ? "show" : ""}`}>
            <div className="card-body">
              <ul className="ml-5">
                <li>
                  Eğer gebelik şüpheniz var ise ya da regl kanamanız gecikti ise
                  mutlaka anestezi doktorunuza bilgi veriniz.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreOperative;
