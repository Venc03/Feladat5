<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Response;

class TesztController extends Controller
{
    public function teszt(){
        $test = Teszt::all();
        return Response::json($test);
    }
}
