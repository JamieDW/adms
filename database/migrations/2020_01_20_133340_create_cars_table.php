<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->year('year');
            $table->string('year_id', 2)->nullable();
            $table->string('make');
            $table->string('model');
            $table->string('trim')->nullable();
            $table->unsignedInteger('price');
            $table->unsignedInteger('miles');
            $table->string('body_type');
            $table->string('transmission_type');
            $table->string('fuel_type');
            $table->float('engine_size', 8, 2);
            $table->string('colour');
            $table->longText('description')->nullable();
            $table->string('annual_tax')->nullable();
            $table->string('insurance_group')->nullable();
            $table->unsignedInteger('fuel_consumption')->nullable();
            $table->unsignedInteger('emissions')->nullable();
            $table->unsignedInteger('doors');
            $table->unsignedInteger('seats')->nullable();
            $table->unsignedInteger('boot_size')->nullable();
            $table->string('acceleration')->nullable();
            $table->unsignedInteger('power')->nullable();
            $table->unsignedInteger('top_speed')->nullable();
            $table->unsignedInteger('tank_range')->nullable();
            $table->string('drive_train')->nullable();
            $table->unsignedInteger('battery_range')->nullable();
            $table->string('charge_time')->nullable();
            $table->string('connector_type')->nullable();
            $table->char('damage_category', 1)->nullable();
            $table->json('features')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
