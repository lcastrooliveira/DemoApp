/**
 * Created by Lucas on 31/05/2015.
 */
'use strict'

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event)
                    .$promise.then(
                    function (response) {console.log('success', response)},
                    function (response) {console.log('failure', response)}
                );
            }

        };

        $scope.other = function() {
            eventData.other();
        };

        $scope.cancelEdit = function () {
            window.location = "EventDetails.html";
        };
    }
);
