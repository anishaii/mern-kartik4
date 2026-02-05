import { Formik } from "formik";
import { Button } from "../../components/ui/button.jsx";
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "../../components/ui/card.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Textarea } from "../../components/ui/textarea.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { todoSchema } from "./TodoAddForm.jsx";
import { updateTodo } from "./todoSlice.js";

export default function UpdateTodo() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const todo = useSelector((state) =>
    state.todoSlice.todos.find((t) => t.id === id)
  );

  if (!todo) {
    return <p className="p-5">Todo not found</p>;
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Update Post</CardTitle>
        <CardDescription>Edit your post</CardDescription>
      </CardHeader>

      <CardContent>
        <Formik
          initialValues={{
            title: todo.title,
            message: todo.message,
            author: todo.author,
            image: todo.image,
            imageReview: todo.imageReview,
          }}
          validationSchema={todoSchema}
          onSubmit={(values) => {
            dispatch(updateTodo({ ...todo, ...values }));
            nav(-1);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">

               
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                  />
                  {errors.title && touched.title && (
                    <div className="text-red-500">{errors.title}</div>
                  )}
                </div>

                <div>
                  <Label>Detail Information</Label>
                  <Textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                  {errors.message && touched.message && (
                    <div className="text-red-500">{errors.message}</div>
                  )}
                </div>

       
                <div>
                  <Label>Image</Label>
                  <Input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;

                      const url = URL.createObjectURL(file);
                      setFieldValue("image", file);
                      setFieldValue("imageReview", url);
                    }}
                  />

                  {values.imageReview && (
                    <img
                      src={values.imageReview}
                      alt=""
                      className="mt-2 h-40 w-full object-cover rounded"
                    />
                  )}

                  {errors.image && touched.image && (
                    <div className="text-red-500">{errors.image}</div>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    value={values.author}
                    onChange={handleChange}
                  />
                  {errors.author && touched.author && (
                    <div className="text-red-500">{errors.author}</div>
                  )}
                </div>

              </div>

              <Button
                type="submit"
                className="mt-7 w-full bg-amber-500 text-black"
              >
                Update
              </Button>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
