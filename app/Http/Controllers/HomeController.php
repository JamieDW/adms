<?php

namespace App\Http\Controllers;




class HomeController extends Controller
{
    public function index()
    {
        $model = \App\Models\Model::all()->random();

        dd($model->make->name);
        // $faker = \Faker\Factory::create();
        // dd($faker->dateTimeBetween('-1 years')->format('Y'));

        // foreach (glob(public_path() . "/models/*.txt") as $filename) {

        //     $content = (file_get_contents($filename));



        //     if($content) {

        //         $make = Make::whereName(pathinfo($filename, PATHINFO_FILENAME))->first();

        //         if(isset($make)) {
        //             $models = array_filter(explode(',', $content));

        //             echo $make->name;
        //             echo "<br>";
        //             foreach ($models as $model) {

        //                 $modelModel = new Model();
        //                 $modelModel->make_id = $make->id;
        //                 $modelModel->name = $model;
        //                 $modelModel->save();
        //                 echo '&nbsp;&nbsp;&nbsp;&nbsp;' . $model;
        //                 echo "<br>";
        //             }
        //         }
        //     }
        // }
    }
}
