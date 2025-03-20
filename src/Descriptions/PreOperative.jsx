import React from "react";
import su from "../Images/su.png";
import smoke from "../Images/sigara.png";
import ilac from "../Images/ilaç.png";
import hasta from "../Images/hasta.png";
import CollapseComponent from "./CollapseComponent";

function PreOperative() {
  const content = [
    {
      id: "collapse1",
      title: "Ameliyattan önce aç kalmalı mıyım?",
      content: (
        <>
          <li>
            Her türlü anestezi öncesinde oruç tutmak önemlidir. Anestezi
            öncesinde aç kalmazsanız midenizdeki yiyecek ve içeceklerin
            akciğerlerinize kaçma riski vardır. Bu durum beklenenden daha uzun
            süre hastanede kalmanızı veya yoğun bakımda takip edilmenizi
            gerektirebilir. Ameliyattan önce aç kalmazsanız ameliyat olmanız
            güvenli değildir.
          </li>
          <li>
            Ameliyattan 2 saat öncesine kadar berrak sıvılar (su, posasız meyve
            suyu, açık çay) içilebilir.
          </li>
          <li>
            Ameliyattan veya işlemden önceki 6 saate kadar hafif bir yemek veya
            süt alınabilir.
          </li>
          <li>
            Kızartma, yağlı yiyecekler, et içeren yiyecekler ameliyattan 8 saat
            önce kesilmelidir.
          </li>
        </>
      ),
      image: su,
    },
    {
      id: "collapse2",
      title: "Sigara içiyorum ne yapmalıyım?",
      content: (
        <>
          <li>
            Sigara içen hastalarda ameliyat sonrası solunum yetersizliği,
            akciğer enfeksiyonu ve yaranın iyileşmesinin gecikmesi riski
            artmıştır.
          </li>
          <li>
            Planlanan ameliyattan en az 4 hafta önce sigara bırakılmalıdır.
          </li>
          <li>
            Ancak ameliyatınıza daha az süre varsa, mümkün olan en kısa sürede
            sigara bırakılmalıdır.
          </li>
        </>
      ),
      image: smoke,
    },
    {
      id: "collapse3",
      title: "Düzenli Kullandığım İlaçlarımı Bırakmalı mıyım?",
      content: (
        <>
          <li>
            Anestezi Polikliniğinde muayene öncesinde düzenli kullandığınız
            ilaçlarınızı eksiksiz olarak öğrenmeli veya yanınızda
            getirmelisiniz. Anestezi doktorunuz sizi hangi ilaçları bırakmanız
            veya hangilerine devam etmeniz konusunda bilgilendirecektir.
          </li>
          <li>
            Devam etmeniz istenen ilaçlarınızı ameliyat sabahı dahil olmak üzere
            küçük bir yudum su ile içebilirsiniz.
          </li>
        </>
      ),
      image: ilac,
    },
    {
      id: "collapse4",
      title: "Üst Solunum Yolu Enfeksiyonum Var, Ameliyatıma Engel Midir?",
      content: (
        <>
          <li>
            Aktif veya geçirilmiş enfeksiyon var ise acil olmayan cerrahi
            ertelenir. Özellikle ciddi semptom varlığında (şiddetli öksürük,
            nefes darlığı, ateş) ertelenmelidir.
          </li>
          <li>
            Altta yatan hastalık varlığında elektif cerrahinin en az 2 hafta
            ertelenmesi gerekir. Çünkü ameliyat sonrası solunum sıkıntısı, yoğun
            bakım gerekliliği gibi istenmeyen durumlara neden olabilir.
            Enfeksiyonunuz ilerleyebilir.
          </li>
          <li>
            Yine de anestezi doktorunuz semptomlarınız ve ameliyatın aciliyetine
            göre bireysel olarak değerlendirecektir.
          </li>
        </>
      ),
      image: hasta,
    },
    {
      id: "collapse5",
      title: "Aşı Oldum, Ameliyatıma Engel Midir?",
      content: (
        <>
          <li>
            Yakın zamanda aşı olduysanız, doktorunuza bildiriniz. Cansız
            aşılarda 1 hafta, canlı aşılarda ise 2 hafta ameliyat
            ertelenmelidir. Aksi taktirde aşı etkinliği azalabilir.
          </li>
        </>
      ),
    },
    {
      id: "collapse6",
      title: "Emziriyorum, Ameliyat Sonrası Emzirebilir Miyim?",
      content: (
        <>
          <li>
            Anestezi uygulamalarından sonra anne sütünde tespit edilen anestezik
            madde miktarı ihmal edilebilir düzeydedir ve bebeğin sağlığını
            etkilemez. Bu yüzden anestezi sonrası uyanıp normale döndükten sonra
            bebeğinizi emzirmeye devam edebilirsiniz. Tam uyanıklık sağlanana
            kadar ameliyat öncesi sağılan süt verilebilir.
          </li>
        </>
      ),
    },
    {
      id: "collapse7",
      title: "Ameliyat Günü Regl Kanamam Olabilir, sorun teşkil eder mi?",
      content: (
        <>
          <li>
            Regl kanamaları anestezi veya cerrahi için herhangi bir sorun teşkil
            etmez.
          </li>
        </>
      ),
    },
    {
      id: "collapse8",
      title: "Gebelik Şüphem Var",
      content: (
        <>
          <li>
            Eğer gebelik şüpheniz var ise ya da regl kanamanız gecikti ise
            mutlaka anestezi doktorunuza bilgi veriniz.
          </li>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="container mt-5">
        {content.map((card) => (
          <CollapseComponent
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
}

export default PreOperative;
