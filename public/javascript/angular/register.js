angular.module('register', [])
    .controller('ctrlRegister', ['$scope', '$http', 'NewUser', function ($scope, $http, NewUser) {


     //create item
        $scope.createUser = function () {
            if ($scope.formData.username != undefined) {
                NewUser.create($scope.formData)
                    .success(function (data) {
                    });
            }
        };

    }])
    
        .factory('NewUser', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/register');
            },
            create : function(todoData) {
                return $http.post('/register', userData);
            }
        }
    }]);