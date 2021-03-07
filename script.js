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
	// email pattern
	const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// checking username input
	usernameValue.length < 4
		? setError(userNameInput, 'نام کاربری را وارد کنید')
		: setSuccess(userNameInput);

	// checking email input
	emailValue.match(emailReg)
		? setSuccess(emailInput)
		: setError(emailInput, 'ایمیل خود را وارد کنید');

	// checking 1st password input
	passwordValue.length < 8
		? setError(passwordInput, 'حداقل باید 8 کاراکتر وارد کنید')
		: setSuccess(passwordInput);

	// checking if two passwords are matches
	password2Value.length < 8
		? setError(password2Input, 'تکرار رمز عبور را وارد کنید')
		: passwordValue != password2Value
		? setError(password2Input, 'تکرار رمز عبور همخوانی ندارد')
		: setSuccess(password2Input);
};

const setError = (input, message) => {
	input.placeholder = message;
	input.value = '';

	input.classList.remove('valid');
	input.classList.add('invalid');
};

const setSuccess = input => {
	input.classList.remove('invalid');
	input.classList.add('valid');
};
// end validation
