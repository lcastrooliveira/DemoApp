/**
 * Created by Lucas on 11/06/2015.
 */
'use strict'

eventsApp.directive('gravatar',function(gravatarUrlBuilder) {
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function(scope,element,attrs,controller) {
            attrs.$observe('email',function(newValue,oldValue) {
                if(newValue !== oldValue) {
                    attrs.$set('src',gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            })
        }
    }
})