<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;
use Response;

class TesztController extends Controller
{
    public function teszt(){
        $test = Teszt::all();
        return Response::json($test);
    }
}
