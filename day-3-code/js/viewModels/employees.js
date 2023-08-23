define(['knockout'], function(ko){

    function employeesViewModel(){

        var self = this;

        // Observables for name and age
        self.name = ko.observable("Purushotham");
        self.age  = ko.observable("35");

    }

    return employeesViewModel;

})