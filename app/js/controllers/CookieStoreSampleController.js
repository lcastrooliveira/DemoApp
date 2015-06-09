/**
 * Created by Lucas on 8/06/2015.
 */
'use strict'

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {

        $scope.event = {id: 1, name:"my event"};

        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event',event);
        };

        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventFromCookie = function() {
            $cookieStore.remove('event');
        };

    }
);