<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Group;

final class GroupController extends Controller
{
    public function getUsersGroup(int $userId): bool
    {
        $groups = Group::findOrfail($userId);

        return $groups;
    }
}