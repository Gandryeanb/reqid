const Reqid = require('./index');
const { assert } = require('chai');

describe('Test without option', () => {
  it('Should return normal output', () => {
    const reqid = new Reqid();
    const id = reqid.generate();

    assert.isDefined(id);
    const indexDash = id.indexOf('-');

    assert.equal(indexDash, 17);

    const [dateId, randomId] = id.split('-');

    assert.isDefined(randomId);
    assert.isDefined(dateId);
    assert.equal(dateId.length, 17);
    assert.equal(randomId.length, 4);
  })
})

describe('Test with option separator', () => {
  it('Should return normal output with separator', () => {
    const option = {
      separator: ':'
    }
    const reqid = new Reqid(option);
    const id = reqid.generate();

    assert.isDefined(id);
    const indexDash = id.indexOf('-');

    assert.equal(indexDash, 23);

    const [dateId, randomId] = id.split('-');

    assert.isDefined(randomId);
    assert.isDefined(dateId);
    assert.equal(dateId.length, 23);
    assert.equal(randomId.length, 4);
  })
})

describe('Test with option randomNumber', () => {
  it('Should return normal output with length of random number is 10', () => {
    const option = {
      randomLength: 10,
    }
    const reqid = new Reqid(option);
    const id = reqid.generate();

    assert.isDefined(id);
    const indexDash = id.indexOf('-');

    assert.equal(indexDash, 17);

    const [dateId, randomId] = id.split('-');

    assert.isDefined(randomId);
    assert.isDefined(dateId);
    assert.equal(dateId.length, 17);
    assert.equal(randomId.length, option.randomLength);
  })
})


describe('Test with option randomNumber and separator', () => {
  it('Should return normal output', () => {
    const option = {
      randomLength: 12,
      separator: 'x',
    }
    const reqid = new Reqid(option);
    const id = reqid.generate();

    assert.isDefined(id);

    let timesSeparator = 0
    for (let i = 0; i < id.length; i += 1) {
      if (id[i] === option.separator) timesSeparator += 1;
    }

    assert.equal(timesSeparator, 6);
  
    const indexDash = id.indexOf('-');
    assert.equal(indexDash, 23);

    const [dateId, randomId] = id.split('-');

    assert.isDefined(randomId);
    assert.isDefined(dateId);
    assert.equal(dateId.length, 23);
    assert.equal(randomId.length, option.randomLength);
  })
})
