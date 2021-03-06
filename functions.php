<?php

/**
 * include partial files
 * @param string $fileName
 * @param array $vars
 */
function include_partial($fileName, $vars = array())
{
    // initialize vars
    foreach ($vars as $varName => $varValue) {
        ${$varName} = $varValue;
    }
    // require partial
    require 'partial/' . $fileName;
}

/**
 * Bootstrap the app, handle the routing
 * include files depending on routing
 */
function app_bootstrap() {
    $page = parse_url($_SERVER['REQUEST_URI']);
    $page = ($page['path'] != '/index.php') ? str_replace('/', '', $page['path']) : '';
    // all available pages
    $pages = array('about-us', 'dynamic-page', 'technologies');
    // have a selected page
    if (!empty($page)) {
        // page is in the available pages
        if (in_array($page, $pages)) {
            // remove dash and uppercase after it and lowercase the first one
            $page = lcfirst(implode(array_map(create_function('$v', 'return ucfirst($v);'), explode('-', $page)))) . '.php';
        }
        // page exist
        if (file_exists($page)) {
            // start buffer
            ob_start();
            // require file
            require $page;
            // get file content
            $content = ob_get_contents();
            // clean the buffer
            ob_end_clean();
            // page title
            $title = isset($title) ? $title : '';
            // additional head section
            $headSection = (isset($head) && is_array($head)) ? implode("\n", $head) : '';
            // header
            include_partial('_header.php', array('title' => $title, 'head' => $headSection));
            // show file content
            echo $content;
            // footer
            include_partial('_footer.php');
        } else {
            echo 'Page not found. Return to <a href="/">Home</a>';
        }
    } else {
        // default home page
        // header
        include_partial('_header.php', array('title' => 'home', 'head' => ''));
        // footer
        include_partial('_footer.php');
    }
}