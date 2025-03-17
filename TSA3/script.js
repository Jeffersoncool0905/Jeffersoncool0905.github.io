const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const value = button.innerText;

		if (value === 'C') {
			screen.innerText = '0';
		} else if (value === '=') {
			try {
				screen.innerText = eval(screen.innerText);
			} catch {
				screen.innerText = 'Error';
			}
		} else {
			if (screen.innerText === '0' || screen.innerText === 'Error') {
				screen.innerText = value;
			} else {
				screen.innerText += value;
			}
		}
	});
});
