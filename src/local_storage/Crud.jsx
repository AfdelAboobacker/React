import React, { use, useEffect, useState } from "react";
import "./crud.css";
const Crud = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
  });
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState({});
  const [isLoading, setLoading] = useState(false);

  // load users from loacalStorage
  useEffect(() => {
    const stored = localStorage.retItem("users");
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored); //
        setUsers(parsedUser)
      } catch (error) {
        console.error('Error parsing data',error);
        localStorage.removeItem('users');//clear corrupted data

      }
    }
    setLoading(true);//mark as load
  }, []);

  // save users to localStorage
  useEffect(() => {
    if (isLoading) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users, isLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //validation

  const validate = () => {
    const newErrors = {};
    const { name, email, age } = formData;

    if (!name.trim()) newErrors.name = "name is required";

    if (!email) newErrors.email = "email reaquired";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "email invalid";

    if (!age) newErrors.age = "age is required";
    else if (isNaN(age) || age < 1 || age > 120)
      newErrors.age = "age must be between 1 and 120";

    return newErrors;
  };
  //form Submission

  const handleSubmit = (e) => {
    e.preventDefualt();
    const validationError = validate();

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      return;
    }
  };

  return (
    <div className="formnew">
      <h1>React CRUD-Simple Form</h1>
      <form>
        {/* name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your name"
          />
        </div>
        {/* email */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
          />
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
        </div>
        <button type="submit">{editMode? 'update users' : 'add users'}</button>
      </form>
    </div>
  );
};

export default Crud;
