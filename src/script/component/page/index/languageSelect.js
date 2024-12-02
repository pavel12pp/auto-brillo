document.addEventListener('DOMContentLoaded', function () {
  const select = document.querySelector('.hero__languages-wrapper');
  const optionsContainer = select.querySelector('.hero__languages-options');
  const button = select.querySelector('.hero__languages-button');
  const choosedOption = select.querySelector('.choosed');



  // Функция для открытия/закрытия списка опций
  select.addEventListener('click', (event) => {
    select.classList.toggle('open');
    event.preventDefault()
  });

  // Обработка выбора опции
  optionsContainer.addEventListener('click', function (event) {
    if (select.classList.contains('open')) {
      event.stopPropagation();
    }
    if (event.target.closest('.hero__languages-option')) {
      const selectedOption = event.target.closest('.hero__languages-option');
      select.querySelector('.choosed').classList.remove('choosed');
      selectedOption.classList.add('choosed')
      optionsContainer.prepend(selectedOption);
      select.classList.remove('open');
    }
  });

  // Закрытие списка при клике вне его области
  document.addEventListener('click', function (event) {
    if (!select.contains(event.target)) {
      select.classList.remove('open');
    }
  });
});
