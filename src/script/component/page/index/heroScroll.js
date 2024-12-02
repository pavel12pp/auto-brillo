let scrollButton = document.querySelector('.hero__scroll');
scrollButton.addEventListener('click', (e) => {
  console.log(window.scrollY == 0)
  if (window.scrollY == 0) {
    window.scrollTo({
      top: window.outerHeight,
      behavior: "smooth",
    })
  }
})