'use strict';

/**
 * @ngdoc directive
 * @name wordsAnagramMatcherApp.directive:csvReader
 * @description Read CSV file from input type="file"
 * # csvReader
 */

function CsvReader() {
    function link($scope, element) {
        element.bind('change', function (changeEvent) {
            var files = changeEvent.target.files,
                fileReader,
                fileContent;

            if (files.length) {
                element.attr('disabled', true);

                fileReader = new FileReader();
                fileReader.onload = function (e) {
                    element.attr('disabled', false);
                    fileContent = e.target.result;

                    $scope.$apply(function () {
                        $scope.fileContent = convertDataToArray(fileContent);
                    });
                };

                fileReader.readAsText(files[0]);
            }
        });
    }

    /**
     * Convert string Data to Array
     * @param {String} data
     * @returns {Array}
     */
    function convertDataToArray(data) {
        var allLines = data.split(/\r\n|\n/),
            headers = allLines[0].split(','),
            partsInLine,
            content = [];

        // Stop conversion if data is empty
        if (!headers.length) {
            return content;
        }

        allLines.forEach(function(line){
            partsInLine = line.split(',');
            if (partsInLine.length === headers.length) {
                content.push(partsInLine);
            }
        });

        console.log(content);
        return content;
    }

    return {
        scope: {
            fileContent: '='
        },
        restrict: 'A',
        link: link
    };
}

angular.module('wordsAnagramMatcherApp')
    .directive('csvReader', CsvReader);
