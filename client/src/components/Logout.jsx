import React from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router'

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Log out successfully");
        navigate("/");
    }
  return (
    <button onClick={handleLogout} className='bg-black/80 px-6 py-2 text-gray-200 hover:bg-black hover:text-white hoverEffect rounded-md mt-2'>Logout</button>
  )
}

export default Logout