let popupOpen = document.querySelector('.hero__link');
let popupClose = document.querySelector('.learn__close'); 
let body = document.querySelector('body')

popupOpen.addEventListener('click', (e) => {
  body.classList.add('learn-active')
})
popupClose.addEventListener('click', (e) => {
  body.classList.remove('learn-active')
})