const test = require('unit.js');
const MockAdapter = require('axios-mock-adapter');

describe('', () => {
});

describe('shortened url', () => {
  // This sets the mock adapter on the default instance
  it('should give me a proper and valid response', ()=>{
    setKey('allsjdfkljas');
    shorten('https://mgufron.com').then((response) => {
      // console.log(response);
      const {data, config} = response;
      test.value(data.hasOwnProperty('kind')).isEqualTo(true);
      test.value(data.hasOwnProperty('id')).isEqualTo(true);
      test.value(data.hasOwnProperty('longUrl')).isEqualTo(true);
      test.value(data.id).isEqualTo('https://goo.gl/alksjd');
      test.value(data.longUrl).isEqualTo("https://mgufron.com");
      test.value(config.params.key).isEqualTo('allsjdfkljas');
      test.value(JSON.parse(config.data).longUrl).isEqualTo('https://mgufron.com');
      test.value(config.method).isEqualTo('post');
    }).catch(err => console.log(err));
  });
});

describe('expand url', () => {
  // This sets the mock adapter on the default instance
  it('should give me a proper and valid response', ()=>{
    setKey('allsjdfkljas');
    expand('https://goo.gl/alksjd').then((response) => {
      // console.log(response);
      const {data, config} = response;
      test.value(data.hasOwnProperty('kind')).isEqualTo(true);
      test.value(data.hasOwnProperty('id')).isEqualTo(true);
      test.value(data.hasOwnProperty('longUrl')).isEqualTo(true);
      test.value(data.id).isEqualTo('https://goo.gl/alksjd');
      test.value(data.status).isEqualTo('OK');
      test.value(data.longUrl).isEqualTo("https://mgufron.com");
      test.value(config.params.key).isEqualTo('allsjdfkljas');
      test.value(config.params.shortUrl).isEqualTo('https://goo.gl/alksjd');
      test.value(config.method).isEqualTo('get');
    }).catch(err => console.log(err));
  });
});

describe('statistics', () => {

});
