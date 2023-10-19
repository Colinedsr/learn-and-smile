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
        //recevoir userId depuis le front à travers une requete
        $groups = Group::where('user_id', $request->input('userId'))->get();
        if ($groups !== []) {
            foreach ($groups as $group) {
                return $group->getDreamersByGroupId($group->id);
            }
        } 
        return [];
    }

    
}