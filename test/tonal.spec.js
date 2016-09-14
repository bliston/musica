import chai from 'chai';
import Library from '../lib/musica.js';
import {select} from 'tonal-array';

chai.expect();

const expect = chai.expect;

var lib;

var actual;

var expected;

describe('Given an instance of tonal', function () {
  before(function () {
  	actual = select('1 3 5', 'A B C D E F G');
  	expected = ['A', 'C', 'E'];
  });
  describe('when I need to select pitches from an array', function () {
    it('should return the selection of pitches', () => {
      expect(actual).to.deep.equal(expected);
    });
  });
});

describe('Given an instance of tonal', function () {
  before(function () {
  	actual = select('1 3 5 2', 'A B C D E F G');
  	expected = ['A', 'C', 'E', 'B'];
  });
  describe('when I need to select pitches from an array that extend past the array', function () {
    it('should return the selection of pitches', () => {
      expect(actual).to.deep.equal(expected);
    });
  });
});