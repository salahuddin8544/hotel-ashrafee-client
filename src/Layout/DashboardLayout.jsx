import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(authContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Bookings</Link></li> {
                        isAdmin &&
                        <>
                        
                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    </div>
    );
};

export default DashboardLayout;