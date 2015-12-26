var starWarsNames = require("./index.js");
var expect = require("chai").expect;

describe('starwars-names', function () {
  describe('all', function () {
    it('should be an array of string', function () {
      expect(starWarsNames.all).to.satisfy(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        })
      }
    });

    it('should contain Luke Skywalker', function () {
      expect(starWarsNames.all).to.include("Luke Skywalker");
    });
  });

  describe('random', function () {
    it('should return random item from starWars.all', function () {
      expect(starWarsNames.all).to.include(starWarsNames.random());
    });
  });
});
