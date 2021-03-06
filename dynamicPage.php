<?php
$title = 'dynamic page';
$head = array('<script src="js/dynamicPage.js"></script>');
?>
<div class="container">
    <div class="container">
        <div class="row">
            <p class="lead">In this section you will see what dynamic page is.</p>
            <p>Difference between static and dynamic page is that the content in dynamic pages comes from you. The static ones can be changed only from the programmer.</p>
            <p>Let's create an article: </p>

            <form class="form-inline">
                <div class="form-group">
                    <label class="sr-only" for="category">Category</label>
                    <input type="text" class="form-control" id="category" placeholder="Enter article category">
                </div>
                <div class="form-group hidden">
                    <label class="sr-only" for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter article title">
                </div>
                <div class="form-group hidden">
                    <label class="sr-only" for="content">Content</label>
                    <input type="text" class="form-control" id="content" placeholder="Enter article content">
                </div>
                <button type="button" class="btn btn-default" id="continue">continue</button>
            </form>
        </div>
        <br/>

        <div class="row dynamic-content hidden">
            <p>Your dynamic content</p>
            <p>If you want articles in same category just type an existing category.</p>
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="javascript:void(0);" id="all">All</a></li>
            </ul>
            <div class="articles"></div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        var dynamicPage = DynamicPage();
        dynamicPage.appendHistory();
        dynamicPage.init();
    });
</script>