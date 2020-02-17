<?php

namespace App\Http\Queries;

use App\Models\Car;

use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;

class CarsQuery extends QueryBuilder
{
    public function __construct()
    {
        parent::__construct(Car::query());

        $this
            ->defaultSort('published_at')
            ->allowedSorts(
                AllowedSort::field('date', 'published_at'),
                'price',
                'miles',
                'year')
            ->allowedFilters([
                AllowedFilter::scope('identity')->ignore(null),
                AllowedFilter::scope('price')->ignore(null),
                AllowedFilter::scope('year')->ignore(null),
                AllowedFilter::scope('miles')->ignore(null),
                AllowedFilter::exact('body_type')->ignore(null),
                AllowedFilter::exact('transmission_type')->ignore(null),
                AllowedFilter::exact('fuel_type')->ignore(null),
                AllowedFilter::exact('engine_size')->ignore(null),
                AllowedFilter::exact('colour')->ignore(null),
                ]);
    }
}
