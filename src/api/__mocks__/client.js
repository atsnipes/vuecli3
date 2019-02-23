const client = jest.genMockFromModule("../client.js");

client.get = payload => new Promise(resolve => resolve(true));
client.post = payload => new Promise(resolve => resolve(true));

export default client;
