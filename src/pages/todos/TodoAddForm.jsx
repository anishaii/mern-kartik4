import { Formik } from "formik";
import { Button } from "../../components/ui/button.jsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Label } from "../../components/ui/label.jsx";
import * as Yup from "yup";
import { Textarea } from "../../components/ui/textarea.jsx";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "./todoSlice.js";
import { nanoid } from "@reduxjs/toolkit";

export const todoSchema = Yup.object({
  title: Yup.string().required(),
  message: Yup.string().min(10).max(200).required(),
  author: Yup.string().required(),
  image: Yup.mixed().test('fileType', 'Invalid file type', (val) => {
    return val && [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/jpg'
    ].includes(val.type);

  }).required(),
});


export default function TodoForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Post Detail</CardTitle>
        <CardDescription>
          Enter your Post
        </CardDescription>

      </CardHeader>
      <CardContent>


        <Formik
          initialValues={{
            title: '',
            message: '',
            author: '',
            image: '',
            imageReview: ''
          }}

          onSubmit={(val) => {
           dispatch(addTodo({...val, id: nanoid()}));
           nav(-1);

          }}
          validationSchema={todoSchema}
        >


          {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">

                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    placeholder="Enter title name"

                  />
                  {errors.title && touched.title && <div className="text-red-500">{errors.title}</div>}
                </div>



             
                <div>
                  <label className="py-2" htmlFor="detail">Detail Information</label>
                  <Textarea
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    placeholder="Enter details" />
                  {errors.message && touched.message && <div className="text-red-500">{errors.message}</div>}
                </div>

                <div>
                  <label htmlFor="image">Image</label>
                  <Input
                    className={'mb-4'}
                    name="image"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const url = URL.createObjectURL(file);
                      setFieldValue("imageReview", url);
                      setFieldValue("image", file);

                    }}
                    type='file'

                  />

                  {values.imageReview && !errors.image && <img src={values.imageReview} alt="" />}
                  {errors.image && touched.image && <div className="text-red-500">{errors.image}</div>}
                </div>

                  <div className="grid gap-2">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    onChange={handleChange}
                    value={values.author}
                    placeholder="enter you name"

                  />
                  {errors.author && touched.author && <div className="text-red-500">{errors.author}</div>}
                </div>

              </div>
              <Button type="submit" className=" mt-7 w-full bg-amber-500 text-black ">
                Submit
              </Button>
            </form>

          )}





        </Formik>


      </CardContent>

    </Card>
  )
} 