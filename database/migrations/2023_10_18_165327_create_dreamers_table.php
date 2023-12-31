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
        Schema::create('dreamers', function (Blueprint $table) {
            $table->id();
            $table->integer('group_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('name');
            $table->string('birthdate');
            $table->integer('avatar');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dreamers');
    }
};
