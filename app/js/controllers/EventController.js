/**
 * Created by Lucas on 31/05/2015.
 */
'use strict';

eventsApp.controller("EventController",
    function EventController($scope,eventData, $anchorScroll, $routeParams) {

        $scope.sortorder = 'name';

        eventData.getEvent($routeParams.eventId).$promise.then(
            function(event) {$scope.event = event;console.log(event);},
            function(response) { console.log(response);}
        );

        /*$scope.event = eventData.getEvent().then(
            function(event) {$scope.event = event;},
            function(statusCode){console.log(statusCode)} );*/

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);