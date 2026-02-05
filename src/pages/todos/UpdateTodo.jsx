import { Formik } from "formik";
import { Button } from "../../components/ui/button.jsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Label } from "../../components/ui/label.jsx";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group.jsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select.jsx";
import { Textarea } from "../../components/ui/textarea.jsx";
import { Switch } from "../../components/ui/switch.jsx";
import { Field, FieldGroup } from "../../components/ui/field.jsx";
import { Checkbox } from "../../components/ui/checkbox.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { todoSchema } from "./TodoAddForm.jsx";
import { updateTodo } from "./todoSlice.js";

export default function UpdateTodo() {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todoSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const todo = todos.find((t) => t.id === id);

  // 🔒 Refresh / invalid ID safety
  if (!todo) {
    return <div className="p-4">Todo not found</div>;
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Update Todo</CardTitle>
        <CardDescription>Edit your details</CardDescription>
      </CardHeader>

      <CardContent>
        <Formik
          initialValues={{
            email: todo.email,
            gender: todo.gender,
            country: todo.country,
            message: todo.message,
            airplanemode: todo.airplanemode,
            habits: todo.habits,
          }}
          validationSchema={todoSchema}
          onSubmit={(values) => {
            dispatch(updateTodo({ ...values, id }));
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

                {/* Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Gender */}
                <div className="grid gap-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={values.gender}
                    onValueChange={(v) => setFieldValue("gender", v)}
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                  {errors.gender && touched.gender && (
                    <p className="text-red-500">{errors.gender}</p>
                  )}
                </div>

                {/* Country */}
                <div className="grid gap-2">
                  <Label>Country</Label>
                  <Select
                    value={values.country}
                    onValueChange={(v) => setFieldValue("country", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.country && touched.country && (
                    <p className="text-red-500">{errors.country}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                  />
                  {errors.message && touched.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Airplane mode */}
                <div className="flex items-center gap-3">
                  <Switch
                    checked={values.airplanemode}
                    onCheckedChange={(v) =>
                      setFieldValue("airplanemode", v)
                    }
                  />
                  <Label>Airplane Mode</Label>
                </div>

                {/* Habits */}
                <div>
                  <Label>Habits</Label>
                  <FieldGroup className="mt-3">
                    {["Dance", "Sing"].map((habit) => (
                      <Field key={habit} orientation="horizontal">
                        <Checkbox
                          checked={values.habits.includes(habit)}
                          onCheckedChange={(checked) => {
                            const next = checked
                              ? [...values.habits, habit]
                              : values.habits.filter((h) => h !== habit);
                            setFieldValue("habits", next);
                          }}
                        />
                        <Label>{habit}</Label>
                      </Field>
                    ))}
                  </FieldGroup>
                  {errors.habits && touched.habits && (
                    <p className="text-red-500">{errors.habits}</p>
                  )}
                </div>

                <Button type="submit" className="w-full">
                  Update
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}
