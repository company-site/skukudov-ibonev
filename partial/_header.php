<!DOCTYPE html>
<html data-ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- JQ -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="../vendor/js/bootstrap-switch.js"></script>
    <script src="../vendor/js/jquery.easing.min.js"></script>
    <script src="../vendor/js/grayscale.js"></script>
    <!-- Custom Fonts -->
    <link href="../vendor/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="../vendor/css/bootstrap-switch.css">
    <!-- custom css -->
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../vendor/css/grayscale.css">
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
    <!-- angular -->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-sanitize.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-animate.js"></script>
    <base href="/" />
    <title ng-bind="title"><?php // echo $title; ?></title>
    <?php // echo $head; ?>
</head>
<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <div ng-include="'/app/navigation/navigation.html'"></div>
    <div ng-view=""></div>