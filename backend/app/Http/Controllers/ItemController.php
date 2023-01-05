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

    public function retrieveItems(Request $request) {
        $items = TodoItem::all();
        return response()->json($items->toArray(), 200);
    }

    public function retrieveSingleItem(Request $request, $id) {
       $item = TodoItem::find($id);
       return response()->json($item->toArray(), 200);
    }

    public function updateItem(Request $request, $id) {
        try{
        // $request->validate([
        //     'name'=>'required',
        //     'description'=>'required',
        //     'amount'=>'required',
        //     'photo' => 'required'
        // ]); 
        
        $todo = TodoItem::find($id);
        // Getting values from the blade template form
        $todo->name =  $request->name;
        $todo->description = $request->description;
        $todo->amount = $request->amount;
        $todo->photo = $request->photo;
        $todo->save();

        return response()->json(['success' => true, 'message' => 'List has been updated.'], Response::HTTP_OK);
    }catch(\Exception $e){

    }

    }
    
    public function deleteItem(Request $request, $id) {
        try{
     $item = TodoItem::findOrFail($id);
     $item->delete();
     return response()->json([], Response::HTTP_OK);
        }catch(\Exception $e){
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    
}