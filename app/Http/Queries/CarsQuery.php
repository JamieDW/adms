<?php

namespace App\Http\Queries;

use App\Models\Car;

use Spatie\QueryBuilder\QueryBuilder;

class CarsQuery extends QueryBuilder
{
    public function __construct()
    {
        parent::__construct(Car::query());

        $this
            ->defaultSort('price')
            ->allowedSorts('price', 'miles', 'year')
            ->allowedFilters(['price', 'miles', 'make', 'model', 'trim']);
    }
}
