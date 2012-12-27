!function(){
        "use strict";   
        var ModelPageView = function(){
            this.init();
        };

        ModelPageView.prototype = {
            constructor: ModelPageView,

            init: function(){
                this.hello = "hello";
                this.withTrue = function(){
                    alert("hey there");
                    return true;
                };

                this.withoutTrue = function(){
                    alert("hey there");
                }

            }
        };

        var modelPageView = new ModelPageView();

        ko.applyBindings(modelPageView);
}();

Sammy(function () {
    this.post(/.*withSammy.html.*/, function(){
        alert("hello");
    });

    this.get(/.*index.html/, function(){
        console.log("hitting the index");
    });
}).run();


