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