'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            redirectTo: 'friends'});

        $routeProvider.when('/friends', {
            templateUrl: 'partials/friends.html',
            controller: 'FriendsCtrl'});

        $routeProvider.when('/friend/:email', {
            templateUrl: 'partials/friend.html',
            controller: 'FriendCtrl'});

        $routeProvider.when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterCtrl'});

        $routeProvider.when('/addstatus', {
            templateUrl: 'partials/addstatus.html',
            controller: 'AddStatusCtrl'});

        $routeProvider.when('/addfriend', {
            templateUrl: 'partials/addfriend.html',
            controller: 'AddFriendCtrl'});

        $routeProvider.otherwise({
            redirectTo: 'friends'});
    }]);

app.run(function ($rootScope, $http) {
    var hasUserInfo = false;
    // shit
    if(!hasUserInfo){
        console.log("Getting user info");
        $http.get('/getUser')
            .success(function(user){
                $rootScope.GlobalCurrentUser = user;
                hasUserInfo= true;
            });
    }
});

