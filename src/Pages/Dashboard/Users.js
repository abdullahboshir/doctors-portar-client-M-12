import React, { useEffect, useState } from 'react';
import UserRow from './UserRow';



const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET', 
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users, setUsers])
 
    return (
        <div>
            <h1>This is Users: {users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>

  { users.map((user, index) => <UserRow user={user} key={index} />)}

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;