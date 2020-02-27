<?php

if (!function_exists('change_key')) {

    function replace_key($arr, $oldkey, $newkey) {

        $json = str_replace('"'.$oldkey.'":', '"'.$newkey.'":', json_encode($arr));
        return json_decode($json);
    }
}
