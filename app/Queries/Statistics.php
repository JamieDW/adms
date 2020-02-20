<?php

namespace App\Queries;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class Statistics
{
    /**
     * Retrieves a list of popular makes
     *
     */
    public static function popularMakes()
    {
        return Cache::remember('popular_makes', config('constants.cache.remember_ttl', 10080), function () {
            return DB::table('cars')
                ->selectRaw('make, COUNT(*) AS count')
                ->groupBy('make')
                ->orderBy('count', 'desc')
                ->limit(config('constants.popular_makes_limit', 10))
                ->get();
        });
    }
}
