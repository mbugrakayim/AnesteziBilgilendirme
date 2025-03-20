import React from "react";

function PostOperative() {
  const content = [
    {
      id: 1,
      title: "Ameliyat Sonrası Ağrı",
      content: (
        <>
          <li>
            Ameliyat sonrası ağrınız olmaması için anestezistiniz tarafından
            uygun ağrı kesici uygulanacaktır. Fakat anestezi sonrası ağızda ve
            boğazda kuruluk ve hafif ağrı olması normaldir. Eğer şiddetli
            ağrınız olursa hemşirenize bilgi verebilirsiniz.
          </li>
        </>
      ),
    },
    {
      id: 2,
      title: "Ameliyat Sonrası Bulantı-Kusma",
      content: (
        <>
          <li>
            Ameliyat sonrası bulantı kusma istenmeyen bir durumdur. Daha önceki
            ameliyatınızda bulantı-kusmanız oldu ise, taşıt tutmanız oluyor ise,
            kadın cinsiyette iseniz ve ameliyat süreniz uzun ise bulantı kusma
            riskiniz artar. Olmaması için uygun ilaç ameliyat sırasında
            yapılacaktır. Fakat bulantı kusmanız mevcut ise, hemşirenize bilgi
            veriniz.
          </li>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <h2>
          <u>Ameliyat Sonrası Dönem</u>
        </h2>
        {content.map((element) => (
         
            <div className="card w-100 mt-5" key={element.id}>
              <div className="card-body">
                <strong className="h4">{element.title}</strong>
              </div>
              <div>
                <div className="card-body">
                  <ul className="lead">
                    {element.content}
                  </ul>
                </div>
              </div>
            </div>
          
        ))}
      </div>
    </>
  );
}
export default PostOperative;
