angular.module('workouts', [])
    .controller('ctrlWorkouts', ['$scope', '$http', 'WorkoutList', function ($scope, $http, WorkoutList) {

        $scope.workoutlist = {};

     //create item
        WorkoutList.getCompleted().success(function (data) {
            $scope.workoutlist = data;
        });

    }])  
        .factory('WorkoutList', ['$http',function($http) {
        return {
            getCompleted : function() {
                return $http.get('/workouts/list');
            },
            getFuture : function() {
                return $http.get('/workouts/future');
            },
            getAll : function() {
                return $http.get('/workouts/all');
            }        
        }
    }]);