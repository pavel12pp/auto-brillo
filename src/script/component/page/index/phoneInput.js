import intlTelInput from 'intl-tel-input';

const input = document.querySelector("#learn-phone");
intlTelInput(input, {
    loadUtilsOnInit: () => import("intl-tel-input/utils"),
    dropdownContainer: document.querySelector('.learn__field:has(#learn-phone)'),
    separateDialCode: true,
    initialCountry: 'ru',
});
