<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dreamer;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

final class DreamerController extends Controller
{
    public function index() {
        return view('welcome');
    }

    public function show()
    {
        $dreamers = DB::table('dreamers')->whereNull('user_id')->get();

        return $dreamers;
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $dreamer = Dreamer::create([
                'name' => $request->input('name'),
                'birthdate' => $request->input('birthdate'),
                'user_id' => $request->input('user_id'),
                'avatar' => rand(2,50),
            ]);
        } catch (Exception $e) {
            return response()->json(['error' => '🛑 ' . $e->getMessage()]);
        }

        return response()->json([
            'message' => 'Dreamer added ✅',
            'dreamer' => $dreamer
        ]);
    }

    public function update(Request $request)
    {
        $dreamer = Dreamer::whereNull('user_id')->find($request->input('id'));
        try {
                if ($dreamer !== null) {
                $dreamer->group_id = $request->input('groupId');
                $dreamer->save();
                return [
                    'message' => 'dreamer now belongs to group ' . $dreamer->group_id ,
                    'dreamer' => $dreamer,
                ];
            } else {
                return ['error' => 'dreamer already has a user'];
            }
        } catch (Exception $e) {
            return response()->json(['error' => '🛑 ' . $e->getMessage()]);
        }
    }
}