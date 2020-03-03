<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static Images()
 * @method static static Videos()
 * @method static static PanoramaImages()
 */
final class MediaCollectionType extends Enum
{
    const CoverImage     = 'cover-image';
    const Images         = 'images';
    const Videos         = 'videos';
    const PanoramaImages = 'panorama-images';
}
