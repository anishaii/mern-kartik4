import { Button } from "@/components/ui/button";
import { EditIcon, TrashIcon } from "lucide-react";
import { useSelector } from "react-redux"
import DeleteTodo from "../todos/DeleteTodo";

export default function Home() {

  const { todos } = useSelector((state) => state.todoSlice);

  console.log(todos);

  return (
    <div className="grid grid-cols-3 p-5">
      {todos.map((todo)=> (
        <div key={todo.id} className="shadow-xs p-3">
        <h1>{todo.email}</h1>
        <h2>{todo.gender}</h2>
        <p>{todo.country}</p>

        <div className="mt-3 flex gap-5">
          <Button variant="outline"><EditIcon/> </Button>
          <DeleteTodo id={todo.id} />
         

        </div>

        </div>
      ))}
    </div>
  )
}