const startBtn = document.getElementById("start-btn");
const wordDisplay = document.getElementById("current-word");
const wordInput = document.getElementById("word-input");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const endMessage = document.getElementById("end-message");
const finalScore = document.getElementById("final-score");

// Örnek kelimeler
const kelimeler = ["klavye", "bilgisayar", "oyun", "javascript", "yazılım", "ekran", "internet", "kodlama", "tuş", "karakter", "kedİ","araba","elma","masa","kitap","telefon","kalem","defter","kuş","çorap","şemsiye","ayna","sandalye","balık","toprak","çanta","eldiven","televizyon","yatak","bilgisayar","merdiven","dolap","duvar","pencere","kapı","çiçek","perde","bardak","kaşık","çatal","bıçak","halı","kanepe","saat","ışık","tavan","tabak","su","kahve","çay","simit","peynir","zeytin","bal","reçel","meyve","sepet","uçurtma","boya","resim","kar","yağmur","güneş","rüzgar","bulut","deniz","göl","nehir","orman","dağ","kumsal","sahil","otobüs","tren","uçak","gemi","taksi","bisiklet","motor","yol","köprü","tünel","şehir","köy","kasaba","park","bahçe","oyun","oyuncak","bebek","lego","kule","kalemlik","kitaplık","raflar","karton","poşet","kavanoz","sabun","şampuan","diş","fırça","dişmacunu","ayna","lavabo","duş","bornoz","havlu","terlik","pijama","ceket","palto","etek","elbise","ayakkabı","bot","kazak","tişört","pantolon","şapka","atkı","bere","eller","yüz","göz","ağız","burun","kulak","saç","boyun","omuz","kol","dirsek","bilek","parmak","diz","ayak","topuk","parmaklar","dil","dişler","kalp","akciğer","mide","böbrek","kas","kemik","doktor","hemşire","hastane","ambulans","ilaç","serum","terazi","termometre","sıcaklık","hava","mevsim","yaz","kış","ilkbahar","sonbahar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi","pazar","sabah","öğle","akşam","gece","uyku","rüya","yemek","içecek","tatlı","pasta","kurabiye","dondurma","kek","baklava","süt","kola","limonata","portakal","elma","muz","armut","çilek","karpuz","kavun","ananas","üzüm","vişne","erik","ayva","domates","salatalık","marul","havuç","patates","soğan","lahana","ıspanak","pırasa","bezelye","fasulye","nohut","mercimek","pirinç","bulgur","makarna","yumurta","et","tavuk","balık","kıyma","sucuk","sosis","peynir","tereyağı","yoğurt","zeytinyağı","un","tuz","şeker","sirke","limon","baharat","karabiber","kekik","nane","pulbiber","sarımsak","sofra","tablo","çerçeve","fotoğraf","resim","sanat","müzik","nota","gitar","piyano","keman","flüt","şarkı","ses","dans","film","dizi","oyuncu","sahne","tiyatro","perde","alkış","kamera","senaryo","yönetmen","rol","sinema","gişe","bilet","koltuk","perde","salon"];

let skor = 0;
let zaman = 60;
let zamanlayici;

function rastgeleKelime() {
  const index = Math.floor(Math.random() * kelimeler.length);
  wordDisplay.textContent = kelimeler[index];
}

function oyunuBaslat() {
  skor = 0;
  zaman = 60;
  scoreDisplay.textContent = skor;
  timeDisplay.textContent = zaman;
  wordInput.disabled = false;
  wordInput.value = "";
  wordInput.focus();
  endMessage.style.display = "none";

  rastgeleKelime();

  zamanlayici = setInterval(() => {
    zaman--;
    timeDisplay.textContent = zaman;

    if (zaman === 0) {
      clearInterval(zamanlayici);
      oyunuBitir();
    }
  }, 1000);
}
const dogruSes = new Audio("correct.mp3.mp3");
const bitisSes = new Audio("end.mp3.mp3");

function oyunuBitir() {
  wordInput.disabled = true;
  endMessage.style.display = "block";
  finalScore.textContent = skor;
  bitisSes.play();
}

wordInput.addEventListener("input", () => {
  if (wordInput.value === wordDisplay.textContent) {
    skor++;
    scoreDisplay.textContent = skor;
    wordInput.value = "";
    rastgeleKelime();
    dogruSes.play();
  }
});



startBtn.addEventListener("click", oyunuBaslat);