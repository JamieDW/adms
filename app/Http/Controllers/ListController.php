<?php

namespace App\Http\Controllers;

use App\Helpers\ArrayHelper;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Symfony\Component\Console\Helper\Helper;

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
                    $request->filter
                );
            }
        }

        return response()->json($list);
    }

    public function makes() {

        return Cache::remember('makes', config('constants.cache.remember_ttl', 10080), function () {
            $results = \App\Models\Make::all()->toArray();
            $results = replace_key($results, 'id', 'value');
            $results = replace_key($results, 'name', 'text');
            return $results;
        });
    }

    public function models($make) {
        return \App\Models\Model::ByMake($make->filter["id"])->get();
    }


}
