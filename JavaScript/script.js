const text = document.querySelector(".kulupp");
const title = document.querySelector(".kuluptitle");
const zirveimg = document.querySelector(".zirveimg");
const text1 = document.querySelector(".zirvep");
const konusmacilarimiz = document.querySelector(".konusmacilarimizmain");
const remaining = document.querySelector(".countdowndivmain");
const kulupimg1 = document.querySelector('.kulupimg1');
const kulupimg2 = document.querySelector('.kulupimg2');
var typing = new Typed(text, {
  strings: [
    
    "Erzincan Binali Yıldırım Üniversitesi Mühendislik ve Mimarlık Fakültesi Bünyesinde Bulunan Öğrenciler Tarafından 2015 Yılında Kurulmuş Olan Genç ve Yenilikçi Beyinler Kulübümüz kurulduğu günden bugüne düzenlediği ve katıldığı çeşitli seminer, organizasyon, panel, konferans ve etkinliklerle öğrencilere yol göstermiştir. Genç ve Yenilikçi Beyinler Kulübümüz öğrencileri sıkı bir başarı testinden geçirip başarılarını sertifikayla ödüllendirerek öğrencilerin sektörde yer bulma hayallerini gerçekleştirmede yardımcı olmuş ve deneyim kazanmalarında öncü olmuştur.",
    "Erzincan Binali Yıldırım Üniversitesi Mühendislik ve Mimarlık Fakültesi Bünyesinde Bulunan Öğrenciler Tarafından 2015 Yılında Kurulmuş Olan Genç ve Yenilikçi Beyinler Kulübümüz kurulduğu günden bugüne düzenlediği ve katıldığı çeşitli seminer, organizasyon, panel, konferans ve etkinliklerle öğrencilere yol göstermiştir. Genç ve Yenilikçi Beyinler Kulübümüz öğrencileri sıkı bir başarı testinden geçirip başarılarını sertifikayla ödüllendirerek öğrencilerin sektörde yer bulma hayallerini gerçekleştirmede yardımcı olmuş ve deneyim kazanmalarında öncü olmuştur.", 
    "Erzincan Binali Yıldırım Üniversitesi Mühendislik ve Mimarlık Fakültesi Bünyesinde Bulunan Öğrenciler Tarafından 2015 Yılında Kurulmuş Olan Genç ve Yenilikçi Beyinler Kulübümüz kurulduğu günden bugüne düzenlediği ve katıldığı çeşitli seminer, organizasyon, panel, konferans ve etkinliklerle öğrencilere yol göstermiştir. Genç ve Yenilikçi Beyinler Kulübümüz öğrencileri sıkı bir başarı testinden geçirip başarılarını sertifikayla ödüllendirerek öğrencilerin sektörde yer bulma hayallerini gerçekleştirmede yardımcı olmuş ve deneyim kazanmalarında öncü olmuştur.",
    "Erzincan Binali Yıldırım Üniversitesi Mühendislik ve Mimarlık Fakültesi Bünyesinde Bulunan Öğrenciler Tarafından 2015 Yılında Kurulmuş Olan Genç ve Yenilikçi Beyinler Kulübümüz kurulduğu günden bugüne düzenlediği ve katıldığı çeşitli seminer, organizasyon, panel, konferans ve etkinliklerle öğrencilere yol göstermiştir. Genç ve Yenilikçi Beyinler Kulübümüz öğrencileri sıkı bir başarı testinden geçirip başarılarını sertifikayla ödüllendirerek öğrencilerin sektörde yer bulma hayallerini gerçekleştirmede yardımcı olmuş ve deneyim kazanmalarında öncü olmuştur.", 
    "Biz GDSC Erzincan olarak; üniversitemizin yetenekli, meraklı ve kendisini geliştirmek isteyen öğrencilerini bir çatı altında toplayarak çeşitli alanlarda ve konularda workshop, seminer ve eğitimler yardımıyla öğrencilere kendilerini geliştirme fırsatı sunmayı, çeşitli hackathon ve yarışmalarla problem tespit etme, çözüm üretme ve çözümleri hayata geçirmelerine yardımcı olmayı ve \"Kariyer-Teknoloji\" konuşmaları ile ilerlemek istedikleri alanı belirlemelerine sağlamayı hedefliyoruz. ",
    "Biz GDSC Erzincan olarak; üniversitemizin yetenekli, meraklı ve kendisini geliştirmek isteyen öğrencilerini bir çatı altında toplayarak çeşitli alanlarda ve konularda workshop, seminer ve eğitimler yardımıyla öğrencilere kendilerini geliştirme fırsatı sunmayı, çeşitli hackathon ve yarışmalarla problem tespit etme, çözüm üretme ve çözümleri hayata geçirmelerine yardımcı olmayı ve \"Kariyer-Teknoloji\" konuşmaları ile ilerlemek istedikleri alanı belirlemelerine sağlamayı hedefliyoruz. ",
    "Biz GDSC Erzincan olarak; üniversitemizin yetenekli, meraklı ve kendisini geliştirmek isteyen öğrencilerini bir çatı altında toplayarak çeşitli alanlarda ve konularda workshop, seminer ve eğitimler yardımıyla öğrencilere kendilerini geliştirme fırsatı sunmayı, çeşitli hackathon ve yarışmalarla problem tespit etme, çözüm üretme ve çözümleri hayata geçirmelerine yardımcı olmayı ve \"Kariyer-Teknoloji\" konuşmaları ile ilerlemek istedikleri alanı belirlemelerine sağlamayı hedefliyoruz. ",
    "Biz GDSC Erzincan olarak; üniversitemizin yetenekli, meraklı ve kendisini geliştirmek isteyen öğrencilerini bir çatı altında toplayarak çeşitli alanlarda ve konularda workshop, seminer ve eğitimler yardımıyla öğrencilere kendilerini geliştirme fırsatı sunmayı, çeşitli hackathon ve yarışmalarla problem tespit etme, çözüm üretme ve çözümleri hayata geçirmelerine yardımcı olmayı ve \"Kariyer-Teknoloji\" konuşmaları ile ilerlemek istedikleri alanı belirlemelerine sağlamayı hedefliyoruz. "

  ],
  typeSpeed: 20,
  backSpeed: 10,
  loop: true,
});

