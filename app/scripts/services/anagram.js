'use strict';

/**
 * @ngdoc service
 * @name wordsAnagramMatcherApp.anagram
 * @description Functions to find words anagrams
 * # anagram
 * Service in the wordsAnagramMatcherApp.
 */

function Anagram() {
    return {
        createFromArray: function(arr) {
            return {
                wordsCount: 0,
                anagramsCount: 0,
                sets: []
            };
        }
    };
}

angular.module('wordsAnagramMatcherApp')
    .service('anagram', Anagram);
