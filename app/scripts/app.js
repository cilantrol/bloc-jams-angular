(function() {
  function config($stateProvider, $locationProvider){
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    //$stateProvider.state(stateName, stateConfig)
    //what is really happening?
    //$stateProvider.state('landing').state('collection').state('album');
    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
      })
      .state('index', {
        url: '/index',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })
      .state('album', {
        url:'/album',
        controller: 'AlbumCtrl as album',
        templateUrl: '/templates/album.html'
      })
      .state('account', {
        url: '/account',
        controller: 'AccountCtrl as account',
        templateUrl: '/templates/account.html'
      })
      .state('about', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: '/templates/about.html'
      });
  }

  angular
    //angular.module('blocJams', ['ui.router']);
    .module('blocJams', ['ui.router'])
    .config(config);
})();
