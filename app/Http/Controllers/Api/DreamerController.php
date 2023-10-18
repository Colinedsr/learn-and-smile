<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dreamer;

final class DreamerController extends Controller
{
    public function update(int $id, int $groupId): bool
    {
        $dreamer = Dreamer::findOrfail($id);
        $dreamer->update(['group_id' => $groupId]);

        return true;
    }
}