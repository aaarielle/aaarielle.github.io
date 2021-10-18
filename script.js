var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  
  $scope.items = [
    {
      img: 'img/apple.png',
      name: 'Apple Watch Series 4- White',
      price: 2500
    },
    {
      img: 'img/iphone.jpg',
      name: 'iPhone 12 Pro Max - 126GB - White',
      price: 54500
    },
    {
      img: 'img/imac.jpg',
      name: 'iMac - White',
      price: 78999
    },
    {
      img: 'img/mc.jpg',
      name: 'MacBook Air - White',
      price: 150000
    },
    {
      img: 'img/dr.jpg',
      name: 'Samsung SHS-P171Digital Door Lock',
      price: 15500
    },
    {
      img: 'img/hermes.jpg',
      name: 'Hermes Apple Watch',
      price: 2500
    },
    {
      img: 'img/earbuds.jpg',
      name: 'Lenovo XT89 TWS Wireless Bluetooth Earbuds',
      price: 890
    },
    {
      img: 'img/chair.png',
      name: 'Predator Gaming Chair',
      price: 12559
    },
    {
      img: 'img/sseries.png',
      name: 'The Steel Series Arctis 9 Headphone',
      price: 9395
    },
    {
      img: 'img/gmouse.jpg',
      name: 'China 6D Rainbow Gaming Mouse',
      price: 800
    },
    {
      img: 'img/mechkb.jpg',
      name: 'ASUS Cerberus MKII 343',
      price: 2500
    },
    {
      img: 'img/instax.jpg',
      name: 'Instax Mini 9 - Blue',
      price: 3900
    },
    {
      img: 'img/11.jpg',
      name: 'iPhone 11 Pro - Mate Black',
      price: 49990
    },
    {
      img: 'img/ssd.jpg',
      name: 'Angelbird 500GB AVpro XT SATA III 2.5inch Internal SSD',
      price: 1500
    },
  ];
  
  $scope.myItems = [];

  $scope.addItem = function(newItem) {
    if($scope.myItems.length == 0) {
      newItem.count = 1;
      $scope.myItems.push(newItem);
    }else {
      var repeat = false;
      for( var i = 0; i < $scope.myItems.length; i++ ) {
        if($scope.myItems[i].name == newItem.name) {
          $scope.myItems[i].count++;
          repeat = true;
        }
      }
      if(!repeat) {
        newItem.count = 1;
        $scope.myItems.push(newItem);
      }
    }
    updatePrice();
  };
  

  var updatePrice = function() {
    var totalPrice = 0;
    for( var i = 0; i < $scope.myItems.length; i++ ) {
      totalPrice += ($scope.myItems[i].count) * ($scope.myItems[i].price);
    }
    $scope.totalPrice = totalPrice;
  };
  

  $scope.removeBasket = function() {
    $scope.myItems.splice(0, $scope.myItems.length);
    updatePrice();
  };
});

app.filter('reverse', function() {
  return function(items) {
    var x = items.slice().reverse();
    if( items.length > 1 ) {
      angular.element('#ok tr').css('background','#fff');
      angular.element('#ok tr').filter(':first').css('background','lightyellow');
      setTimeout(function() {
        angular.element('#ok tr') .filter(':first').css('background','#fff');
      }, 500);
    }
    return x;
  };
});