<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

final class UserController extends Controller
{
    public function show() {
        return view('welcome');
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $user = User::create([
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);
        } catch (Exception $e) {
            return response()->json(['error' => '🛑 ' . $e->getMessage()]);
        }

        return response()->json([
            'message' => 'User created ✅',
            'user' => $user
        ]);
    }
}