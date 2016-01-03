var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Cart",
    classis: "active",
    link: "#/cart",
    subnav: []
  },{
    name: "Mag",
    classis: "active",
    link: "#/mag",
    subnav: []
  },{
    name: "Like",
    classis: "active",
    link: "#/like",
    subnav: []
  },{
    name: "Product Detail",
    classis: "active",
    link: "#/productdetail",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  }
});
