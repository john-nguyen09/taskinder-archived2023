<?php

use Illuminate\Http\Request;
use Laravel\Passport\Passport;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/users', function (Request $request) {
    return response()->json(['name' => $request->user()->fullName]);
});

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/taskLog', 'TaskLogController@list');
    Route::post('/taskLog/save', 'TaskLogController@store');
    Route::delete('/taskLog/delete', 'TaskLogController@delete');

    Route::get('/taskLog/monthCalendar/{month}', 'TaskLogController@monthCalendar');
    Route::get('/taskLog/dateInfo/{date}', 'TaskLogController@dateInfo');
});
