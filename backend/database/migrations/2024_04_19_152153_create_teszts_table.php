<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teszts', function (Blueprint $table) {
            $table->id();
            $table->string("kerdes");
            $table->string("v1");
            $table->string("v2");
            $table->string("v3");
            $table->string("v4");
            $table->string("helyes")->default("v1");
            $table->foreignId("kategoriaId")->references("id")->on("kategorias");
            $table->timestamps();
        });

        DB::table("teszts")->insert([
            ["kerdes" => "Mi a videokártya?", "v1" => "Hardver", "v2" => "Szoftver", "v3" => "OP rendszer", "v4" => "Programozónyelv", "helyes" => "v1", "kategoriaId" => "1"],
            ["kerdes" => "Mennyi 1+1?", "v1" => "4", "v2" => "2", "v3" => "7", "v4" => "0", "helyes" => "v2", "kategoriaId" => "2"]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszts');
    }
};
