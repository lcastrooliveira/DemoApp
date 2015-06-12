/**
 * Created by Lucas on 11/06/2015.
 */
'use strict'
eventsApp.controller('GreetingController',
    function GreetingController($scope) {
        $scope.sayHello = function() {
            alert('Hello');
        }
    });