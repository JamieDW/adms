<?php

namespace App\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class CarQueryBuilder extends Builder
{
    /**
     * Override the models eloquent builder.
     *
     * @return self
     */
    public function whereNew(): self
    {
        return $this->whereYear(date('Y'));
    }
}
