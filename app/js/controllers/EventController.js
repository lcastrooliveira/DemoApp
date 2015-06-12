/**
 * Created by Lucas on 31/05/2015.
 */
'use strict';

eventsApp.controller("EventController",
    function EventController($scope,eventData, $anchorScroll, $routeParams, $route) {

        $scope.sortorder = 'name';

        eventData.getEvent($routeParams.eventId).$promise.then(
            function(event) {$scope.event = event;console.log(event);},
            function(response) { console.log(response);}
        );

        console.log($route.current.foo);
        console.log($route.current.params.lala);
        console.log($route.current.params.eventId);
        console.log($route.current.pathParams.foo); // pathParams only includes parameters that are part of the route

        $scope.event = $route.current.locals.event;

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

        $scope.reload = function() {
            $route.reload();
        }
    }
);
