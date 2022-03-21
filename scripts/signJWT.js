const didJWT = require('did-jwt')
const signer = didJWT.SimpleSigner('774d4c1cf796f7911c54ce1be9da2d743de4cd99f121999ecf4c29b733063a88');

let jwt = '';

didJWT.createJWT({
  sub:  'did:ethr:0xc1050a01fadbbc82353d6787ba489622edfe63b6',
  claim: {
    name: "Zillow",
    profileImage: {
      '/': "/ipfs/QmabDxzCRmL8SdT1phdA7LS1sc97JVvkfWpmqZ9bz5Vxa1"
    },
    bannerImage: {
      '/': "/ipfs/QmXuH4EfrLQt2fafeGs1GyHjq71CdKp9E3esiq5vYQDLUM"
    },
    url: "zillow.com"
    }
  },
  {
    alg: 'ES256K-R',
    issuer: 'did:ethr:0xc1050a01fadbbc82353d6787ba489622edfe63b6',
    signer
  }).then( response =>
      { 
        jwt = response 
        console.log(jwt);
      }
  );
