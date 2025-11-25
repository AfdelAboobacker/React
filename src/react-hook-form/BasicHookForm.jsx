import React from "react";
import "./rhf.css";
import { useForm } from "react-hook-form";

const BasicHookForm = () => {
  //initialize the useform
  const {
    register, //used to register input field
    handleSubmit, //function to handle form submission
    formState: { errors }, //object containing validation errors
    reset, //function to reset the form to initial value
  } = useForm();

  // function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset(); //reset the form after submission
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* name */}
      <label>name:</label>
      <input {...register("name", { required: "name is required" })} />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

      {/* email */}
      <label>email</label>
      <input
        {...register("email", {
          required: "email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "invalid email",
          },
        })}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

      {/* sumbission */}
      <button type="submit">submit</button>
   
   {/* reset */}
   <button type="reset" onClick={()=>reset()}>Reset</button>
    </form>
  );
};

export default BasicHookForm;
