const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('emailInp');
//const passwordInput = document.getElementById('passowrdInp');
const userNameValidatorText = document.querySelector('.letter-count');
const numberCheck = document.querySelector('.numberCheck');
const validEmail = document.querySelector('.valid-email');
//const passwordValidatorPath = /^[0-9a-zA-Z]+$/;
const emailFormatpath = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//check number
/*passwordValidator = () => {
	passwordInput.value.match(passwordValidatorPath)
		? numberCheck.classList.replace('invalid', 'validIcon')
		: numberCheck.classList.replace('validIcon', 'invalid');
};*/
//passwordInput.addEventListener('input', passwordValidator);

//check email format
checkEmailFormat = () => {
	emailInput.value.match(emailFormatpath)
		? validEmail.classList.replace('invalid', 'validIcon')
		: validEmail.classList.replace('validIcon', 'invalid');
};

emailInput.addEventListener('input', checkEmailFormat);

// check user name input
letterCountCheck = () => {
	usernameInput.value.length > 8
		? userNameValidatorText.classList.replace('invalid', 'validIcon')
		: userNameValidatorText.classList.replace('validIcon', 'invalid');
};

usernameInput.addEventListener('input', letterCountCheck);
