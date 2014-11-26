angular.module('gowSite',['ngRoute'])
.controller('ApplicationCntrl', ['$scope', function($scope) {

}])
.controller('FrontCntrl', ['$scope', function($scope) {

}])

.config(['$routeProvider',function($routeProvider) {
  $routeProvider.
     when('/front', {
      templateUrl: 'partials/front.html',
      controller: 'FrontCntrl'
    }).
     otherwise({
      redirectTo: '/front'
    });
}]);

