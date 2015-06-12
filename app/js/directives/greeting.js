/**
 * Created by Lucas on 11/06/2015.
 */
'use strict'

eventsApp.directive('greeting',function() {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: '@',
        name: 'ctrl'
    };
});
