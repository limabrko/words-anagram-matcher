'use strict';

/**
 * @ngdoc service
 * @name wordsAnagramMatcherApp.anagram
 * @description Functions to find words anagrams
 * # anagram
 * Service in the wordsAnagramMatcherApp.
 */

function Anagram() {

    /**
     * Match words anagrams
     * @param {Array[]} data
     * @returns {{wordsCount: number, anagramsCount: number, anagrams: Array, notAnagrams: Array}}
     */
    function match(data) {
        var anagrams = [],
            notAnagrams = [],
            anagramsGroups = createAnagramsGroups(data),
            wordsCount = 0,
            anagramsCount = 0,
            notAnagramsCount = 0;

        // Separate anagrams and not anagrams words
        for (var subset in anagramsGroups) {
            wordsCount += anagramsGroups[subset].length;

            if (anagramsGroups[subset].length > 1) {
                anagramsCount += anagramsGroups[subset].length;
                anagrams.push(anagramsGroups[subset]);
                continue;
            }

            notAnagramsCount += anagramsGroups[subset].length;
            notAnagrams.push(anagramsGroups[subset][0]);
        }

        // Order descending anagrams
        anagrams.sort(function(a, b) {
            return b.length - a.length;
        });

        return {
            wordsCount: wordsCount,
            anagramsCount: anagramsCount,
            notAnagramsCount: notAnagramsCount,
            anagrams: anagrams,
            notAnagrams: notAnagrams
        };
    }

    /**
     * Create anagrams keys
     * @param {Array[]} data
     */
    function createAnagramsGroups(data) {
        var subsets = {},
            anagramKey;

        data.forEach(function(line){
            line.forEach(function(word) {
                anagramKey = sorted(word);
                if (!anagramKey.length) {
                    return;
                }

                if (!subsets[anagramKey]) {
                    subsets[anagramKey] = [word];
                    return;
                }

                subsets[anagramKey].push(word);
            });
        });
        return subsets;
    }

    /**
     * Sort word letters
     * @param {String} str
     * @returns {String}
     */
    function sorted(str) {
        return str.split('').sort().join('');
    }

    return {
        /**
         * Create anagram from array
         * @param {Array[]} data
         * @returns {{wordsCount: number, anagramsCount: number, anagrams: Array, notAnagrams: Array}}
         */
        create: function (data) {
            return match(data);
        }
    };
}

angular.module('wordsAnagramMatcherApp')
    .service('anagram', Anagram);
