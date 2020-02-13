<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Scopes\PublishedScope;
use App\Enums\MediaCollectionType;
use App\QueryBuilders\CarQueryBuilder;

use Carbon\Carbon;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use CyrildeWit\EloquentViewable\Viewable;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;
use ChristianKuri\LaravelFavorite\Traits\Favoriteable;


class Car extends Model implements ViewableContract, HasMedia
{
    use SoftDeletes, LogsActivity, Viewable, Favoriteable, HasMediaTrait;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'name',
        'image',
        'price_formatted',
        'miles_formatted',
        'year_formatted',
        'engine_size_formatted',
        'is_new',
        'favourited'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'published_at',
    ];

    protected static $logAttributes = ['*'];

    protected static $logOnlyDirty = true;

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new PublishedScope);
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
     * Override the models eloquent builder.
     *
     * @return CarQueryBuilder
     */
    public function newEloquentBuilder($query): CarQueryBuilder
    {
        return new CarQueryBuilder($query);
    }

    /**
     * Register the media collections.
     *
     * @return array
     */
    public function registerMediaCollections()
    {
        $this
            ->addMediaCollection(MediaCollectionType::Images)
            ->acceptsMimeTypes(config('constants.supported_image_mimes'))
            ->onlyKeepLatest(config('constants.media_collection_limit.large'))
            ->withResponsiveImages();

        $this
            ->addMediaCollection(MediaCollectionType::Videos)
            ->acceptsMimeTypes(config('constants.supported_video_mimes'))
            ->onlyKeepLatest(config('constants.media_collection_limit.small'));

        $this
            ->addMediaCollection(MediaCollectionType::PanoramaImages)
            ->acceptsMimeTypes(config('constants.supported_panorama_image_mimes'))
            ->onlyKeepLatest(config('constants.media_collection_limit.tiny'));
    }

    /**
     * Get the car's full make and model.
     *
     * @return string
     */
    function getNameAttribute(): string
    {
        return "{$this->make} {$this->model}";
    }

    /**
     * Get the car's image.
     *
     * @return string
     */
    function getImageAttribute(): string
    {
        return "https://via.placeholder.com/600x400/4a5568/fff";
    }

    /**
     * Get the car's formatted price.
     *
     * @return string
     */
    function getPriceFormattedAttribute(): string
    {
        return '£' . number_format($this->price);
    }

    /**
     * Get the car's formatted Mileage.
     *
     * @return string
     */
    function getMilesFormattedAttribute(): string
    {
        return number_format($this->miles) . ' miles';
    }

    /**
     * Get the car's formatted year.
     *
     * @return string
     */
    function getYearFormattedAttribute(): string
    {
        return "{$this->year} ({$this->year_id} reg)";
    }

    /**
     * Get the car's formatted engine size.
     *
     * @return string
     */
    function getEngineSizeFormattedAttribute(): string
    {
        return $this->engine_size . 'L';
    }

    /**
     * Determines if the car is new by comparing the car years against the current year
     *
     * @return bool
     */
    function getIsNewAttribute(): bool
    {
        return $this->year == date('Y');
    }

    /**
     * Get
     *
     * @return bool
     */
    function getFavouritedAttribute(): bool
    {
        return $this->isFavorited();
    }
}
