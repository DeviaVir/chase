function HotelListCtrl($scope) {
    $scope.hotels = hotel_set;
}

function HotelDetailCtrl($scope, $routeParams) {
  $scope.hotel = hotel_set[$routeParams.hotelId];

  $scope.mainImageUrl = $scope.hotel.image[0];

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  };
}