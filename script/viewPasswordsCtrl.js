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
	const password = prompt("Password: ");
	
	if (password && password === decrypt(config.data[0].password)) {
		$scope.data = config.data;
	} else {
		$scope.data = config.data.map(element => 
			Object.assign({}, element, { password:  ''}));
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