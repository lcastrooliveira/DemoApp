/**
 * Created by Lucas on 8/06/2015.
 */
'use strict';

eventsApp.factory('$exceptionHandler',function() {
    return function(exception) {
        console.log("exception handled: "+exception.message);
    };
});