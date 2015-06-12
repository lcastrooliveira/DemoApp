/**
 * Created by Lucas on 10/06/2015.
 */
'use strict';

eventsApp.directive('mySample',function() {
    return {
        restrict: 'E',
        template: "<input type='text' ng-model='sampleData'/> {{sampleData}} <br/>",
        scope: {

        }
    };
});