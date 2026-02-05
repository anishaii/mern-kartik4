import { Button } from "@/components/ui/button";
import { EditIcon } from "lucide-react";
import { useSelector } from "react-redux";
import DeleteTodo from "../todos/DeleteTodo";
import { useNavigate } from "react-router";
import { Card,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";

export default function Home() {
  const nav = useNavigate();
  const { todos } = useSelector((state) => state.todoSlice);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {todos.map((todo) => (
        <Card
          key={todo.id}
          className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Image */}
          {todo.imageReview && (
            <div className="relative aspect-video">
              <div className="absolute inset-0 z-10" />
              <img
                src={todo.imageReview}
                alt={todo.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <CardHeader>
            <CardTitle className="text-lg">{todo.title}</CardTitle>
            <CardDescription className="line-clamp-3">
              {todo.message}
            </CardDescription>
          </CardHeader>

          {/* Footer */}
          <CardFooter className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Author : {todo.author}
            </span>

            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => nav(`/update-todo/${todo.id}`)}
              >
                <EditIcon className="h-4 w-4" />
              </Button>

              <DeleteTodo id={todo.id} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
