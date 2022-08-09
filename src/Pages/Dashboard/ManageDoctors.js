import React, { useEffect, useState } from 'react';

const ManageDoctors = () => {
    const [manageDoctor, setManageDoctor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setManageDoctor(data))
    }, [manageDoctor, setManageDoctor])
    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {manageDoctor.length}</h2>
        </div>
    );
};

export default ManageDoctors;