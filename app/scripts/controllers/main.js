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
function MainController($scope, anagram) {
    var vm = this;

    /**
     * Reset words anagrams
     */
    vm.cleanWords = function() {
        vm.fileContent = [];
        vm.anagrams = anagram.create(vm.fileContent);
    };
    vm.cleanWords();

    /**
     * Update words anagrams with new file
     * @param {Array[]} csv
     */
    $scope.updateAnagrams = function(csv) {
        vm.fileContent = csv;
        vm.anagrams = anagram.create(csv);
    };
}

MainController.$inject = ['$scope', 'anagram'];

angular.module('wordsAnagramMatcherApp')
  .controller('MainCtrl', MainController);