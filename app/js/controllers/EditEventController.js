/**
 * Created by Lucas on 31/05/2015.
 */
'use strict'

eventsApp.controller('EditEventController',
    function($scope) {
        $scope.saveEvent = function(event,newEventForm) {
            console.log(newEventForm);
            if(newEventForm.$valid) {
                window.alert('event '+event.name + ' saved!');
            }

        }

        $scope.cancelEdit = function() {
            window.location = "EventDetails.html";
        }
    }
);
