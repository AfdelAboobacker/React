import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosGet = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUser(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchuser();
  }, []);
  
  return (
    <div>
      <h2>user list</h2>
      <ul>
        {user.map((usr) => (
          <li key={usr.id}>{usr.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosGet;