function textkontrol() {
  if (text.textContent == "E") {
    kulupimg1.style.opacity = '1';
    kulupimg2.style.opacity = '0.6'
  }
  if (text.textContent == "B") {
    kulupimg1.style.opacity = '0.6';
    kulupimg2.style.opacity = '1'
  }
}
setInterval(textkontrol,100);
var typing = new Typed(text1, {
  strings: [
    
    "GYBK Bilişim Zirvesi, bu sektördeki yazılımcılar, bilişimciler, girişimciler ve sektörün önde gelenleri arasındaki iletişim ve etkileşimi artırmak amacıyla biz öğrencilerin bu yoldaki inancına, başarısına ve kariyerine destek olmayı amaçlayan mesleki ve sosyal bir zirvedir. Bu sene zirvemizde Mobil Geliştirme, Web Geliştirme, Veri Bilimi vb. daha birçok konuyu öğrencilerimizle buluşturarak kariyer hedeflerine ulaştırmak için bir aracı olmayı kendimize görev edindik. Zirve sonunda öğrencilerimizi sektöre karşı daha nitelikli bir şekilde uğurlayacağız."
    
  ],
  typeSpeed: 10,
  backSpeed: 40,
  loop: false,
});

function opasite() {
  title.style.opacity = "1";
}
setTimeout(opasite, 500);
var sayac = 1;
function zirveimgchange() {
  if (sayac < 10) {
    sayac++;

    zirveimg.src = "/images/zirveimg/" + sayac + ".jpg";
    if (sayac == 10) {
      sayac = 0;
    }
  }
}
setInterval(zirveimgchange, 5000);

