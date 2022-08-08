import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firbase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  console.log(admin)

    return (
        <div className="drawer drawer-mobile bg-white">
        <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
       <h2 className='text-3xl text-purple-500 font-bold'>Welcome to your Dashboard</h2>
        <Outlet/>
         
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Appointment</Link></li>
            <li><Link to='/dashboard/review'>My Review</Link></li>
            <li><Link to='/dashboard/history'>My History</Link></li>
         { admin &&  <li><Link to='/dashboard/users'>All Users</Link></li>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;