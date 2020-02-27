<?php

namespace App\Helpers;

class ListHelper
{
    public static function ToSelectList($collection) {

        $array = $collection->toArray();

        $array = array_map(function($element) {
            return array(
                'value' => $element['id'],
                'text' => "{$element['name']} ({$element['cars_count']})"
            );
        }, $array);

        return $array;
    }
}
