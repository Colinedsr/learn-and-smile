<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class UserController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        User::create([
            'email' => $request->input('email'),
            'password' => $request->input('password'),
        ]);

        return response()->json([
            'message' => 'utilisateur créé'
        ]);
    }
}