<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $list = [];

        if($request->has("filter.type", "filter.name"))
        {
            if($request->filter["type"] == "local")
            {
                $list = config("constants.lists.{$request->filter["name"]}");
            }
            elseif($request->type == 'db')
            {
                $list = [];
            }
        }

        return response()->json($list);
    }
}
