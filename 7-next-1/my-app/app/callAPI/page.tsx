'use client';

import axios from "axios";

export default function Page() {
    const doPost = async () => {
        const payload = {
            name: "John Doe",
            age: 30
        };
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", payload);
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const doGet = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const doPut = async () => {
        const payload = {
            id: 1,
            title: "Updated Title",
            body: "This is the updated body of the post.",
            userId: 1
        };
        try {
            const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", payload);
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const doDelete = async () => {
        try {
            const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h1>Call API Example</h1>
            <button onClick={doPost}>POST</button>
            <button onClick={doGet}>GET</button>
            <button onClick={doPut}>PUT</button>
            <button onClick={doDelete}>DELETE</button>
        </div>

    );
}
// This code defines a React component that allows users to make POST, GET, PUT, and DELETE requests to a sample API using Axios.
// Each button triggers a different API call, and the responses are logged to the console.