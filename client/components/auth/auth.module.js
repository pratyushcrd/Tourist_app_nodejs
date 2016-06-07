'use strict';

angular.module('touristApp.auth', ['touristApp.constants', 'touristApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
