<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dreamer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

final class DreamerController extends Controller
{
    public function show()
    {
        $dreamer = DB::table('dreamers')->get();

        return $dreamer;
    }

    public function update(Request $request)
    {
        $dreamer = Dreamer::whereNotNull('user_id')->find($request->input('id'));
        if ($dreamer !== null) {
            $dreamer->update(['group_id' => $request->input('groupId')]);
            return $dreamer;
        } else {
            return 'dreamer already has a user';
        }
    }
}