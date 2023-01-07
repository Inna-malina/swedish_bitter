let bunner = document.querySelector('.bunner-carousel');
let bunnerUnder = document.querySelector('.bunner-carousel-under');
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');


let i = 1;
arrowLeft.addEventListener('click', function(){
  i++;  
  if(i>7){
    i=1;
  }
  bunner.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(46, 46, 46, 0.5)),url("./assets/images/bunner/bunner-${i}.jpg")`;

});

arrowRight.addEventListener('click', function(){
  i--;  
  if(i<1){
    i=7;
  }
  bunner.style.background = `linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(46, 46, 46, 0.5)),url("./assets/images/bunner/bunner-${i}.jpg")`;
});

