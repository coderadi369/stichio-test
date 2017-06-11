angular.module('myApp',[])
.config(function ($httpProvider) {
  $httpProvider.defaults.headers.get = {
    'Authorization' : 'Token d0689f1e3ac6a820ce598c372b92e920a18a58cd'
 };
})
.controller('mainCtrl', function($scope,$http) {

  $scope.hii="hiii";
  console.log('hello');
  $http({
  method: 'GET',
  url: 'https://yudql2tsmh.execute-api.us-east-1.amazonaws.com/testStichio/testing/b8680137-fde7-437d-80d9-d88b92633e97/?q=profileView'
}).then(function(response){
  console.log(response.data.Frames);
  $scope.results = response.data.Frames;
  console.log($scope.results);
});

});
