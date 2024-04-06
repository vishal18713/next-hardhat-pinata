"use client";

import { useState } from "react";
import connectToDB from "../../../utils/database";
import Web3 from "web3";

const CreateUser = () => {
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState(''); // State for Metamask address
  
    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const connectMetamask = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          return accounts[0];
        } catch (error) {
          console.error("Error connecting Metamask:", error);
          return [];
        }
      } else {
        alert("Please download Metamask");
        return [];
      }
    };


  
    const handleSubmit = async (event) => {
        event.preventDefault();
        const address = await connectMetamask();
        console.log(address);

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify({ username, address }), // Send both username and address
            });
  
            if (response.ok) {
                alert('User created successfully!');
                setUsername('');
                setAddress('');
            } else {
                console.error('Failed to create user:', response.statusText);
                alert('Error creating user. Please try again.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            alert('Error creating user. Please try again.');
        }
    };
  
    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleInputChange} />
                </label>
                <br />
                {/* <label>
                    Metamask Address:
                    <input type="text" value={address} onChange={handleAddressChange} />
                </label> */}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
  
export default CreateUser;
