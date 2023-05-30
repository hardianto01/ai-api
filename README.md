
# AI GENERATOR API 😎

The wrapper API from the website [happyaccidents](https://www.happyaccidents.ai/create)




![Logo](https://avatars.githubusercontent.com/u/71861395?v=4)


## Environment

To run this program, you need to change the token in the `config.js` file
where do i get tokens?
[see](https://www.happyaccidents.ai/create)
inspect network after login and get `Authorization` base64 in Headers

## HOW IT WORKS

```js
const API = require("./src/index");

modelid = 'cebfcc9402e043d78ed18daa8eefc3d2' // get from website just inspect and get modelid from network
prompt = 'best quality, masterpiece, ultra high res, photorealistic, 1girl, offshoulder'
negative = 'ng_deepnegative_v1_75t, (badhandv4:1.2), (worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, bad hands, ((monochrome)), ((grayscale)) watermark, moles'
method = 'EULER' // check any method jsdoc in src/index.js

const api = new API(modelid, prompt, negative, method)
(async() => {
    await api.generateToken() // generate token
    api.get().then(console.log)
})()

```

## Note

we are still looking for a way to get tokens automatically. and for this token it is only temporary 3-4 hours

## result

![App Screenshot](https://ik.imagekit.io/hb42m9hh0/d1f426c3-427a-4aac-acab-6c538a6029df/inferences/ecfade77-d60e-47e8-b49f-1de066ca8cbc/result-0.png)


## Contributing

Contributions are always welcome!

## Support ✨✨

For support, [Whatsapp](https://wa.me/6285173222764) ✨

