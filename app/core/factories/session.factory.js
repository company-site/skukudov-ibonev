(function(){
    angular.module('app')
            .factory('SessionService', SessionService);
    
    SessionService.$inject = ['$window'];
    
    function SessionService($window) {
        var service = {
            setValue: setValue,
            getValue: getValue
        };

        return service;
        
        function setValue(name, value){
            sessionStorage.setItem(name, JSON.stringify(value));
        }
        
        function getValue(name){
            return JSON.parse(sessionStorage.getItem(name));
        }
    }
})();