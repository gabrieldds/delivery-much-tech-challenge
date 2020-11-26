const Api = require('./api');

describe('Api object', () => {
  test('Should return status 404 if path not found', async () => {
    const sut = new Api('http://www.recipepuppy.com/api');
    const { status } = await sut.get('i');
    expect(status).toBe(404);
  });

  test('Should return status 200', async () => {
    const sut = new Api('http://www.recipepuppy.com/api');
    const { status } = await sut.get('?i=onions,garlic,tomato');
    expect(status).toBe(200);
  });

  test('Should return data is defined', async () => {
    const sut = new Api('http://www.recipepuppy.com/api');
    const { data } = await sut.get('?i=onions,garlic,tomato');
    expect(data).toBeDefined();
  });

  test('Should return status 401', async () => {
    const sut = new Api('http://api.giphy.com/v1/gifs/search');
    const { status } = await sut.get();
    expect(status).toBe(401);
  });
});
