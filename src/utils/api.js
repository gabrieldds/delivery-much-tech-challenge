const axios = require('axios');

class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
    });
    this.get = this.get.bind(this);
  }

  async get(path) {
    try {
      const { status, data } = await this.api.get(path);
      return {
        status,
        data,
      };
    } catch (error) {
      const { status, message } = error.response;
      return {
        status,
        message,
      };
    }
  }
}

module.exports = Api;
