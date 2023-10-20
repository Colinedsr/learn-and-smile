<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

/*     public function getDreamersByGroupId(int $groupId): array
    {
        $dreamers = Dreamer::where('group_id', $groupId)->get()->toArray();
        return $dreamers;
    } */

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function dreamers(): HasMany
    {
        return $this->hasMany(Dreamer::class, 'group_id');
    }
}

