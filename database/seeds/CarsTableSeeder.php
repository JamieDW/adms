<?php

use Illuminate\Database\Seeder;

use Carbon\Carbon;

class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $faker = \Faker\Factory::create();

      for ($i = 0; $i < 1000; $i++) {

        $model = App\Models\Model::all()->random();

        $car = new App\Models\Car([
            'year'              => $faker->randomElement(array_keys(config('constants.years'))),
            'make'              => $model->make->name,
            'model'             => $model->name,
            'price'             => $faker->numberBetween(500, 20000),
            'miles'             => $faker->numberBetween(1000, 120000),
            'body_type'         => $faker->randomElement(config('constants.car.body_types')),
            'transmission_type' => $faker->randomElement(config('constants.car.transmission_types')),
            'fuel_type'         => $faker->randomElement(config('constants.car.fuel_types')),
            'engine_size'       => $faker->randomFloat(0, 1.0, 2.0),
            'colour'            => $faker->randomElement(config('constants.car.colours')),
            'description'       => $faker->text(),
            'doors'             => $faker->randomElement(array(2, 3, 4, 5, 6)),
            'damage_category'   => $faker->optional(0.1)->randomElement(array('A', 'B', 'N', 'S')),
            'published_at'      => $faker->optional(0.8)->dateTimeBetween('-7', Carbon::now()->addDays(7)),
            ]
          );

          $yearIds = config("constants.years.$car->year");

          if(isset($yearIds) && is_array($yearIds)) {
              $car->year_id = $faker->randomElement($yearIds);
          }

        $car->save();
      }
    }
}
