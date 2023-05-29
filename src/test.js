const API = require(".");

const api = new API('cebfcc9402e043d78ed18daa8eefc3d2', 'nsfw, nude, mature, boobs, leg breast, best quality, masterpiece, ultra high res, photorealistic, 1girl, offshoulder, smile, long hair, black hair', 'ng_deepnegative_v1_75t, (badhandv4:1.2), (worst quality:2), (low quality:2), (normal quality:2), lowres, bad anatomy, bad hands, ((monochrome)), ((grayscale)) watermark, moles','EULER')


setTimeout(async() => {
    await api.generateToken()
    api.get().then(console.log)
}, 100);
