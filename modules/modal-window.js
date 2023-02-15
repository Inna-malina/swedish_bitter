//~ открываем модальное окно
(function () {
  let modal = document.querySelector('.modal-window__box');
  let closeModal = document.querySelector('.modal-close');
  let btnOrder = document.querySelector('.warranty-order__button');
  let form = document.querySelector('form');

  btnOrder.addEventListener('click', function () {
    modal.classList.remove('modal-disactive');
  });

  //~ закрываем модальное окно
  function toCloseModal() {
    modal.classList.add('modal-disactive');
    form.reset();
  }
  // закрытие по клику на крестик
  closeModal.addEventListener('click', toCloseModal);

  // закрытие по клику по прозрачному фону модального окна
  modal.addEventListener('click', function (evnt) {
    let action = evnt.target;
    if (action === modal) {
      toCloseModal();
    }
  });
}());