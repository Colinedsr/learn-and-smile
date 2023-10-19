<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

final class UserController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        try {
            User::create([
                'email' => $request->input('email'),
                'password' => $request->input('password'),
            ]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }

        return response()->json([
            'message' => 'utilisateur créé'
        ]);
    }
}