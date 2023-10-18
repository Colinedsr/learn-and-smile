<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dreamer extends Model
{
    protected $table = 'dreamers';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'birthdate',
        'avatar',
        'group_id',
    ];

}
