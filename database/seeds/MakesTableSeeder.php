<?php

use Illuminate\Database\Seeder;


class MakesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach(config('constants.makes') as $key) {
          App\Models\Make::create(['name' => $key]);
        }
    }
}
