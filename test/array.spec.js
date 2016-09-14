import chai from 'chai';
import {select, settings} from '../lib/musica.js';

chai.expect();

const expect = chai.expect;

var lib;

var actual;

var expected;

describe('Given the settings object', function () {
  before(function () {
    actual = Object.keys(settings.voice_ranges)
    expected = ['soprano', 'alto', 'tenor', 'bass'];
  });
  describe('when I need to check its contents', function () {
    it('should have contents', () => {
      expect(actual).to.deep.equal(expected);
    });
  });
});

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
    actual = select('3 5 1', 'A B C D E F G');
    expected = ['C', 'E', 'A'];
  });
  describe('when I need to select non-ascending pitches from an array', function () {
    it('should return the selection of pitches', () => {
      expect(actual).to.deep.equal(expected);
    });
  });
});

describe('Given an instance of tonal', function () {
  before(function () {
    actual = select('1 3 5 9', 'A B C D E F G');
    expected = ['A', 'C', 'E', 'B'];
  });
  describe('when I need to select pitches from an array that extend past the array', function () {
    it('should return the selection of pitches', () => {
      expect(actual).to.deep.equal(expected);
    });
  });
});