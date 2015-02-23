DynamicPage = function () {
    var dynamic = {
        category: "",
        title: "",
        content: "",
        formDivClass: "form-group",
        buttonId: "save",
        toastr: toastr,
        articles: []
    };

    dynamic.buttonClick = function () {
        $("." + dynamic.formDivClass).keypress(function(e) {
            // enter key is pressed
            if (e.which == 13) {
                dynamic.process();
            }
        });
        $("#" + this.buttonId).click(function () {
            dynamic.process();
        });
    };

    dynamic.process = function () {
        dynamic.category = $("#category").val();
        dynamic.title = $("#title").val();
        dynamic.content = $("#content").val();
        // category, title, content are not empty
        if (dynamic.category != "" && dynamic.title != "" && dynamic.content != "") {
            dynamic.cleanValues();
            dynamic.appendElements();
            dynamic.storeArticle();
            dynamic.cleanElements();
        }
    };

    dynamic.cleanValues = function () {
        dynamic.category = $.trim(dynamic.category);
        dynamic.title = $.trim(dynamic.title);
        dynamic.content = $.trim(dynamic.content);
    };

    dynamic.appendElements = function () {
        $(".dynamic-content-trigger").removeClass("hidden");
        $(".articles").append('<div class="article-block ' + dynamic.category + '"><h2>' + dynamic.title + '</h2><p class="lead">' + dynamic.content + '</p>');
        var category = '<li role="presentation"><a href="javascript:void(0);" id="' + dynamic.category + '" class="filter">' + dynamic.category + '</a></li>';
        // category doesn't exist
        if (!$("a#" + dynamic.category).length > 0) {
            $(".dynamic-content .nav-tabs").append(category);
            dynamic.filter($("a#" + dynamic.category));
            // force filtering by the new category
            $("a#" + dynamic.category).click();
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
        dynamic.articles.push({
            category: dynamic.category,
            title: dynamic.title,
            content: dynamic.content
        });
        // store in local cache
        sessionStorage.setItem('articles', JSON.stringify(dynamic.articles));
    };

    dynamic.appendHistory = function () {
        var articles = JSON.parse(sessionStorage.getItem('articles'));
        // we have history
        if (!$.isEmptyObject(articles)) {
            $.each(articles, function (i, el) {
                dynamic.category = el.category;
                dynamic.title = el.title;
                dynamic.content = el.content;
                dynamic.appendElements();
                dynamic.storeArticle();
                dynamic.cleanElements();
            });
        }
    };

    dynamic.init = function () {
        dynamic.toastr.options.closeButton = true;
        this.buttonClick();
        this.filter($("a#all"));
    };

    return dynamic;
};