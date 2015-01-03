DynamicPage = function () {
    var dynamic = {
        category: "",
        title: "",
        content: "",
        formDivClass: "form-group",
        buttonId: "continue"
    };

    dynamic.buttonClick = function () {
        $("#" + this.buttonId).click(function () {
            var input = $("." + dynamic.formDivClass + ":not(.hidden) :input");
            if (input.val()) {
                if (input.attr("id") == "category") {
                    dynamic.category = input.val();
                }
                if (input.attr("id") == "title") {
                    dynamic.title = input.val();
                }
                if (input.attr("id") == "content") {
                    dynamic.content = input.val();
                }
                dynamic.toggleElements();
                // category, title, content are not empty
                if (dynamic.category != "" && dynamic.title != "" && dynamic.content != "") {
                    dynamic.appendElements();
                    dynamic.cleanElements();
                }
            }
        });
    };

    dynamic.toggleElements = function () {
        var visibleDiv = $("." + this.formDivClass + ":not(.hidden)");
        $("." + this.formDivClass + ":not(.hidden)").next().removeClass("hidden");
        visibleDiv.addClass("hidden");
    };

    dynamic.appendElements = function () {
        $(".dynamic-content").removeClass("hidden");
        var category = '<li role="presentation" class="' + dynamic.category + '"><a href="javascript:void(0)">' + dynamic.category + '</a></li>';
        $(".dynamic-content .nav-tabs").append(category);
        console.log(dynamic.category, dynamic.title, dynamic.content);
    };

    dynamic.cleanElements = function () {
        this.category = "";
        this.title = "";
        this.content = "";
        $(".form-inline").children(':first').removeClass("hidden");
        $.each($(".form-group :input"), function (i, e) {
            $(e).val("");
        });
    };

    dynamic.init = function () {
        this.buttonClick();
    };

    return dynamic;
};