<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $minYear   = config('constants.car.min_year', 1990);
        $maxYear   = now('Y');
        $bodyTypes = config('constants.car.body_types');

        return [
            'year'      => "required|integer|between:$minYear,$maxYear",
            'body_type' => "required|in:$bodyTypes",
        ];
    }
}
