document.writeln("<script src=\"bower_components/stellar-sdk/stellar-sdk.js\"></script>");

let connectWallet = document.getElementsByClassName('connect-wallet');
let changeMode = document.getElementById('mode');
let wrapper = document.getElementById('wrapper');
let body = document.getElementById('body');
let appBody = document.getElementById('app-body');
let swapDark = document.getElementsByClassName('swap-dark');
let input = document.getElementsByClassName('input');
let shuffle = document.getElementById('shuffle');


function checkMode(){
	if(changeMode.classList == 'darkmode'){
		changeMode.classList.replace('darkmode','lightmode');
		wrapper.classList.replace('wrapper-darkmode','wrapper-lightmode');
		connectWallet[0].classList.replace('connect-dark','connect-light');
		connectWallet[1].classList.replace('connectwallet','connectwallet-light');
		changeMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
		appBody.classList.replace('app-body','app-body-light');
		swapDark[0].classList.replace('swap-currency-input','swap-currency-input-light');
		swapDark[1].classList.replace('swap-currency-input','swap-currency-input-light');
		input[0].classList.replace('input-dark','input-light');
		input[1].classList.replace('input-dark','input-light');
		shuffle.classList.replace('shuffle','shuffle-light');

		if(changeMode == 'lightmode') {
			changeMode.classList.replace('lightmode','darkmode');
			wrapper.classList.replace('wrapper-lightmode','wrapper-darkmode');
			appBody.classList.replace('app-body-light','app-body');
			connectWallet[0].classList.replace('connect-light','connect-dark');
			connectWallet[1].classList.replace('connectwallet-light','connectwallet');
			swapDark[0].classList.replace('swap-currency-input-light','swap-currency-input');
			swapDark[1].classList.replace('swap-currency-input-light','swap-currency-input');
			input[0].classList.replace('input-light','input-dark');
			input[1].classList.replace('input-light','input-dark');
			shuffle.classList.replace('shuffle-light','shuffle');

			changeMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
	                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
	                </svg>`;
		}
	}

	else{
		changeMode.classList.replace('lightmode','darkmode');
		wrapper.classList.replace('wrapper-lightmode','wrapper-darkmode');
		connectWallet[0].classList.replace('connect-light','connect-dark');
		connectWallet[1].classList.replace('connectwallet-light','connectwallet');
		appBody.classList.replace('app-body-light','app-body');
		swapDark[0].classList.replace('swap-currency-input-light','swap-currency-input');
		swapDark[1].classList.replace('swap-currency-input-light','swap-currency-input');
		input[0].classList.replace('input-light','input-dark');
		input[1].classList.replace('input-light','input-dark');
		shuffle.classList.replace('shuffle-light','shuffle');
		changeMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>`
	}

}

