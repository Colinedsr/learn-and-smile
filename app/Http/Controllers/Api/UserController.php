<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dreamer;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

final class UserController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        try {
            $user = User::create([
                'email' => $request->input('email'),
                'password' => $request->input('password'),
            ]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }

        return response()->json([
            'message' => 'utilisateur créé',
            'user' => $user
        ]);
    }
}