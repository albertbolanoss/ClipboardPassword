encrypt = function (textToEncrypt) {
		const encrypt = new JSEncrypt();
		encrypt.setPublicKey(publicKey);

		return encrypt.encrypt(textToEncrypt);
	};

decrypt = function (textToDecrypt) {
	const decrypt = new JSEncrypt();
	decrypt.setPrivateKey(privateKey);
	
	return decrypt.decrypt(textToDecrypt);
};


var app = angular.module('safeAccessApp', []);
app.controller('viewPasswordsCtrl', function($scope) {
	$scope.data = [];
	
	if (config.data && config.data.length > 0) {
		const password = prompt("Input your password");
		const appPassword = decrypt(config.data[0].password);
		if (password && password === appPassword) {
			$scope.data = config.data;
		}
	}
	
	copyToClipboard = function(value) {
		navigator.clipboard.writeText(decrypt(value));
	};

	encryptText = function() {
		const input = document.getElementById("textToEncrypt");
		const textToEncrypt = input.value;
		
		const encryptResult = document.getElementById("encryptResult");
		encryptResult.value = encrypt(textToEncrypt);
		encryptResult.select();
		input.value = "";
	};
});