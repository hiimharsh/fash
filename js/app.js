// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeController'
    })
    .state('mag', {
        url: "/mag",
        templateUrl: "views/template.html",
        controller: 'MagController'
    })
    .state('cart', {
        url: "/cart",
        templateUrl: "views/template.html",
        controller: 'CartController'
    })
    .state('like', {
        url: "/like",
        templateUrl: "views/template.html",
        controller: 'LikeController'
    })
    .state('productdetail', {
        url: "/productdetail",
        templateUrl: "views/template.html",
        controller: 'ProductdetailController'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
