angular.module('hotelApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/hotels', {templateUrl: 'partials/hotels.html',   controller: HotelListCtrl }).
      when('/hotels/:hotelId', {templateUrl: 'partials/hotel-view.html', controller: HotelDetailCtrl }).
      otherwise({redirectTo: '/hotels'});
}]);