const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('emailInp');
const passwordInput = document.getElementById('passowrdInp');
const letterCount = document.querySelector('.letter-count');
const numberCheck = document.querySelector('.numberCheck');
const validEmail = document.querySelector('.valid-email');
const validUserName = /^[0-9].*$/;
const numberCheckPath = /[0-9]/g;
const emailFormatpath = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//check number
passwordValidator = () => {
	passwordInput.value.match(numberCheckPath)
		? numberCheck.classList.replace('invalid', 'validIcon')
		: numberCheck.classList.replace('validIcon', 'invalid');
};
passwordInput.addEventListener('input', passwordValidator);

//checking email format
checkEmailFormat = () => {
	emailInput.value.match(emailFormatpath)
		? validEmail.classList.replace('invalid', 'validIcon')
		: validEmail.classList.replace('validIcon', 'invalid');
};

emailInput.addEventListener('input', checkEmailFormat);

//letter counter
letterCountCheck = () => {
	usernameInput.value.length > 8
		? letterCount.classList.replace('invalid', 'validIcon')
		: letterCount.classList.replace('validIcon', 'invalid');
};

usernameInput.addEventListener('input', letterCountCheck);
