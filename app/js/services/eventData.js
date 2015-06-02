'use strict';

eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'}).get({id: 1});
    return {
        getEvent: function () {
            /*var deferred = $q.defer();
             $http({method : 'GET', url: '/data/event/1'}).
             success(function(data,status,headers,config) {
             deferred.resolve(data);
             }).
             error(function(data,status,headers,config) {
             deferred.reject(status);
             });
             return deferred.promise;*/
            return resource;
        },
        save: function (event) {
            event.id = 99;
            return resource.save(event);
        }
    };
})