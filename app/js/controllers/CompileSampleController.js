/**
 * Created by Lucas on 8/06/2015.
 */
'use strict'

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope,$compile) {

        $scope.appendDivToElement = function(markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }

    }
);