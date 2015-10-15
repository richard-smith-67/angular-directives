/**
 * Created by richard.smith on 15/10/2015.
 */
(function(){
    "use strict";
    angular
        .module('app',[])
        .directive('basicComponent', function(){

            function BasicCtrl() {
                var vm = this;

                //Note how name and age have been bound from localised scope
                vm.saySomething = 'My speed is ' + vm.speed + ' and age is ' + vm.age + ' and height is ' + vm.height;
            }

            //return a directive definition object
            return {

                //restrict to element
                restrict: 'EA',
                //name and age are params passed in using attributes
                //and this is a localised scope
                scope: {

                    age: '=',
                    height: '=',
                    speed: '='

                },
                //bind localised scope property controller
                bindToController: true,
                template: '<h2>{{basic.saySomething}}</h2>',
                controller: BasicCtrl,
                controllerAs: 'basic'
            };

        });

})();