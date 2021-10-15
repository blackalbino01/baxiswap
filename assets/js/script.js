document.writeln("<script src=\"bower_components/stellar-sdk/stellar-sdk.js\"></script>");


const server = new StellarSdk.Server("https://expansion.bantu.network");
let connectWallet = document.getElementsByClassName('connect-wallet');
let changeMode = document.getElementById('mode');
let wrapper = document.getElementById('wrapper');
let body = document.getElementById('body');
let appBody = document.getElementById('app-body');
let swapDark = document.getElementsByClassName('swap-dark');
let input = document.getElementsByClassName('input');
let shuffle = document.getElementById('shuffle');
let currencyContainer = document.getElementsByClassName('currency-container');
let currencyInput = document.querySelector('.currency-input-dark');
let currencyOutput = document.querySelector('.currency-output-dark');
let walletModalWrapper = document.getElementById('modal-wrapper-sc-1');
let tokenModalWrapper = document.getElementById('tokenmodal-wrapper-sc-1');
let walletContentWrapper = document.getElementById('walletmodal-contentwrapper');
let connectBantuPay = document.getElementById('connect-bantupay');
let connectOtherWallet = document.querySelector('.connect-other-wallet');
let walletContentWrapperNotice = document.getElementById('walletmodal-contentwrapper-notice');
let togglePassword = document.getElementById("importmodal-show-icon");
const Web3Modal = window.Web3Modal.default;

const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
const Fortmatic = window.Fortmatic;







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
		currencyInput.classList.replace('currency-input-dark', 'currency-input-light');
		currencyOutput.classList.replace('currency-output-dark', 'currency-output-light');
		walletModalWrapper.classList.replace('modal-wrapper-sc-1', 'modal-wrapper-sc-1-light');
		tokenModalWrapper.classList.replace('tokenmodal-wrapper-sc-1', 'tokenmodal-wrapper-sc-1-light');
		walletContentWrapperNotice.classList.replace('walletmodal-contentwrapper-notice', 'walletmodal-contentwrapper-notice-light');
		connectBantuPay.classList.replace('btns','btns-light');
		walletContentWrapper.classList.replace('walletmodal-contentwrapper', 'walletmodal-contentwrapper-light');
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
			currencyInput.classList.replace('currency-input-light', 'currency-input-dark');
			currencyOutput.classList.replace('currency-output-light', 'currency-output-dark');
			walletContentWrapper.classList.replace('walletmodal-contentwrapper-light', 'walletmodal-contentwrapper');
			walletModalWrapper.classList.replace('modal-wrapper-sc-1-light', 'modal-wrapper-sc-1');
			tokenModalWrapper.classList.replace('tokenmodal-wrapper-sc-1-light', 'tokenmodal-wrapper-sc-1');
			walletContentWrapperNotice.classList.replace('walletmodal-contentwrapper-notice-light', 'walletmodal-contentwrapper-notice');
			connectBantuPay.classList.replace('btns-light','btns');

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
		currencyInput.classList.replace('currency-input-light', 'currency-input-dark');
		currencyOutput.classList.replace('currency-output-light', 'currency-output-dark');
		walletModalWrapper.classList.replace('modal-wrapper-sc-1-light', 'modal-wrapper-sc-1');
		tokenModalWrapper.classList.replace('tokenmodal-wrapper-sc-1-light', 'tokenmodal-wrapper-sc-1');
		walletContentWrapper.classList.replace('walletmodal-contentwrapper-light', 'walletmodal-contentwrapper');
		walletContentWrapperNotice.classList.replace('walletmodal-contentwrapper-notice-light', 'walletmodal-contentwrapper-notice');
		connectBantuPay.classList.replace('btns-light','btns');
		changeMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>`
	}

}

function ModalShow(elementModal){
	elementModal.style.display = 'flex';
}


function ModalClose(elementModal){
	setTimeout(() => { 
        elementModal.style.display = 'none';
    }, 100);
}

function shufflePanel() {
	if(shuffle.classList == "shuffle"){
		if (currencyContainer[0].children[0].classList == 'currency-input-dark') {
			currencyContainer[0].innerHTML = `<div class="currency-output-dark">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <span style="margin:0 4px;">Select a Token</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="CurrencyInputPanel__StyledDropDown-sc-33m4yg-8 gSzdoI"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-dark" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
			currencyContainer[1].innerHTML = `<div class="currency-input-dark">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <img src="assets/images/bantupay.png" style="width: 24px; border-radius: 100%;">
										                            <span style="margin:0 8px;">XBN</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-dark" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
		}

		else {
			currencyContainer[1].innerHTML = `<div class="currency-output-dark">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <span style="margin:0 4px;">Select a Token</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="CurrencyInputPanel__StyledDropDown-sc-33m4yg-8 gSzdoI"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-dark" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
			currencyContainer[0].innerHTML = `<div class="currency-input-dark">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <img src="assets/images/bantupay.png" style="width: 24px; border-radius: 100%;">
										                            <span style="margin:0 8px;">XBN</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-dark" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
		}
	}

	else{
		if (currencyContainer[0].children[0].classList == 'currency-input-light') {
			currencyContainer[0].innerHTML = `<div class="currency-output-light">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <span style="margin:0 4px;">Select a Token</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="CurrencyInputPanel__StyledDropDown-sc-33m4yg-8 gSzdoI"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-light" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
			currencyContainer[1].innerHTML = `<div class="currency-input-light">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <img src="assets/images/bantupay.png" style="width: 24px; border-radius: 100%;">
										                            <span style="margin:0 8px;">XBN</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-light" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
		}

		else {
			currencyContainer[1].innerHTML = `<div class="currency-output-light">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <span style="margin:0 4px;">Select a Token</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" class="CurrencyInputPanel__StyledDropDown-sc-33m4yg-8 gSzdoI"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-light" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
			currencyContainer[0].innerHTML = `<div class="currency-input-light">
										                      <button onclick="ModalShow(document.querySelector('.tokenmodal-wrapper'))">
										                        <span class="currency-input-panel">
										                          <div>
										                            <img src="assets/images/bantupay.png" style="width: 24px; border-radius: 100%;">
										                            <span style="margin:0 8px;">XBN</span>
										                          </div>
										                          <svg class="token-dropdown" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path></svg>
										                        </span>
										                      </button>
										                      <input class="input input-light" type="text" inputmode="decimal" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79">
										                    </div>`;
		}
	}
}

