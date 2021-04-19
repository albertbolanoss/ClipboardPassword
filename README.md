# Clipboard Password

Allow to store the web page credentials in a JSON file and then copy them to the clipboard or go to the web page.

Note: this one is an incomplete project yet the idea is in progress, key encryption is missing and we need to finish building the frontend and include it as a browser pluggin.

## How run it

1. Create a Json file in this root folder and named it "passwd.json" and add records to this one.
1. Open "index.html"
1. That's it, use this free tool

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
