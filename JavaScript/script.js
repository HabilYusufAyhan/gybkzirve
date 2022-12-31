const text = document.querySelector('.kulupp')
const title = document.querySelector('.kuluptitle');
const zirveimg = document.querySelector('.zirveimg');
const text1 = document.querySelector('.zirvep');
const konusmacilarimiz = document.querySelector('.konusmacilarimizmain');
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
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function () {
          scroll(c, a, b, i);
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