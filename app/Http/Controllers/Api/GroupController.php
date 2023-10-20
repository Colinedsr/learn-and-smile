<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class GroupController extends Controller
{
    public function show() {
        return view('welcome');
    }

    public function getUsersGroup(Request $request): JsonResponse
    {
        try {
            $user = User::find($request->input('userId'));
            $results = [];
            if ($user !== null) {
                $groups = $user->groups;
                if ($groups !== []) {
                    foreach ($groups as $group) {
                        $results[] = [$group->name => $group->dreamers];
                    }
                } 
            }
            return response()->json([
                    'results' => $results
                ]);
        } catch (Exception $e) {
            return response()->json(['error' => '🛑 ' . $e->getMessage()]);
        }
    }
}