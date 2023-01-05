<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TodoItem;
use App\Http\Resources\ItemResource;
use Symfony\Component\HttpFoundation\Response;

class ItemController extends Controller{
    
    public function createItem(Request $request){
        
        $item = TodoItem::create([
          'name' => $request->name,
          'description' => $request->description,
          'photo' => $request->photo,
          'amount' => $request->amount
        ]);
        //return new ItemResource($item->get());
       // return (new ItemResource($item))->response()->setStatusCode(Response::HTTP_CREATED);
       return response()->json($item->toArray(), Response::HTTP_CREATED);
    }

  
}