const text = document.querySelector('.kulupp')
const title = document.querySelector('.kuluptitle');
const zirveimg = document.querySelector('.zirveimg');
const text1 = document.querySelector('.zirvep');
const konusmacilarimiz = document.querySelector('.konusmacilarimizmain');
const remaining = document.querySelector('.countdowndivmain')
var typing=new Typed(text, {
    strings: ["","Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam tenetur error quibusdam architecto! Consequuntur in quia a ipsa nemo error soluta expedita provident hic labore accusantium nobis, impedit dolorum"],
    typeSpeed: 10,
    backSpeed: 40,
    loop: false,
  });
  var typing=new Typed(text1, {
    strings: ["","Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam tenetur error quibusdam architecto! Consequuntur in quia a ipsa nemo error soluta expedita provident hic labore accusantium nobis, impedit dolorum"],
    typeSpeed: 10,
    backSpeed: 40,
    loop: false,
  });


function opasite(){
    title.style.opacity = '1';
}
setTimeout(opasite,500);
var sayac = 1;
function zirveimgchange(){
    if (sayac < 10) {
      sayac++;
      
      zirveimg.src ="/images/zirveimg/"+ sayac + ".jpg";
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
  } while (target = target.offsetParent);

  scroll = function (c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + (b - a) /30 * i;
      setTimeout(function () {
          scroll(c, a, b-4, i);
      }, 2);
  }
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  konusmacilarimiz.style.background = 'rgba(0, 255, 37,0.25)';
  setTimeout(renk,500);
  var i;
  var x = document.getElementsByClassName("konusmacilarimizimgtext");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}
function oto(){
  slideIndex++;
  showDivs(slideIndex);
}
setInterval(oto,5000);

function renk(){
  konusmacilarimiz.style.background = 'rgba(255, 255, 255, 0.25)';
}

const saatE = document.querySelector('.saat');
const dakikaE = document.querySelector('.dakika');
const saniyeE = document.querySelector('.saniye');
const gunE = document.querySelector('.gun');
const yeniyil = "15 March 2023";
function gerisayim() {
  
  const yeniyilzaman = new Date(yeniyil);
  const suan = new Date();
  var kontrolgun = gunE.textContent;
  var kontrolsaat = saatE.textContent;
  var kontroldakika = dakikaE.textContent;
  var kontrolsaniye = saniyeE.textContent;
  const kalansaniye = ((yeniyilzaman - suan) / 1000)+36000;
  const gun = Math.floor(kalansaniye / 3600 / 24);
  const saat = Math.floor(kalansaniye / 3600) % 24;
  const dakika = Math.floor(kalansaniye / 60) % 60;
  const saniye = Math.floor(kalansaniye) % 60;

    
 
  if (kontrolgun != gun) {
    gunE.style.color = 'rgba(0, 255, 37)';
    setTimeout(color2 , 500);
  }
  if (kontrolsaat != saat) {
    saatE.style.color = 'rgba(0, 255, 37)';
    setTimeout(color3 , 500);
  }
  if (kontroldakika != dakika) {
    dakikaE.style.color = 'rgba(0, 255, 37)';
    setTimeout(color4 , 500);
  }
  if (kontrolsaniye != saniye) {
    saniyeE.style.color = 'rgba(0, 255, 37)';
    setTimeout(color5 , 500);
  }

  gunE.innerHTML = gun;
  saatE.innerHTML = kontrol(saat);
  dakikaE.innerHTML = kontrol(dakika);
  saniyeE.innerHTML = kontrol(saniye);
}
setInterval(gerisayim,1000);
function kontrol(kontrol) {
  return kontrol < 10 ? `0${kontrol}` : kontrol;
}

function color2(){
  gunE.style.color = 'rgba(255, 255, 255,1)';
}
function color3(){
  saatE.style.color = 'rgba(255, 255, 255,1)';
}
function color4(){
  dakikaE.style.color = 'rgba(255, 255, 255,1)';
}
function color5(){
  saniyeE.style.color = 'rgba(255, 255, 255,1)';
}