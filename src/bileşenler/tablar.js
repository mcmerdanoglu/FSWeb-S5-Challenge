//import { NODE_SERVER_RESPONSE_TIME } from "msw/lib/types/context/delay";
import axios from "axios";
const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const topicDiv = document.createElement("div");
  topicDiv.classList.add("topics");

  konu.forEach((element) => {
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tab");
    tabDiv.textContent = element;
    topicDiv.appendChild(tabDiv);
  });

  return topicDiv;
};

/*const konular = [
  "Geçmiş",
  "Şimdi",
  "Gelecek",
  "GERÇEK",
  "hurafe",
  "gErÇeküßtÜ",
];

Tablar(konular);*/

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const addSecici = document.querySelector(secici);
  axios
    .get("http://localhost:5001/api/konular")

    .then((response) => {
      const tablar = Tablar(response.data.konular);
      addSecici.appendChild(tablar);
    });
};

export { Tablar, tabEkleyici };
