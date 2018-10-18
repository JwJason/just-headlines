<?php

use GuzzleHttp\Client;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
	/**
	 * Fetches articles by country and optionally by category.
	 */
	$router->get('articles/country/{country}[/category/{category}]', function(string $country, string $category=null) {
		$client = new Client();
        $res = $client->request('GET', 'https://newsapi.org/v2/top-headlines', [
            'query' => [
            	'country' => $country,
            	'category' => $category ?? '',
            	'apiKey' => config('app.api_key_news')
            ]
        ]);
        return response()->json(json_decode($res->getBody()), $res->getStatusCode())->header('Access-Control-Allow-Origin', '*');
	});

	/**
	 * Fetches weather for the given latitude and longitude.
	 */
	$router->get('weather', function(Request $request) {
		$this->validate($request, [
        	'lat' => 'required|numeric',
        	'lon' => 'required|numeric'
    	]);
		$client = new Client();
        $res = $client->request('GET', 'https://api.openweathermap.org/data/2.5/weather', [
			'query' => [
				'lat' => $request->get('lat'),
				'lon' => $request->get('lon'),
            	'APPID' => config('app.api_key_weather'),
            	'units' => 'imperial'
			]
		]);
		return response()->json(json_decode($res->getBody()), $res->getStatusCode())->header('Access-Control-Allow-Origin', '*');
	});

	/**
	 * Fetches geolocation for the client's IP address.
	 */
	$router->get('geolocation', function() {
		$ip = \Request::ip();
		$client = new Client();
		$res = $client->request('GET', "https://api.ipstack.com/$ip", [
			'query' => ['access_key' => config('app.api_key_ipstack')]
		]);
		return response()->json(json_decode($res->getBody()), $res->getStatusCode())->header('Access-Control-Allow-Origin', '*');
	});
});