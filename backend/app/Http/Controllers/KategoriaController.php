<?php

namespace App\Http\Controllers;
use App\Models\Kategoria;
use Response;

class KategoriaController extends Controller
{
    public function kat(){
        $kat = Kategoria::all();
        return Response::json($kat);
    }
}
