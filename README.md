# Clipboard Password

Allow to store the web page credentials in a JSON file and then copy the credentials into the clip board or go to the web page.

Note: this one is a incomplete project yet the idea is in progress (missing the password encriptation and the lookup feel).

## How run it

1. Create a Json file in this root folder and named it "passwd.json" and add records to this one.
1. Open "index.html"
1. That's it, use the free tool

```json
config = {
	"data": [
		{
			"url": "The web page address",
			"username": "username",
			"password": "password",
			"title": "The title for this record"
		}
		
	]
}
```
