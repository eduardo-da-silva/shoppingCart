<?php

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Shopping Cart - Laravel",
 *      description="Simple CRUD using Laravel",
 *      @OA\Contact(
 *          email="eduardo.silva@gmail.com"
 *      ),
 * )
 */

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
