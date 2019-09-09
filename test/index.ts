import { describe, it } from 'mocha';
import { assert } from 'chai';
import { add } from '../src';

describe('Add', () => {
  it('adds two numbers', () => {
    assert.equal(add(1, 2), 3, '1 + 2 = 3');
  });
});
