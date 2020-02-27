<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use MakeHelper;

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
            elseif($request->filter["type"] == 'db')
            {
                $list = call_user_func_array(
                    array($this, $request->filter["name"]),
                    array($request->filter)
                );
            }
        }

        return response()->json($list);
    }

    public function makes() {
        return Cache::remember('makes', config('constants.cache.remember_ttl', 10080), function () {
            $results = \App\Models\Make::select('id', 'name')
                ->withCount('cars')
                ->get()
                ->where('cars_count', '>', 0);

            return \App\Helpers\ListHelper::ToSelectList($results);
        });
    }

    public function models($filter) {

        $results = \App\Models\Model::ByMakeId($filter["id"])
            ->withCount('cars')
            ->get()
            ->where('cars_count', '>', 0);

        return \App\Helpers\ListHelper::ToSelectList($results);
    }
}
