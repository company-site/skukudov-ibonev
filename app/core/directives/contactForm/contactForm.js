(function() {
    angular.module('app')
        .directive('contactForm', function() {
            return {
                restrict: 'E',
                controller: function($scope, $rootScope, $http){
                    $scope.form = {};
                    var fields = ['name', 'email', 'website', 'company', 'message'];
                    
                    $scope.submitForm = function (form) {
                        console.log(form.$vaild, form);
                        if(form.$vaild) {
                            console.log('valid');
                            $http({
                                url: '/mail/sendMail.php',
                                method: 'POST',
                                params: { contactForm: JSON.stringify($scope.form) }
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
                        } else {
                            angular.forEach(fields, function(field) {
                                console.log(form[field]);
                                form[field].$dirty = true;
                            });
                        }
                        
                    };
                },
                templateUrl: '/app/core/directives/contactForm/contactForm.html'
              }
        });
})();