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
                AllowedFilter::scope('identity')->ignore(null),
                AllowedFilter::scope('price')->ignore(null),
                AllowedFilter::scope('year')->ignore(null),
                AllowedFilter::exact('mileage')->ignore(null),
                AllowedFilter::exact('make')->ignore(null),
                AllowedFilter::exact('model')->ignore(null),
                AllowedFilter::exact('trim')->ignore(null),
                AllowedFilter::exact('body_type')->ignore(null),
                AllowedFilter::exact('transmission_type')->ignore(null),
                AllowedFilter::exact('fuel_type')->ignore(null),
                AllowedFilter::exact('engine_size')->ignore(null),
                AllowedFilter::exact('colour')->ignore(null),
                ]);
    }
}
