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
      $faker = (new \Faker\Factory())::create();
      $faker->addProvider(new \Faker\Provider\Fakecar($faker));

      for ($i = 0; $i < 1000; $i++) {

        $model = App\Models\Model::all()->random();

        $car = new App\Models\Car([
            'vin'               => $faker->vin(),
            'registration'      => $faker->vehicleRegistration(),
            'year'              => $faker->randomElement(array_keys(config('constants.years'))),
            'make_id'           => $model->make_id,
            'model_id'          => $model->id,
            'price'             => $faker->numberBetween(500, 20000),
            'miles'             => $faker->numberBetween(1000, 120000),
            'body_type'         => $faker->randomElement(config('constants.lists.body_types')),
            'transmission_type' => $faker->randomElement(config('constants.lists.transmission_types')),
            'fuel_type'         => $faker->randomElement(config('constants.lists.fuel_types')),
            'engine_size'       => $faker->randomElement(array(900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000)),
            'colour'            => $faker->randomElement(config('constants.lists.colours')),
            'description'       => $faker->text(),
            'doors'             => $faker->randomElement(array(2, 4, 6)),
            'seats'             => $faker->randomElement(array(2, 4 ,5, 8)),
            'damage_category'   => $faker->optional(0.1)->randomElement(array('A', 'B', 'N', 'S')),
            'published_at'      => $faker->optional(0.8)->dateTimeBetween('-7 days', Carbon::now()),
            ]
          );



          if($car->year == date('Y')) {
            $car->new = $faker->boolean();
          } else if($car->year == (date('Y') - 1)) {
            $car->new = $faker->boolean(0.2);
          }else if($car->year == (date('Y') - 2)) {
            $car->new = $faker->boolean(0.1);
          }

          $yearIds = config("constants.years.$car->year");
          if(isset($yearIds) && is_array($yearIds)) {
              $car->year_id = $faker->randomElement($yearIds);
          }

        $car->save();
      }
    }
}
