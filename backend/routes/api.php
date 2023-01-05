<?php

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

Route::post('/items', [\App\Http\Controllers\ItemController::class, "createItem"]);
Route::get('/items', [\App\Http\Controllers\ItemController::class, "retrieveItems"]);
Route::get('/items/{id}', [\App\Http\Controllers\ItemController::class, "retrieveSingleItem"]);
Route::put('/items/{id}', [\App\Http\Controllers\ItemController::class, "updateItem"]);
Route::delete('/items/{id}', [\App\Http\Controllers\ItemController::class, "deleteItem"]);
Route::put('/items/{id}/complete', [\App\Http\Controllers\ItemController::class, 'complete']);
