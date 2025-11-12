import React, { useState } from "react";
import "./form.css";
import { GrValidate } from "react-icons/gr";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    conformPassword: "",
    gender: "",
  });

  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; //cllaed evrytime when a user type or change a form field
    setFormData((prev) => ({
      ...prev, //uses spread operator to keep other value unchanged
      [name]: value,
    }));
  };

  const validation = () => {
    const newErrors = {};
    const { name, email, age, password, conformPassword, gender } = formData;

    if (!name.trim()) newErrors.name = "name is required";
    if (!email) newErrors.email = "email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "email is invalid";
    if (!age) newErrors.age = "age is required";
    else if (isNaN(age) || age < 1 || age > 120)
      newErrors.age = "age must be between 1 and 120";

    if (!password) newErrors.password = "password required";
    else if (password.length < 6)
      newErrors.password = "password must be atleast 6 charecters";

    if (!conformPassword)
      newErrors.conformPassword = "please conform your password";
    else if (password !== conformPassword)
      newErrors.conformPassword = "passwoed do not match";

    if (!gender) newErrors.gender = "gender required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validation();
    if (Object.keys(validateErrors).length > 0) {
      //['name,email,...]
      setError(validateErrors);
    } else {
      setError({});
      alert("form submitted succeessfully");
      console.log("form data", formData);

      setFormData({
        name: "",
        email: "",
        age: "",
        password: "",
        conformPassword: "",
        gender: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* name */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      {/* age */}
      <div>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="age"
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>
      {/*password  */}
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      {/* conmform password */}
      <div>
        <input
          type="password"
          name="conformPassword"
          value={formData.conformPassword}
          onChange={handleChange}
          placeholder="conform password"
        />
      </div>
      {errors.conformPassword && (
        <p style={{ color: "red" }}>{errors.conformPassword}</p>
      )}
      {/* gender */}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender === "male"}
          />
          male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
          />
          female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="others"
            onChange={handleChange}
            checked={formData.gender === "others"}
          />
          others
        </label>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
