eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    //var resource = $resource('/data/event/:id', {id: '@id'}).get({id: 1});
    return {
        getEvent: function (eventId) {
            /*var deferred = $q.defer();
             $http({method : 'GET', url: '/data/event/1'}).
             success(function(data,status,headers,config) {
             deferred.resolve(data);
             }).
             error(function(data,status,headers,config) {
             deferred.reject(status);
             });
             return deferred.promise;*/
            return resource.get({id :eventId});
        },
        save: function (event) {
            event.id = 99;
            return resource.save(events);

        },
        getAllEvents: function() {
            return resource.query();
        }
    };
});