//~ открываем модальное окно
(function () {
  let modal = document.querySelector('.modal-window__box');
  let closeModal = document.querySelector('.modal-close');
  let btnsOrder = document.querySelectorAll('.button-order');
  let form = document.querySelector('form');
  let modalOrder = document.querySelector('.modal-header-order');

  btnsOrder.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modal.classList.remove('modal-disactive');
    });
  });

  //~ закрываем модальное окно
  function toCloseModal() {
    modal.classList.add('modal-disactive');
    form.reset();
    form.style.display = "block";
    modalOrder.classList.add('modal-disactive');
    modalOrder.classList.remove('active-order');
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