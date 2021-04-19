# Clipboar Password

Allow to store the web page credentials in a JSON file and then copy them to the clipboard or go to the web page.

Note: this one is an incomplete project yet the idea is in progress, key encryption is missing and we need to finish building the frontend and include it as a browser pluggin.

## How to Create a Public / Private Key Pair

```sh
openssl genrsa -out clipboardPassword.pem 2048
```

```
openssl rsa -pubout -in clipboardPassword.pem -out clipboardPassword_pub.pem
```

See the following [link](https://github.com/travist/jsencrypt) to more information.

## Initial configuration (only the first time).

1. Open the JSON file "passwd.json" located in the root folder and add your records to this.
1. Open the JS file "privateKey.js" and set your private key.
1. Edit the JS file "publicKey.js" and set your public key.

passwd.json
```json
config = {
	"data": [
		{
			"url": "The web page address",
			"username": "Username",
			"password": "RSA encryted password",
			"title": "The title for this record"
		}
	]
}
```

privateKey.js
```js
const privateKey = 
`-----BEGIN PRIVATE KEY-----
.
.
.
-----END PRIVATE KEY-----`;
```

publicKey.js
```js
const publicKey = 
`-----BEGIN PUBLIC KEY-----
.
.
.
-----END PUBLIC KEY-----`;
```

## How run it
1. Open "index.html"


