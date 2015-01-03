<?php
$title = 'dynamic page';
$head = array('<script src="js/dynamicPage.js"></script>');
?>
<div class="container">
    <div class="row">
        <p>Let's create an article</p>

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
        <ul class="nav nav-tabs"></ul>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function () {
        var dynamicPage = DynamicPage();
        dynamicPage.init();
    });
</script>