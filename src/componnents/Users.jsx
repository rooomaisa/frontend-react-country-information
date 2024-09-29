import React, {useState} from 'react';
import axios from "axios";

export default function Users() {
const [users, setUsers] =useState ([]);
const [isLoading, setIsLoadng] =useState (false);
const [error, setError] = useState("");

    async function fetchUserData() {
        setIsLoadng(true);
        setError("");
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users",
            );
        setUsers(response.data);

    } catch (error) {
        console.log(error);
        setError(error.message)
    } finally {
        setIsLoadng(false)
    }
}

    return (
        <div>
            <h1>Users</h1>
            {error && <p>Error: {error} </p>}
            {isLoading && <p>Loading...</p>}
            { users ? (
            <ul>
                {users.map((user) => {
                    return (<li key={user.id}>{user.name}</li>)
                })}
            </ul>
                ) : (
                    <p>No users Fetched</p>
            )}
                <button type='button' onClick={fetchUserData}>Fetch Users</button>
        </div>
);
}

