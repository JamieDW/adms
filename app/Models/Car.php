<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use App\Scopes\PublishedScope;
use App\Enums\MediaCollectionType;
use App\Traits\Scopes;

use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\Models\Media;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use CyrildeWit\EloquentViewable\Viewable;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;
use ChristianKuri\LaravelFavorite\Traits\Favoriteable;

class Car extends Model implements ViewableContract, HasMedia
{
    use SoftDeletes, Scopes, LogsActivity, Viewable, Favoriteable, HasMediaTrait;

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'name',
        'cover_image',
        'price_formatted',
        'miles_formatted',
        'year_formatted',
        'engine_size_formatted',
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

    public static function SetCoverImages() {

        // $files = glob(public_path() . '/pics/*.*');
        // $car = self::find(10113);

        //     $car
        //         ->addMedia($files[0])
        //         ->withResponsiveImages()
        //         ->toMediaCollection(MediaCollectionType::CoverImage);


        // $files = glob(public_path() . '/pics/*.*');
        // $cars = self::all();
        // $i = 0;
        // foreach ($cars as $car) {
        //     $car
        //         ->addMedia($files[$i])
        //         ->withResponsiveImages()
        //         ->toMediaCollection(MediaCollectionType::CoverImage);
        //     $i++;
        // }
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
     * Register the media collections.
     *
     * @return array
     */
    public function registerMediaCollections(Media $media = null)
    {
        $this
            ->addMediaCollection(MediaCollectionType::CoverImage)
            ->acceptsMimeTypes(config('constants.supported_image_mimes'))
            ->withResponsiveImages()
            ->singleFile();
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
     * Register the media conversations.
     *
     * @return array
     */
    public function registerMediaConversions(Media $media = null)
    {
        $this
            ->addMediaConversion('webp')
            ->performOnCollections(MediaCollectionType::CoverImage, MediaCollectionType::Images)
            ->format('webp');
    }

    /**
     * Get the user for the given car model.
     */
    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }

    /**
     * Get the make for the given car model.
     */
    public function make()
    {
        return $this->belongsTo(\App\Models\Make::class);
    }

    /**
     * Get the model for the given car model.
     */
    public function model()
    {
        return $this->belongsTo(\App\Models\Model::class);
    }

    /**
     * Get the model for the given car model.
     */
    public function trim()
    {
        return $this->belongsTo(\App\Models\Trim::class);
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
    function getCoverImageAttribute()
    {
        $media = $this->getMedia(MediaCollectionType::CoverImage)->first();

        $cover = [
            'width'   => $media->responsiveImages()->files->first()->width(),
            'url'     => $media->getFullUrl(),
            'src_set' => $media->getSrcset()
        ];

        return $cover;
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
        return $this->year_id ? "{$this->year} ({$this->year_id} reg)" : $this->year;
    }

    /**
     * Get the car's formatted engine size.
     *
     * @return string
     */
    function getEngineSizeFormattedAttribute(): string
    {
        return number_format($this->engine_size / 1000, 1) . 'L';
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
