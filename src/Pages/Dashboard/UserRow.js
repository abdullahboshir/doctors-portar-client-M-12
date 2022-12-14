import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Failed to make an Admin')
            }
            return res.json()})
        .then(data => {
         if(data.modifiedCount > 0){
            toast.success('Successfully made an admin')
         }
        })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role? 'Already an Admin' : role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs bg-red-500">Remove User</button></td>
        </tr>
    );
};

export default UserRow;