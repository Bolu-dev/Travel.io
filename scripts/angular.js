var app = angular.module("myApp", []);

//controller

app.controller("myController", [
  "$scope",
  function ($scope) {
    $scope.message = "Your ticket has been generated below, Safe Travels.🧡";
    $scope.log = [
      {
        name: "",
      },
    ];

    $scope.data = [
      {
        name: "",
        destination: "",
      },
    ];

    $scope.showQr = false;

    $scope.addData = function () {
      $scope.showQR = false;
      $scope.data = {
        name: "",
        destination: "",
      };
    };
  },
]);
