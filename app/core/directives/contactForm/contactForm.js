(function() {
    angular.module('app')
        .directive('contactForm', function() {
            return {
                restrict: 'E',
                controller: function($scope, $rootScope, $http){
                    $scope.form = {};
                    var fields = ['name', 'email', 'message'];
                    
                    $scope.submitForm = function (contactForm) {
                        if(contactForm.$valid) {
                            $http({
                                url: '/mail/sendMail.php',
                                method: 'POST',
                                params: { contactForm: JSON.stringify($scope.form) }
                            })
                            .success(function(data, status) {
                                console.log(data, status);
                                toastr.success(data.message);
                                $scope.form = {};
                                $rootScope.$broadcast('contactFormSuccess', "sent");
                                angular.forEach(fields, function(field) {
                                    contactForm[field].$dirty = false;
                                });
                            })
                            .error(function(data, status) {
                                console.log(data, status);
                                toastr.error(data.message); 
                            });
                        } else {
                            angular.forEach(fields, function(field) {
                                contactForm[field].$dirty = true;
                            });
                        }
                        
                    };
                },
                templateUrl: '/app/core/directives/contactForm/contactForm.html'
              }
        });
})();