// start validation
const form = document.querySelector('#register-form');
const userNameInput = document.querySelector('#username-input');
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const password2Input = document.querySelector('#password2-input');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

const checkInputs = () => {
	const usernameValue = userNameInput.value.trim();
	const emailValue = emailInput.value.trim();
	const passwordValue = passwordInput.value.trim();
	const password2Value = password2Input.value.trim();

	// checking username input
	usernameValue == ''
		? setError(userNameInput, 'نام کاربری را وارد کنید')
		: setSuccess(userNameInput);

	// checking email input
	emailValue == ''
		? setError(emailInput, 'ایمیل خود را وارد کنید')
		: setSuccess(emailInput);

	// checking passeord inputs
	passwordValue == ''
		? setError(passwordInput, 'رمز عبور را  وارد کنید')
		: setSuccess(passwordInput);

	if (password2Value == '') {
		setError(password2Input, 'تکرار رمز عبور را وارد کنید');
	} else if (passwordValue != password2Value) {
		setError(password2Input, 'رمز عبور دوم را وارد کنید');
	} else {
		setSuccess(password2Input);
	}
};

const setError = (input, message) => {
	input.placeholder = message;
	input.classList.add('invalid');
};

const setSuccess = input => {
	input.classList.remove('invalid');
	input.classList.add('valid');
};
// end validation
