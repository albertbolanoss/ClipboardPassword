# Clipboar Password

Allow to store the web page credentials in a JSON file and then copy the credentials into the clip board or go to the web page.

Note: this one is a incomplete project yet the idea is in progress (missing the password encriptation and the lookup feel).

## How to Create a Public / Private Key Pair

See the following [link](https://docs.oracle.com/cd/E19683-01/816-4883/6mb2joaoa/index.html) to Create a Public / Private Key Pair

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

privateKey.js
```
const privateKey = 
`-----BEGIN PRIVATE KEY-----
.
.
.
-----END PRIVATE KEY-----`;
```

publicKey.js
```
const publicKey = 
`-----BEGIN PUBLIC KEY-----
.
.
.
-----END PUBLIC KEY-----`;
```

## How run it
1. Open "index.html"


