/**
 * Created by Lucas on 10/06/2015.
 */
'use strict';

eventsApp.directive('upvote', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/upvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});