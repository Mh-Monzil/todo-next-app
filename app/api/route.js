import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request){
    const todos = await TodoModel.find({})
    // return NextResponse.json({message: "get method hit"})
    console.log(todos, "GET method hit");
    return NextResponse.json({todos: todos})
}

export async function POST(request){
    const {title, description} = await request.json();
    console.log(title, description);
    const postTodo = await TodoModel.create({
        title,
        description
    })

    console.log(postTodo);
    return NextResponse.json({message: "Todo Created"})
}

export async function DELETE(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId')

    await TodoModel.findByIdAndDelete(mongoId)
    return NextResponse.json({message: "Todo Deleted"})
}

export async function PUT(request){
    const mongoId = await request.nextUrl.searchParams.get('mongoId')

    await TodoModel.findByIdAndUpdate(mongoId, {
        $set: {
            isCompleted: true,
        }
    })
    return NextResponse.json({message: "Todo Deleted"})
}