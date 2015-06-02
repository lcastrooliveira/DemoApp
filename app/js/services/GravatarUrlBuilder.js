/**
 * Created by Lucas on 1/06/2015.
 */
'use strict'

eventsApp.factory('gravatarUrlBuilder', function() {
    return {

        buildGravatarUrl : function(email) {
            var defaultGravatarUrl = "http://www.gravatar.com/avatar/000?s=200";
            var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

            if(!regex.test(email))
                return defaultGravatarUrl;

            return 'http://www.gravatar.com/avatar/'+md5(email)+".jpg?s=200&r=g";
        }
    }
});