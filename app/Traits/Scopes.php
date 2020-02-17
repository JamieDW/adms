<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;

trait Scopes
{
    /**
     * Find cars which are published
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished(Builder $query)
    {
        return $query->whereDate('published_at', '<=', now());
    }

    /**
     * Find cars which are unpublished
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeUnpublished(Builder $query)
    {
        return $query->whereNull('published_at')->orWhereDate('published_at', '>', now());
    }

    /**
     * Find cars with the registration year matching the current year.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNew(Builder $query)
    {
        return $query->where('year', date('Y'));
    }

    /**
     * Find cars by the car make.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $make
     * @return \Illuminate\Database\Eloquent\Builder
     */
    private function scopeMake(Builder $query, string $make)
    {
        return $query->where('make', $make);
    }

    /**
     * Find cars by the car model.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    private function scopeModel(Builder $query, string $model)
    {
        return $query->where('make', $model);
    }

    /**
     * Find cars by the car trim.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $trim
     * @return \Illuminate\Database\Eloquent\Builder
     */
    private function scopeTrim(Builder $query, string $trim)
    {
        return $query->where('trim', $trim);
    }

    /**
     * Find cars by the car make, model, and trim.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string $make
     * @param string $model
     * @param string $trim
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeIdentity(Builder $query, string $make, string $model = "", string $trim = "")
    {
        if(empty($model) && empty($trim))
        {
            return $query->whereMake($make);
        }

        if(isset($model) && empty($trim))
        {
            return $query->whereMake($make)->whereModel($model);
        }

        return $query->whereMake($make)->whereModel($model)->whereTrim($trim);
    }

    /**
     * Find cars based on the cars price.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePrice(Builder $query, string $minPrice = "", string $maxPrice = "")
    {
        if(isset($minPrice) && empty($maxPrice))
        {
            return $query->where('price', '>=', $minPrice);
        }

        if(isset($maxPrice) && empty($minPrice))
        {
            return $query->where('price', '<=', $maxPrice);
        }

        return $query->whereBetween('price', [$minPrice, $maxPrice]);
    }

    /**
     * Find cars based on the cars year.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeYear(Builder $query, string $minYear = "", string $maxYear = "")
    {
        if(isset($minYear) && empty($maxYear))
        {
            return $query->where('year', '>=', $minYear);
        }

        if(isset($maxYear) && empty($minYear))
        {
            return $query->where('year', '<=', $maxYear);
        }

        return $query->whereBetween('year', [$minYear, $maxYear]);
    }

    /**
     * Find cars based on the cars mileage.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeMiles(Builder $query, string $minMiles = "", string $maxMiles = "")
    {
        if(isset($minMiles) && empty($maxMiles))
        {
            return $query->where('miles', '>=', $minMiles);
        }

        if(isset($maxMiles) && empty($minMiles))
        {
            return $query->where('miles', '<=', $maxMiles);
        }

        return $query->whereBetween('miles', [$minMiles, $maxMiles]);
    }
}