function secretVisibility(){
	
	
	if (input.type === "password") {
		input.nextElementSibling= `<img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cpath stroke='%237ED085' stroke-width='2' d='M12.5 17c4.694 0 8.5-5.5 8.5-5.5S17.194 6 12.5 6 4 11.5 4 11.5 7.806 17 12.5 17z'/%3e%3ccircle cx='12.5' cy='11.5' r='2.5' fill='%237ED085' fill-rule='nonzero'/%3e%3c/g%3e%3c/svg%3e" alt="show" class="importmodal-show-icon">`;	    
		input.type = "text";
	} 
	else {
	   input.type = "password";
	}
}

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = secretInput.getAttribute('type') === 'password' ? 'text' : 'password';
    secretInput.setAttribute('type', type);
    // toggle the eye / eye slash icon
    const toggle = secretInput.getAttribute('type') == 'password' ? 'fa-eye-slash' : 'fa-eye';

    this.classList.remove("fa-eye-slash");
    this.classList.add(toggle);

});

let checkbox = document.getElementById('inputAcceptCheckbox');
let button = document.getElementsByClassName('importmodal-button')[0];
function acceptcheckbox(){
	if(checkbox.checked){
		button.disabled = false;
	}
	else{
		button.disabled = true;
	}
}

let form = document.querySelector('form');
let secretInput = document.querySelector('.importmodal-secretkey')
let accountIcon = document.querySelector('.account-icon');
let connectToWallet = document.querySelector('.connect-to-wallet');
let connectToWallet_ = document.querySelector('.connect-to-wallet2');
let privatekey = secretInput.value;
let balance = document.querySelectorAll('.balance');
let keyPair = StellarSdk.Keypair.fromSecret(privatekey);
let updatebalance = document.querySelector('#balance');
let checkAsset = document.querySelector('#asset');
let checkCommonAsset = document.querySelector('.common-base-token');



function walletImport(){

	form.addEventListener('submit', function (e) {
	  e.preventDefault()
	  if(privatekey){
		const string = keyPair.publicKey();
		connectToWallet.innerHTML = `<button id="connect" class="connect-dark connect-wallet">${string.substr(0,5)+ "...." + string.substr(-5)}</button>`;
		connectToWallet_.innerHTML = `<button class="connectwallet connect-wallet" id="connect2">Swap</button>`;
		accountIcon.style.display = "flex";
		balance[0].style.display = "inline";
		balance[1].style.display = "inline";

		server.accounts().accountId(string)
        .call()
        .then(function (result) {
            //check balance here
            
            if(checkAsset.innerHTML == 'XBN' || checkCommonAsset == 'XBN'){
            	xbn = result.balances[1].balance;
            	updatebalance.innerHTML = xbn;
            }
            else{
            	bnr = result.balances[0].balance;
            	updatebalance.innerHTML = bnr;
            }

        })
        .catch(function (err) {
            console.error(err);
        });
	  }
	  ModalClose(document.querySelector('.importmodal-wrapper'));
	});
		
}

function chooseToken(e){
	let inputToken = document.getElementById('basetoken');
	let outputToken = document.getElementById('outputToken');
	let commonbase = document.querySelectorAll('.common-bases-wrapper');
	if(e.classList.contains('token')){
		inputToken.innerHTML = e.innerHTML;
		if(commonbase[1] == e){
			e.classList.replace('token', 'basetoken');
			commonbase[0].classList.replace('basetoken', 'token');
			outputToken.innerHTML = commonbase[0].innerHTML;
		}

		else{
			e.classList.replace('token', 'basetoken');
			commonbase[1].classList.replace('basetoken', 'token');
			outputToken.innerHTML = commonbase[1].innerHTML;
		}
	}
}




const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "09046699d3b24685b819c3d6fd021a40",
      }
    },

    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_live_16EBC6D98FB3C968"
      }
    },

    torus: {
    package: Torus, // required
    options: {
      networkParams: {
        host: "https://localhost:8545", // optional
        chainId: 1337, // optional
        networkId: 1337 // optional
      },
      config: {
        buildEnv: "development" // optional
      		}
    	}
  	},



  };



/**
 * Connect wallet button pressed.
 */
async function onConnect() {

var web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true, // optional
  providerOptions, // required
  disableInjectedProvider: false,
});
	console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }
}

//connectOtherWallet.addEventListener('click', onConnect());






