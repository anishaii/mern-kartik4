import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name must be at most 50 characters long"],
    },

    email: {
      type: String,
      required: true,
      minlength: [10, "Email must be at least 10 characters long"],
      maxlength: [100, "Email must be at most 100 characters long"],
     
    },

    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters long"],
    },

    role: {
      type: String,
      enum: ["user" , "admin"],
      default: "user"

    }

  
   
  },

  {timestamps: true}
  
);

const User = mongoose.model("User", userSchema);
export default User;
