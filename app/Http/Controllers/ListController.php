<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
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
                $list = call_user_func_array($request->filter["name"], $request->filter);
            }
        }

        return response()->json($list);
    }

    public function makes() {
        return Cache::remember('makes', config('constants.cache.remember_ttl', 10080), function () {
            return \App\Models\Make::all();
        });
    }

    public function models($make) {
        return \App\Models\Model::ByMake($make->filter["id"])->get();
    }


}
