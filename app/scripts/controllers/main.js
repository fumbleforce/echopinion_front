'use strict';

angular.module('echopinion')
  .controller('MainCtrl', function ($scope) {
    var trendingTags = [
      { text: 'HTML5', weight: 15 },
      { text: 'Bootstrap', weight: 10 },
      { text: 'Github', weight: 3 },
      { text: 'Asana', weight: 5 },
      { text: 'Grunt', weight: 11 },
      { text: 'Angular', weight: 6 },
      { text: 'WebKit', weight: 18 },
      { text: 'Google', weight: 2 },
      { text: 'SublimeText', weight: 4 },
      { text: 'LinuxMint', weight: 4 },
      { text: 'Twitter', weight: 14 },
      { text: 'Facebook', weight: 13 },
      { text: 'JavaScript', weight: 9 },
      { text: 'Golang', weight: 5 },
      { text: 'Jade', weight: 7 },
      { text: 'Stylus', weight: 10 },
      { text: 'CSS', weight: 16 },
    ];

    $(function () {
      $("#hashtags").jQCloud(trendingTags);
    });

  });
