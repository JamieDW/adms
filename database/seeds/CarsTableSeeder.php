<?php

use Illuminate\Database\Seeder;

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

      for ($i = 0; $i < 10000; $i++) {

        $model = App\Models\Model::all()->random();

        $car = new App\Models\Car([
            'year'              => $faker->randomElement(config('constants.years')),
            'make'              => $model->make->name,
            'model'             => $model->name,
            'price'             => $faker->numberBetween(500, 20000),
            'miles'             => $faker->numberBetween(1000, 120000),
            'body_type'         => $faker->randomElement(config('constants.body_types')),
            'transmission_type' => $faker->randomElement(config('constants.transmission_types')),
            'fuel_type'         => $faker->randomElement(config('constants.fuel_types')),
            'engine_size'       => $faker->randomFloat(0, 1.0, 2.0),
            'colour'            => $faker->randomElement(config('constants.colours')),
            'description'       => $faker->text(),
            'doors'             => $faker->randomElement(array(2, 3, 4, 5, 6)),
            'damage_category'   => $faker->optional(0.1)->randomElement(array('A', 'B', 'N', 'S')),
            ]
          );

        $car->year_id = $faker->randomElement(config('constants.years.' . $car->year));

        $car->save();
      }
    }
}
// $table->bigIncrements('id');
// $table->year('year');
// $table->string('make');
// $table->string('model');
// $table->string('trim')->nullable();
// $table->unsignedInteger('price');
// $table->unsignedInteger('miles');
// $table->string('body_type');
// $table->boolean('automatic');
// $table->string('fuel_type');
// $table->float('engine_size', 8, 1  );
// $table->string('colour');
// $table->longText('description')->nullable();
// $table->string('annual_tax')->nullable();
// $table->string('insurance_group')->nullable();
// $table->unsignedInteger('fuel_consumption')->nullable();
// $table->unsignedInteger('emissions')->nullable();
// $table->unsignedInteger('doors');
// $table->unsignedInteger('seats')->nullable();
// $table->unsignedInteger('boot_size')->nullable();
// $table->string('acceleration')->nullable();
// $table->unsignedInteger('power')->nullable();
// $table->unsignedInteger('top_speed')->nullable();
// $table->unsignedInteger('tank_range')->nullable();
// $table->string('drive_train')->nullable();
// $table->unsignedInteger('battery_range')->nullable();
// $table->string('charge_time')->nullable();
// $table->string('connector_type')->nullable();
// $table->char('damage_category', 1)->nullable();
// $table->json('features')->nullable();
