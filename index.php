<?php
include_partial('_header.php');
$page = isset($_GET['page']) ? $_GET['page'] : '';
// all available pages
$pages = array('about-us');
if (!empty($page)) {
    // page is in the available pages
    if (in_array($page, $pages)) {
        // remove dash and uppercase after it
        $page = lcfirst(implode(array_map(create_function('$v', 'return ucfirst($v);'), explode('-', $page)))) . '.php';
    }
    // page exist
    if (file_exists($page)) {
        require $page;
        include_partial('_footer.php');
    } else {
        echo 'Page not found. Return to <a href="/">Home</a>';
    }
}

function include_partial($fileName, $vars = array())
{
    foreach ($vars as $varName => $varValue) {
        ${$varName} = $varValue;
    }

    require 'partial/' . $fileName;
}