'use strict';

/**
 * @ngdoc function
 * @name wordsAnagramMatcherApp.controller:MainCtrl
 * @description Main page
 * # MainCtrl
 * Controller of the wordsAnagramMatcherApp
 */

/**
 * Controller Main Page
 * @param anagram
 * @constructor
 */
function MainController(anagram) {
    var vm = this;
    vm.fileContent = [];
    vm.anagrams = anagram.createFromArray(vm.fileContent);
}

MainController.$inject = ['anagram'];

angular.module('wordsAnagramMatcherApp')
  .controller('MainCtrl', MainController);