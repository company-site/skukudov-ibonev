(function() {
    angular.module('app')
        .directive('contactForm', function() {
            return {
                restrict: 'E',
                controller: function($scope, $rootScope, $http){
                    $scope.contactForm = {};
        
                    $scope.submitForm = function () {
                        $http({
                            url: '/mail/sendMail.php',
                            method: 'POST',
                            params: { contactForm: JSON.stringify($scope.contactForm) }
                        })
                        .success(function(data, status) {
                            console.log(data, status);
                            toastr.success(data.message);
                            $scope.contactForm = {};
                            $rootScope.$broadcast('contactFormSuccess', "sent");
                        })
                        .error(function(data, status) {
                            console.log(data, status);
                            toastr.error(data.message); 
                        });
                    };
                },
                templateUrl: '/app/core/directives/contactForm/contactForm.html'
              }
        });
})();