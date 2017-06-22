const expect = require('expect.js');

const fcb = require('../');

describe('fcb()', () => {
  it('returns a promise', () => {
    expect(fcb(() => {})).to.be.a(Promise);
  });
  
  it('resolves the promise when the callback is called without an error', async () => {
    let afterTimeout = false;
    await fcb(cb => {
      setTimeout(() => {
        afterTimeout = true;
        cb();
      }, 10);
    });
    
    expect(afterTimeout).to.be(true);
  });
  
  it('rejects the promise when the callback is called with an error', async () => {
    await fcb(cb => {
      cb(new Error('foo'))
    })
    .catch(error => ({ caughtError: error }))
    .then(({ caughtError }) => {
      expect(caughtError).to.have.property('message', 'foo');
    });
  })
})