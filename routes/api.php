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

/* Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); */

Route::get('/dreamer', [DreamerController::class, 'index']);
Route::get('/dreamer/show', [DreamerController::class, 'show']);
Route::put('/dreamer', [DreamerController::class, 'update']);
Route::post('/dreamer',  [DreamerController::class, 'store']);

Route::get('/user',  [UserController::class, 'show']);
Route::post('/user/store',  [UserController::class, 'store']);

Route::get('/group', [GroupController::class, 'show']);
Route::post('/group/fetch',  [GroupController::class, 'getUsersGroup']);
