(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
     var toBuy = this;
     toBuy.items = ShoppingListCheckOffService.getItems();

     toBuy.buyItem = function (itemIndex) {
       ShoppingListCheckOffService.removeItem(itemIndex);
     }

     toBuy.hasBoughtEverything = function () {
       return toBuy.items.length === 0;
     }
  }
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

    alreadyBought.hasBoughtNothing = function () {
      return alreadyBought.items.length === 0;
    }
  }
  function ShoppingListCheckOffService() {
    var service = this;
    var items = [
      {
        name: 'cookies',
        quantity: 10
      },
      {
        name: 'chips',
        quantity: 5
      },
      {
        name: 'cokes',
        quantity: 5
      },
      {
        name: 'sugar',
        quantity: 5
      },
      {
        name: 'soups',
        quantity: 5
      }
    ];
    var boughtItems = [];
    service.getItems = function () {
      return items;
    }
    service.getBoughtItems = function () {
      return boughtItems;
    }
    service.removeItem = function (itemIndex) {
      var removedItem = items[itemIndex];
      items.splice(itemIndex, 1);
      boughtItems.push(removedItem);
    }
  }
})();
