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

Route::group(['middleware' => 'auth:api', 'prefix' => 'taskLog'], function() {
    Route::get('/', 'TaskLogController@list');
    Route::post('/save', 'TaskLogController@store');
    Route::delete('/delete', 'TaskLogController@delete');

    Route::get('/monthCalendar/{month}', 'TaskLogController@monthCalendar');
    Route::get('/dateInfo/{date}', 'TaskLogController@dateInfo');
});

Route::group(['middleware' => 'auth:api', 'prefix' => 'qa'], function() {
    Route::get('/{id}', 'QAController@list')->where('id', '[0-9]+');
    Route::post('/store', 'QAController@store');
    Route::delete('/delete', 'QAController@delete');
    Route::post('/exportCSV', 'QAController@exportCSV');
});

Route::group(['middleware' => 'auth:api', 'prefix' => 'client'], function() {
    Route::get('/', 'ClientController@list');
    Route::get('/{id}', 'ClientController@view')->where('id', '[0-9]+');
    Route::post('/store', 'ClientController@store');
    Route::delete('/delete', 'ClientController@delete');
});
