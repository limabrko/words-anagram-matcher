'use strict';

describe('Service: anagram', function () {

  // load the service's module
  beforeEach(module('wordsAnagramMatcherApp'));

  // instantiate service
  var anagram;
  beforeEach(inject(function (_anagram_) {
    anagram = _anagram_;
  }));

  it('should do something', function () {
    expect(!!anagram).toBe(true);
  });

});
