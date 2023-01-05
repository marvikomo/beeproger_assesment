<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TodoItem;
use App\Http\Resources\ItemResource;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class ItemController extends Controller
{
    public function createItem(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'description' => 'required',
                'photo' => 'required',
                'amount' => 'required',
            ]);
            if ($validator->fails()) {
                // Validation failed, return error response
                return response()->json(
                    [
                        'error' => $validator->errors(),
                    ],
                    400
                );
            }
            $item = TodoItem::create([
                'name' => $request->name,
                'description' => $request->description,
                'photo' => $request->photo,
                'amount' => $request->amount,
            ]);

            return response()->json($item->toArray(), Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }

    public function retrieveItems(Request $request)
    {
        try {
            $items = TodoItem::orderBy('created_at', 'DESC')->get();
            return response()->json($items->toArray(), Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }

    public function retrieveSingleItem(Request $request, $id)
    {
        try {
            $item = TodoItem::find($id);
            return response()->json($item->toArray(), Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }

    public function updateItem(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'description' => 'required',
                'photo' => 'required',
                'amount' => 'required',
            ]);
            if ($validator->fails()) {
                // Validation failed, return error response
                return response()->json(
                    [
                        'error' => $validator->errors(),
                    ],
                    400
                );
            }

            $todo = TodoItem::find($id);
            $todo->name = $request->name;
            $todo->description = $request->description;
            $todo->amount = $request->amount;
            $todo->photo = $request->photo;
            $todo->save();

            return response()->json(
                ['success' => true, 'message' => 'List has been updated.'],
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }

    public function deleteItem(Request $request, $id)
    {
        try {
            $item = TodoItem::findOrFail($id);
            $item->delete();
            return response()->json([], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }

    public function complete(Request $request, $id)
    {
        try {
            $item = TodoItem::findOrFail($id);
            $item->status = 'COMPLETED';
            $item->save();
            return response()->json(
                ['success' => true, 'message' => 'List has been completed.'],
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => $e->getMessage(),
                ],
                500
            );
        }
    }
}
