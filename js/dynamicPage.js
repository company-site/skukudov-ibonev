DynamicPage = function () {
    var dynamic = {
        category: "",
        title: "",
        content: "",
        formDivClass: "form-group",
        buttonId: "continue",
        toastr: toastr,
        articles: {}
    };

    dynamic.buttonClick = function () {
        $("#" + this.buttonId).click(function () {
            var input = $("." + dynamic.formDivClass + ":not(.hidden) :input");
            if (input.val()) {
                if (input.attr("id") == "category") {
                    dynamic.category = input.val();
                    dynamic.toastr.success('Your category has been stored. Please enter a title for your article');
                }
                if (input.attr("id") == "title") {
                    dynamic.title = input.val();
                    dynamic.toastr.success('Almost there. Your title has been stored. Please enter a content for your article');
                }
                if (input.attr("id") == "content") {
                    dynamic.content = input.val();
                }
                dynamic.toggleElements();
                // category, title, content are not empty
                if (dynamic.category != "" && dynamic.title != "" && dynamic.content != "") {
                    dynamic.appendElements();
                    dynamic.storeArticle();
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
        $(".articles").append('<div class="article-block ' + dynamic.category + '"><h2>' + dynamic.title + '</h2><p class="lead">' + dynamic.content + '</p>');
        var category = '<li role="presentation"><a href="javascript:void(0);" id="' + dynamic.category + '" class="filter">' + dynamic.category + '</a></li>';
        // category doesn't exist
        if (!$("a#" + dynamic.category).length > 0) {
            $(".dynamic-content .nav-tabs").append(category);
            dynamic.filter($("a#" + dynamic.category));
        }
    };

    dynamic.filter = function (element) {
        element.click(function () {
            $("li[role='presentation']").removeClass("active");
            element.parent().addClass("active");
            $(".article-block").hide();
            if (element.attr("id") == "all") {
                $(".article-block").show();
            } else {
                $(".article-block." + element.attr("id")).show();
            }
        });
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

    dynamic.storeArticle = function () {
        var stores = {};
        if (dynamic.articles.hasOwnProperty(dynamic.category)) {
            stores.titles = dynamic.articles[dynamic.category].title;
            stores.content = dynamic.articles[dynamic.category].content;
        }
        dynamic.articles[dynamic.category] = {
            title: [dynamic.title],
            content: [dynamic.content]
        };
        if (!$.isEmptyObject(stores)) {
            $.each(stores, function (index, element) {
                if (index == "titles") {
                    dynamic.articles[dynamic.category].title.push(element[0]);
                } else {
                    dynamic.articles[dynamic.category].content.push(element[0]);
                }
            });
        }
        // store in local cache
        localStorage.setItem('articles',JSON.stringify(dynamic.articles));
    };

    dynamic.appendHistory = function () {
        var articles = JSON.parse(localStorage.getItem('articles'));
        console.log(articles);
    };

    dynamic.init = function () {
        dynamic.toastr.options.closeButton = true;
        this.buttonClick();
        this.filter($("a#all"));
    };

    return dynamic;
};