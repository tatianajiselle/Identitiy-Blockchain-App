Digital Identity and Verification on Ethereum

Technologies:
UPort
IPFS

To get started:
clone and run `npm install`

To run server:
node index.js

In order to get images on the card view for the CreateDisclosureRequest, you must push an encoded JWT to IPFS.
Use the `signJWT.js` to encode the object, then save it to a .txt file and push it to IPFS using:

```
curl "https://ipfs.infura.io:5001/api/v0/add?pin=true" \
    -X POST \
    -H "Content-Type: multipart/form-data" \
    -F file=@"/token.txt" 
```

Note that you must pin the file to IPFS or else you can consider the file cached and non-persistent.

Documentation:
https://docs.google.com/document/d/19tTG7a5RoFPzcIUywUhpZZcDG3Jr7BEOJjpsmScqZ08/edit?usp=sharing 
