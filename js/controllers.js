angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeController', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

//   $scope.section = {
//     one: "views/section/section1.html",
//     two: "views/section/section2.html",
//     three: "views/section/section3.html",
//     four: "views/section/section4.html",
//     five: "views/section/section5.html",
//     six: "views/section/section6.html",
//     seven: "views/section/section7.html",
//   };
//
//   $scope.wedo = [{
//     id: 1,
//     title: 'Musicals',
//     src: 'img/musical.jpg'
//   },{
//     id: 2,
//     title: 'Theatre',
//     src: 'img/theatre.jpg'
//   },{
//     id: 3,
//     title: 'Concerts',
//     src: 'img/concerts.jpg'
//   }];

})

.controller('CartController', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("cart");
  $scope.menutitle = NavigationService.makeactive("Cart");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('MagController', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("mag");
  $scope.menutitle = NavigationService.makeactive("Mag");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('LikeController', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("like");
  $scope.menutitle = NavigationService.makeactive("Like");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('ProductdetailController', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("productdetail");
  $scope.menutitle = NavigationService.makeactive("Product Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('HeaderController', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
