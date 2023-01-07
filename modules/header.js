let header = document.querySelector('.black');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 500){
    header.classList.add('black-active');
  }
  else{
    header.classList.remove('black-active');
  }
});