angular.module('dashService', [])

    // super simple service
    // each function returns a promise object
    .factory('Log', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/workouts/list');
            },
            create : function(todoData) {
                return $http.post('/dashboard/todo', todoData);
            },
            delete : function(id) {
                return $http.delete('/dashboard/todo/' + id);
            }
        }
    }]);