import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://todo11:Qje21IZbzftBqGa5@cluster0.j6yhdqz.mongodb.net/todo-app')
    console.log("DB Connected");
}

// mongodb+srv://todo-next-app:mgKhZt72x3rq8e8S@cluster0.j6yhdqz.mongodb.net/

// mongodb+srv://todo-next-app:mgKhZt72x3rq8e8S@cluster0.j6yhdqz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/