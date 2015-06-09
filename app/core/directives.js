/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').directive('detectActiveTab', function ($location) {
    return {
      link: function postLink(scope, element, attrs) {
        scope.$on("$routeChangeSuccess", function (event, current, previous) {
            /*  
                Designed for full re-usability at any path, any level, by using 
                data from attrs. Declare like this: 
                <li class="nav_tab">
                  <a href="#/home" detect-active-tab="1">HOME</a>
                </li> 
            */

            // This var grabs the tab-level off the attribute, or defaults to 1
            var pathLevel = attrs.detectActiveTab || 1,
            // This var finds what the path is at the level specified
                pathToCheck = $location.url().split('/')[pathLevel] ||
                  "current $location.path doesn't reach this level",
            // This var finds grabs the same level of the href attribute
                tabLink = attrs.href.split('/')[pathLevel] ||
                  "href doesn't include this level";
            // Above, we use the logical 'or' operator to provide a default value
            // in cases where 'undefined' would otherwise be returned.
            // This prevents cases where undefined===undefined, 
            // possibly causing multiple tabs to be 'active'.

            // now compare the two:
            // add/remove to the parent of the a tag (li in this case)
            if (pathToCheck === tabLink || $location.url() === attrs.href)
            {
              element.addClass("active");
            }
            else {
              element.removeClass("active");
            }
        });
      }
    };
  });


