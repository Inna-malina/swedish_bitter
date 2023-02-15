// ^ Добавляем на картинку кружки проблем
let symtomsList = document.querySelector('.symptoms-list');
let circlesBoxes = document.querySelectorAll('.symptoms-circle');
let btnSymptoms = document.querySelector('.symptoms-button');

symtomsList.addEventListener('click', function (event) {
  let act = event.target;
  console.log(act);

  circlesBoxes.forEach(function (circle) {
    if (act.dataset.symptoms == circle.dataset.symptoms) {
      circle.classList.remove('circle-hidden');
    }
  });
});

// ^ Очищаем картинку от кружков
btnSymptoms.addEventListener('click', function(){
  circlesBoxes.forEach(function (circle){
    circle.classList.add('circle-hidden');
  });
});
