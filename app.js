var app = angular.module('app', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/login', {
        templateUrl: 'login.html', 
        controller:'LoginController' 
    });
    $routeProvider.when('/home', {
        templateUrl: 'home.html', 
        controller: 'HomeController'
    });
    $routeProvider.otherwise({redirectTo:'login'});
});

app.directive('copyright', function(){
    return {
        restrict: 'AE',
        template: '(c) 2013 BARS Level Up'
    };
});

app.controller('LoginController', function(){
$scope.asdf = "Hello motherfucker!";
});

app.controller('HomeController', function(){

});

app.directive('draggable', function($document) {
    return function(scope, element, attr) {
      var startX = 0, startY = 0, x = 0, y = 0;
 
      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });
 
      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });
 
      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }
 
      function mouseup() {
        $document.unbind('mousemove', mousemove);
        $document.unbind('mouseup', mouseup);
      }
    }
  });