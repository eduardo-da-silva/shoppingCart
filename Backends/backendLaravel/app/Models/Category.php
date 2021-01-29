<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     title="Category",
 *     description="Category List model",
 *     @OA\Xml(
 *         name="Category"
 *     )
 * )
 */


class Category extends Model
{

    /**
     * @OA\Property(
     *     title="ID",
     *     description="ID",
     *     format="int64",
     *     example=1
     * )
     *
     * @var integer
     */
    private $id;

    /**
     * @OA\Property(
     *      title="Description",
     *      description="Description of category",
     *      example="A nice category"
     * )
     *
     * @var string
     */
    private $description;

    use HasFactory;

    protected $fillable = [
        'description'
    ];
}
