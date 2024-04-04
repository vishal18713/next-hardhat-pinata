"use client";
import { useState } from "react";
import connectToDB from "../../../utils/database";

const CreateUser = () => {
    const [username, setUsername] = useState('');
  
    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        });
  
        if (response.ok) {
          alert('User created successfully!');
          setUsername('');
        } else {
          console.error('Failed to create user:', response.statusText);
          alert('Error creating user. Please try again.');
        }
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Error creating user. Please try again.');
      }
    };
    const a = async() =>{
        await connectToDB();
    }  
  
    return (
      <div>
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={username} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default CreateUser;
