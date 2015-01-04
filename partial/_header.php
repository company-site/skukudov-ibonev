<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
    <!-- Custom styles for cover template -->
    <link href="web/css/cover.css" rel="stylesheet">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <!-- angular -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min.js"></script>
    <!-- JQ -->
    <title><?php echo $title; ?></title>
    <?php echo $head; ?>
</head>
<body>

<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Logo</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li <?php echo (strpos($_SERVER['REQUEST_URI'], 'about-us') === false) ? '' : ' class="active"'; ?>><a href="/about-us">About us</a></li>
            </ul>
            <ul class="nav navbar-nav">
                <li <?php echo (strpos($_SERVER['REQUEST_URI'], 'dynamic-page') === false) ? '' : ' class="active"'; ?>><a href="/dynamic-page">Dynamic page</a></li>
            </ul>
        </div>
        <!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>