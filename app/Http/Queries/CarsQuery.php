<?php

namespace App\Http\Queries;

use App\Models\Car;

use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class CarsQuery extends QueryBuilder
{
    public function __construct()
    {
        parent::__construct(Car::query());

        $this
            ->defaultSort('price')
            ->allowedSorts('price', 'miles', 'year', 'published_at')
            ->allowedFilters([
                AllowedFilter::scope('min_price'),
                AllowedFilter::exact('miles'),
                AllowedFilter::exact('make'),
                AllowedFilter::exact('model'),
                AllowedFilter::exact('trim'),
                AllowedFilter::exact('body_type'),
                AllowedFilter::exact('transmission_type'),
                AllowedFilter::exact('fuel_type'),
                AllowedFilter::exact('engine_size'),
                AllowedFilter::exact('colour'),
                ]);
    }
}