// kaydırma
window.smoothScroll = function (target) {
  var scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;

    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function (c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function () {
      scroll(c, a, b - 4, i);
    }, 2);
  };
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  konusmacilarimiz.style.background = "rgba(0, 255, 37,0.25)";
  setTimeout(renk, 500);
  var i;
  var x = document.getElementsByClassName("konusmacilarimizimgtext");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
}

function oto() {
  if (saniyesayac == 5) {
    slideIndex++;
    showDivs(slideIndex);
    saniyesayac = 0;
  }
}
var saniyesayac = 0;
function sayacfunc() {
  saniyesayac++;
}
setInterval(sayacfunc, 1000);
setInterval(oto, 1000);
const konusmacibuttonprevious = document.querySelector(".leftbuttonkonusmaci");
const konusmacibuttonnext = document.querySelector(".rightbuttonkonusmaci");
konusmacibuttonprevious.onclick = function () {
  saniyesayac = 0;
  slideIndex--;
  showDivs(slideIndex);
};
konusmacibuttonnext.onclick = function () {
  saniyesayac = 0;
  slideIndex++;
  showDivs(slideIndex);
};

function renk() {
  konusmacilarimiz.style.background = "rgba(255, 255, 255, 0.25)";
}

const saatE = document.querySelector(".saat");
const dakikaE = document.querySelector(".dakika");
const saniyeE = document.querySelector(".saniye");
const gunE = document.querySelector(".gun");
const yeniyil = "20 March 2023";
function gerisayim() {
  const yeniyilzaman = new Date(yeniyil);
  const suan = new Date();
  var kontrolgun = gunE.textContent;
  var kontrolsaat = saatE.textContent;
  var kontroldakika = dakikaE.textContent;
  var kontrolsaniye = saniyeE.textContent;
  const kalansaniye = (yeniyilzaman - suan) / 1000 + 36000;
  const gun = Math.floor(kalansaniye / 3600 / 24);
  const saat = Math.floor(kalansaniye / 3600) % 24;
  const dakika = Math.floor(kalansaniye / 60) % 60;
  const saniye = Math.floor(kalansaniye) % 60;

  if (kontrolgun != gun) {
    gunE.style.color = "rgba(0, 255, 37)";
    setTimeout(color2, 500);
  }
  if (kontrolsaat != saat) {
    saatE.style.color = "rgba(0, 255, 37)";
    setTimeout(color3, 500);
  }
  if (kontroldakika != dakika) {
    dakikaE.style.color = "rgba(0, 255, 37)";
    setTimeout(color4, 500);
  }
  if (kontrolsaniye != saniye) {
    saniyeE.style.color = "rgba(0, 255, 37)";
    setTimeout(color5, 500);
  }

  gunE.innerHTML = gun;
  saatE.innerHTML = kontrol(saat);
  dakikaE.innerHTML = kontrol(dakika);
  saniyeE.innerHTML = kontrol(saniye);
}
setInterval(gerisayim, 1000);
function kontrol(kontrol) {
  return kontrol < 10 ? `0${kontrol}` : kontrol;
}

function color2() {
  gunE.style.color = "rgba(255, 255, 255,1)";
}
function color3() {
  saatE.style.color = "rgba(255, 255, 255,1)";
}
function color4() {
  dakikaE.style.color = "rgba(255, 255, 255,1)";
}
function color5() {
  saniyeE.style.color = "rgba(255, 255, 255,1)";
}

const gunbutton1 = document.querySelector(".gun1buton");
const gunbutton2 = document.querySelector(".gun2buton");
const guntext = document.querySelector(".guns h2");
const butondiv = document.querySelector(".butondiv");
gunbutton1.onclick = function () {
  gunbutton1.style.transform = "translateY(-10px)";
  gunbutton2.style.transform = "translateY(0px)";
  guntext.textContent = "1.Gün";
};
gunbutton2.onclick = function () {
  gunbutton2.style.transform = "translateY(-10px)";
  gunbutton1.style.transform = "translateY(0px)";
  guntext.textContent = "2.Gün";
};
