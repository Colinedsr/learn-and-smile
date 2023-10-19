<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $table = 'groups';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'user_id',
    ];

    public function getDreamersByGroupId(int $groupId): array
    {
        $dreamers = Dreamer::where('group_id', $groupId)->get()->toArray();
        return $dreamers;
    }

}
