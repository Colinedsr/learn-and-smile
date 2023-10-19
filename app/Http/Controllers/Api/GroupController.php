<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dreamer;
use App\Models\Group;
use Illuminate\Http\Request;

final class GroupController extends Controller
{
    

    public function getUsersGroup(Request $request): array
    {
        $groups = Group::where('user_id', $request->input('userId'))->get();
        $results = [];
        if ($groups !== []) {
            foreach ($groups as $group) {
                $results[] = [$group->name => $group->getDreamersByGroupId($group->id)];
            }
            return $results;
        } 
        return [];
    }

    
}