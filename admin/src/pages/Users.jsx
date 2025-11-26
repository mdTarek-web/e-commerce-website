import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast";
import { serverUrl } from '../../config';
import axios from 'axios';
import Loader from '../components/Loader';
import Title from '../components/Title';
// import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { FaTrash } from "react-icons/fa";
import NewUserForm from '../components/NewUserForm';

const Users = ({token}) => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getUsersList = async()=>{
    try {
      setIsLoading(true);
      const response = await axios.get(serverUrl + "/api/user/users",{
        headers:{
          token,
          "Content-Type":'application/json',
        }
      });
      const data = response?.data;
      if(data?.success){
        setUsersList(data?.users)
      }else{
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("Users list fetching error", error?.message);
      toast.error(error?.message);
    }
    finally{
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    getUsersList();
  }, []);

  const handleRemoveUser = async (_id) =>{
    const confirmRemoval = window.confirm("Are you sure you want remove this user?")
    if(confirmRemoval){
      setIsLoading(true);
      try {
        const response = await axios.post(serverUrl + "/api/user/remove", {
          _id,
        });
        const data = response?.data;
        if(data?.success){
          toast.success(data?.message);
          await getUsersList();
        }else{
          toast.error(data?.message);
        }
      } catch (error) {
        console.log("User remove error",error);
        toast.error(error?.message);
      }finally{
        setIsLoading(false);
      }
    }
  }
  const openLoginForm=()=>{
    setIsOpen(true);
    setSelectedUser(null);
  }
  const closeLoginForm = () =>{
    setIsOpen(false);
  }
  return (
    <div>
      {isLoading ? ( <Loader/> ) : (
      <div>
        <div className='flex items-center justify-between max-w-3xl'>
          <Title>Users List</Title>
          <button onClick={openLoginForm} className='flex items-center gap-1 bg-black/80 text-white px-6 text-sm font-medium py-2 rounded-md 
          hover:bg-black duration-300 transition-colors mt-2'>Add user</button>
        </div>
        {usersList?.length > 0 ? 
        (<div className='max-w-3xl flex flex-col gap-2 mt-2'>
          <div className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-1.5'>
            <b className='hidden md:inline-block'>Name</b>
            <b>Email</b>
            <b className='hidden md:inline-block'>Admin</b>
            <b className='text-center'>Action</b>
            <b className='text-center'>Edit</b>
          </div>
          {usersList?.map((item) => (
            <div key={item?._id}  className='grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm my-'>
              <p className='hidden md:inline-block font-semibold'>{item?.name}</p>
              <p className='font-medium'>{item?.email}</p>
              <p className={ item.isAdmin ? "font-semibold hidden md:inline-block" : "font-normal hidden md:inline-block"}>{item?.isAdmin ? 'Admin' : 'user'} </p>
              <FaTrash onClick={()=>handleRemoveUser(item?._id)} className='text-lg text-black/60 cursor-pointer hover:text-red-600 duration-300 ease-in-out text-center w-full'/>
              <button onClick={()=>{
                setSelectedUser(item);
                setIsOpen(true);
              }} className='text-base cursor-pointer hover:text-green-600 duration-300 ease-in-out'>Edit</button>
            </div>
          ))}
        </div>) : (
          <div className='mt-2'>
            <p className="md-4">You have no user in your Database</p>
          </div>
        )}
      </div>
    )}
    <NewUserForm isOpen={isOpen} setIsOpen={setIsOpen} close={closeLoginForm} getUsersList={getUsersList} setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>
    </div>
  )
}

export default Users