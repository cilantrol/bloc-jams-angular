angular.module('blocJams', []);


(function() {
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url:'/album',
        templateUrl: '/templates/album.html'
      });
  }

  angular
    //angular.module('blocJams', ['ui.router']);
    .module('blocJams', ['ui.router'])
    .config(config);
})
