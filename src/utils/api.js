const axios = require('axios');

class Api {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
    });
  }

  async get(path) {
    try {
      const { status, data } = await this.api.get(path);
      return {
        status,
        data,
      };
    } catch (error) {
      const { status, data } = error.response;
      return {
        status,
        data,
      };
    }
  }
}

module.exports = Api;
