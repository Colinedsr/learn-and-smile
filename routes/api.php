<?php

use App\Http\Controllers\Api\DreamerController;
use App\Http\Controllers\Api\GroupController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/dreamer', [DreamerController::class, 'show']);
Route::put('/dreamer', [DreamerController::class, 'update']);
Route::post('/user',  [UserController::class, 'store']);
Route::post('/group',  [GroupController::class, 'getUsersGroup']);
