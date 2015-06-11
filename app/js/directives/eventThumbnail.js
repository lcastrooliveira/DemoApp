/**
 * Created by Lucas on 10/06/2015.
 */
'use strict';

eventsApp.directive('eventThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/eventThumbnail.html'
    }
});