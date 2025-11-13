import React, { use, useEffect, useState } from "react";
import "./crud.css";
import { BsDisplay } from "react-icons/bs";
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
    const stored = localStorage.getItem("users");
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored); //
        setUsers(parsedUser);
      } catch (error) {
        console.error("Error parsing data", error);
        localStorage.removeItem("users"); //clear corrupted data
      }
    }
    setLoading(true); //mark as load
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
    e.preventDefault();
    const validationError = validate();

    if (Object.keys(validationError).length > 0) {
      setError(validationError);
      return;
    }

    if (editMode) {
      setUsers(
        users.map((user) => (user.id === formData.id ? formData : user))
      );
      setEditMode(false);
    } else {
      const newUsers = { ...formData, id: Date.now().toString() };
      setUsers([...users, newUsers]);
    }
    setFormData({
      id: "",
      name: "",
      email: "",
      age: "",
    });

    setError({});
  };

  const handleEdit = (us) => {
    setFormData(us);
    setEditMode(true);
  };

  const hanndleCancel = () => {
    setFormData({ id: "", name: "", email: "", age: "" });
    setEditMode(false);
    setError({});
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleClearAll=()=>{
    if(window.confirm("Are you sure you want clear all data ?this action cannot be undone.")){
      setUsers([]);
      localStorage.removeItem("users");
      //also clear the form is in edit mode
      if(editMode){
        setFormData({id:'',name:'',age:'',email:''});
        setEditMode(false);
        setError({});
      } 
    } 
  }
  return (
    <div className="formnew">
      <h1>React CRUD-Simple Form</h1>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="your name"
          />
          {error && <p style={{ color: "red" }}>{error.name}</p>}
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
          {error && <p style={{ color: "red" }}>{error.email}</p>}
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
          {error && <p style={{ color: "red" }}>{error.age}</p>}
        </div>
        <button type="submit">{editMode ? "update users" : "add users"}</button>
        {editMode && (
          <button
            type="button"
            onClick={hanndleCancel}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>
      <hr />
      <div
        style={{
          Display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h2>Users list</h2>
        {/* clear data button */}
        {users.length > 0 && (
          <button onClick={handleClearAll}
            style={{
              backgroundColor: "#dc345",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft: "30px",
            }}
          >
            Clear all data
          </button>
        )}
      </div>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>age</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((us) => (
              <tr key={us.id}>
                <td>{us.name}</td>
                <td>{us.email}</td>
                <td>{us.age}</td>
                <td>
                  <button onClick={() => handleEdit(us)}>Edit</button>
                  <button
                    onClick={() => handleDelete(us.id)}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>no users added yet</p>
      )}
    </div>
  );
};

export default Crud;
