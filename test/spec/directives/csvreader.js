'use strict';

describe('Directive: csvReader', function () {

  // load the directive's module
  beforeEach(module('wordsAnagramMatcherApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<csv-reader></csv-reader>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the csvReader directive');
  }));
});
