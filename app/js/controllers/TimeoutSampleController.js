/**
 * Created by Lucas on 8/06/2015.
 */
'use strict'

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        var promise = $timeout(function() {
            $scope.name = "John Doe";
        }, 3000);

        /*setTimeout(function () {
            $scope.name = "John Doe";
        }, 3000); -> this runs in a separate thread and angular doen't know it happens. Angular is only
        aware of model changes done in the $timeout service*/

        $scope.cancel = function() {
            $timeout.cancel(promise);
        };

    }
);