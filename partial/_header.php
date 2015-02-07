<!DOCTYPE html>
<html data-ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- JQ -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="../vendor/js/jquery.easing.min.js"></script>

    <!-- Bootstrap -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <!-- Optional theme -->
    <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">-->
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>

    <!-- Grayscale Theme css and js -->
    <link rel="stylesheet" href="../vendor/css/grayscale.css">
    <!--    <script src="../vendor/js/grayscale.js"></script>-->
    <!-- Grayscale Custom Fonts -->
    <link href="../vendor/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet"
          type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

    <!-- custom css and js -->
    <link rel="stylesheet" href="../css/styles.css">
    <script src="../js/dynamicPage.js"></script>
    <link href="/vendor/toastr/toastr.css" rel="stylesheet"/>
    <script src="/vendor/toastr/toastr.js"></script>

    <!-- angular -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-sanitize.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-animate.js"></script>
    <!-- jquery sidebar start -->
    <script type="text/javascript" src="http://code.jquery.com/ui/1.8.13/jquery-ui.min.js"></script>
    <link href="../vendor/jquery.sidebar/css/dark-glass/sidebar.css" rel="stylesheet" type="text/css">
    <script src="../vendor/jquery.sidebar/src/jquery.sidebar.js"></script>
    <!-- jquery sidebar end -->

    <!-- button switcher start -->
    <link href="../vendor/button.switcher/normalize.css" rel="stylesheet" type="text/css">
    <script src="../vendor/button.switcher/prefixfree.min.js"></script>
    <!-- button switcher end -->

    <base href="/"/>
    <title ng-bind="title"><?php // echo $title; ?></title>
    <?php // echo $head; ?>
</head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
<div class="conatiner">
    <div ng-include="'/app/navigation/navigation.html'"></div>
    <br/><br/>
    <header class="intro">
        <div ng-view=""></div>
    </header>