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

            if (element.parent().hasClass('has-error')) {
                element.parent().removeClass('has-error');
                element.next().remove();
            }

            if (!isCsvFile(files[0])) {
                element.parent().addClass('has-error');
                var errorMsg = document.createElement('div');
                errorMsg.innerHTML = 'File need to be a CSV format';
                errorMsg.className = 'bg-danger';
                element.parent().append(errorMsg);
                return false;
            }

            if (files.length) {
                element.attr('disabled', true);

                fileReader = new FileReader();
                fileReader.onload = function (e) {
                    element.attr('disabled', false);
                    fileContent = e.target.result;

                    $scope.$apply(function () {
                        $scope.callback({csv: convertDataToArray(fileContent)});
                    });
                };

                fileReader.readAsText(files[0]);
            }
        });
    }

    /**
     * Check if a file is CSV format
     * @param {Object} file
     * @returns {boolean}
     */
    function isCsvFile(file) {
        return file.name.slice(-3).toLowerCase() === 'csv';
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

        return content;
    }

    return {
        scope: {
            callback: '&'
        },
        restrict: 'A',
        link: link
    };
}

angular.module('wordsAnagramMatcherApp')
    .directive('csvReader', CsvReader);
