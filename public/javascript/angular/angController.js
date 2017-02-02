angular.module('dashController', [])

.controller('dashController', ['$scope', '$http', 'Log', function ($scope, $http, Log) {

    //Variables used to populate the dashboard
    $scope.formData = {};
    $scope.workoutlist = {};
    $scope.totalRuns = 0;
    $scope.totalMiles = 0;
    $scope.averageRun = 0;
    $scope.averageMile = {};
    $scope.averageWeight = 0;
    $scope.totalDuration = {hours:0,minutes:0,seconds:0,miliseconds:0};


    //call the list
    Log.get().success(function (data) {
        $scope.workoutlist = data;
        
        //crunch some numbers //do math
        data.forEach(function(element) {
            $scope.totalMiles += element.distance;
            $scope.totalRuns++;

            //populate time
            $scope.totalDuration.hours += element.hours;
             $scope.totalDuration.minutes += element.minutes;
            $scope.totalDuration.seconds += element.seconds;
            $scope.totalDuration.miliseconds += element.miliseconds;
        }, this);

        //averages
       
        $scope.averageRun = $scope.totalMiles / $scope.totalRuns;
        

    });

    //create item
    $scope.createTodo = function () {
        if ($scope.formData.item != undefined) {
            Todos.create($scope.formData)
                .success(function (data) {
                    $scope.formData = {};
                    $scope.todos = data;
                });
        }
    };

    //delete list item
    $scope.deleteTodo = function (id) {
        Todos.delete(id).success(function (data) {
            $scope.todos = data;
        });
    };
}]);