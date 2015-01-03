<?php

// include partial files
function include_partial($fileName, $vars = array())
{
    // initialize vars
    foreach ($vars as $varName => $varValue) {
        ${$varName} = $varValue;
    }
    // require partial
    require 'partial/' . $fileName;
}