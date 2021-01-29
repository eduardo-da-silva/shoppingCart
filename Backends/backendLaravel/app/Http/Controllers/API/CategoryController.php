<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    /**
     * @OA\Get(
     *     tags={"Products"},
     *     summary="Returns a list of categories",
     *     description="Returns a object of categories",
     *     path="/api/categories/",
     *     @OA\Response(response="200", description="A list with categories"),
     * ),
     * 
    */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response(['categories' => CategoryResource::collection($categories), 'message' => 'Retrieved successfully', 200]);
    }


    /**
     * @OA\Post(
     *     path="/api/categories",
     *     tags={"Products"},
     *     summary="Crate new categories",
     *     description="Create a new Category",
     *     @OA\RequestBody(
     *         required=true,
     *          @OA\JsonContent(ref="#/components/schemas/Category")
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="CREATED",
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Missing Data"
     *     )
     * )
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $validator = Validator::make($data, [
            'description' => 'required'
        ]);

        if ($validator->fails()) {
            return response(['error' => $validator->errors(), 'Validation Error']);      
        }
        $category = Category::create($data);
        return response(['category' => new CategoryResource($category), 'message' => 'Created successfully', 201]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
