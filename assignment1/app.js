(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.message = "";

    $scope.check = function () {
      console.log($scope.menu);
      var count = calItemCount($scope.menu);
      if (count === 0) {
        $scope.message = "Please enter data first";
        $scope.color = "red";
      }
      else if (count <= 3) {
        $scope.message = "Enjoy!";
        $scope.color = "green";
      }
      else {
        $scope.message = "Too much!";
        $scope.color = "green";
      }
    };

    function calItemCount(str) {
      console.log(str);
      var count = 0;
      var items = str.split(',');
      for (var i = 0; i < items.length; i++) {
        if (items[i].trim() !== "")
          count++;
      }
      return count;
    };
  }
})();
