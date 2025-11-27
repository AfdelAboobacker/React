import React from "react";
import "./yupform.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { data } from "react-router-dom";

//defining the validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().positive().integer().required("Age is required"),
});
const Yupform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* name */}
      <input {...register("name")} placeholder="Name" />
      <p>{errors.name?.message}</p>
      {/*email  */}
      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>
      {/* age */}
      <input {...register("age")} placeholder="Age" />
      <p>{errors.age?.message}</p>

   <div>
          <button type="submit">Submit</button>
          <button type="reset" onClick={()=>reset()}>Reset</button>
   </div>
    </form>
  );
};

export default Yupform;
