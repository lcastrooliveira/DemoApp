/**
 * Created by Lucas on 11/06/2015.
 */
'use strict'
eventsApp.controller('GreetingController',
    function GreetingController($scope) {
        var greetings = ['hello'];
        $scope.sayHello = function() {
            alert(greetings.join());
        }
        this.addGreeting = function(greeting) {
            greetings.push(greeting);
        }
    });