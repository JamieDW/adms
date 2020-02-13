<?php

namespace App\QueryBuilders;

use Illuminate\Database\Eloquent\Builder;

class CarQueryBuilder extends Builder
{
    /**
     * Find cars with the registration year matching the current year.
     *
     * @return self
     */
    public function whereNew(): self
    {
        return $this->where('year', date('Y'));
    }

    /**
     * Find cars by the car make.
     *
     * @return self
     */
    public function whereMake(string $make): self
    {
        return $this->where('make', $make);
    }

    /**
     * Find cars by the car make and model.
     *
     * @return self
     */
    public function whereMakeAndModel(string $make, string $model): self
    {
        return $this->whereMake($make)->where('model', $model);
    }

    /**
     * Find cars by the car make, model, and trim.
     *
     * @return self
     */
    public function whereMakeAndModelAndTrim(string $make, string $model, string $trim): self
    {
        return $this->whereMakeAndModel($make, $model)->where('trim', $trim);
    }

    /**
     * Find cars based on the cars price.
     *
     * @return self
     */
    public function wherePrice(int $minPrice = null, int $maxPrice = null): self
    {
        if(isset($minPrice) && is_null($maxPrice))
        {
            return $this->where('price', '>=', $minPrice);
        }

        if(isset($maxPrice) && is_null($minPrice))
        {
            return $this->where('price', '<=', $maxPrice);
        }

        return $this->whereBetween('price', [$minPrice, $maxPrice]);
    }

    /**
     * Find cars based on the cars mileage.
     *
     * @return self
     */
    public function whereMiles(int $minMiles = null, int $maxMiles = null): self
    {
        if(isset($minMiles) && is_null($maxMiles))
        {
            return $this->where('miles', '>=', $minMiles);
        }

        if(isset($maxMiles) && is_null($minMiles))
        {
            return $this->where('miles', '<=', $maxMiles);
        }

        return $this->whereBetween('miles', [$minMiles, $maxMiles]);
    }
}
