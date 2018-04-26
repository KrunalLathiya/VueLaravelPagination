<?php

use Illuminate\Http\Request;

Route::get('/users', 'API\UserController@index');