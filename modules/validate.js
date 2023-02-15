//~ валидация формы
function Validate() {
  let regName = /^[a-zA-Zа-яА-ЯёЁ ,.'-]{3,20}$/;
  let myName = document.querySelector('.name').value;
  let tooltipName = document.querySelector('.name-tooltip');
  let validName = regName.test(myName);
  if (validName == false) {
    tooltipName.classList.remove('tooltip-disactive');
    tooltipName.classList.add('tooltip-active');
    return false;
  }

  let regSername = /^[a-zA-Zа-яА-ЯёЁ ,.'-]{3,20}$/;
  let mySername = document.querySelector('.sername').value;
  let tooltipSername = document.querySelector('.sername-tooltip');
  let validSername = regSername.test(mySername);
  if (validSername == false) {
    tooltipSername.classList.remove('tooltip-disactive');
    tooltipSername.classList.add('tooltip-active');
    return false;
  }

  let regPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
  let myPhone = document.querySelector('.user-phone').value;
  let tooltipPhone = document.querySelector('.phone-tooltip');
  let validPhone = regPhone.test(myPhone);
  if (validPhone == false) {
    tooltipPhone.classList.remove('tooltip-disactive');
    tooltipPhone.classList.add('tooltip-active');
    return false;
  }
  if (validPhone === true && validName === true) {
    toGetData();
    return false;
  }


}

//Закрытие тултипов при неверной валидации
let tooltips = document.querySelectorAll('.tooltip__box');
tooltips.forEach(function (tooltip) {
  tooltip.addEventListener('click', function () {
    tooltip.classList.remove('tooltip-active');
    tooltip.classList.add('tooltip-disactive');
  });
});

let form = document.querySelector('form');
let modalElements = document.querySelector('.modal-elements');
let modalBox = document.querySelector('.modal-window');
let preloader = document.querySelector('.preloader');

//отправка запроса на сервер
function toGetData() {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    //~ запускаем прелоадер
    preloader.classList.remove('preloader-none');
    let request = new XMLHttpRequest();
    request.open('GET', './thankyou.js');

    let formData = new FormData(form);
    request.send(formData);

    request.addEventListener('load', function () {

    });
  });

}

