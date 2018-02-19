var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage', () => {
  it('it should genrate correct message', () => {
    var from = 'jan';
    var text = 'Some Message';
    var message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  });
});
