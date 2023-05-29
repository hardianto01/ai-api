const config = require('../config');

const axios = require('axios');

class API {
  /**
   * configuration class
   * @param {String} token auth token from base64
   * @param {String } model model id from website
   * @param {String } prompt model id from website
   * @param {String} negatif prompt negative
   * @typedef {'EULER' | 'EULER A' | 'LMS' | 'DDPM' | 'DDIM' | 'DPM_SOLVER_MULTISTEP'} method
   * @param {method} method
   */
  constructor(model, prompt, negatif, method) {
    this.token = config.token;
    this.model = model;
    this.prompt = prompt;
    this.negatif = negatif;
    this.method = method;
  }

  async generateToken() {
    const data = await axios.post(
      'https://easel-fgiw.onrender.com/v1/inference',
      {
        modelId: this.model,
        prompt: this.prompt,
        strength: 0.8,
        negativePrompt: this.negatif,
        outputWpx: 512,
        outputHpx: 512,
        samplingMethod: this.method,
        vae: 'stabilityai/sd-vae-ft-mse',
        numImagesToGenerate: 1,
        numInferenceSteps: 19,
        guidanceScale: 7,
        seed: '121231213',
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    if (data.status !== 201) console.log('TOKEN EXPIRED');
    this.url = 'http://easel-fgiw.onrender.com/v1/inferences/' + data.data.inferenceId;
  }
  async get() {
    let condict = true;
    while (condict) {
      const { data } = await axios.get(this.url, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Connection: 'keep-alive',
          'User-Agent': 'PostmanRuntime/7.29.2',
        },
      });
      if (data.images.length > 0) {
        condict = false;
        this.data = data;
        continue;
      }
    }
    return {
      url_image:
        'https://ik.imagekit.io/hb42m9hh0/' + this.data.images[0].filename,
      ...this.data,
    };
  }
}
module.exports = API;
