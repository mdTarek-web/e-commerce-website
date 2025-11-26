import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Label from '../components/Label.jsx'
import Input from '../components/Input.jsx'
import {Link, useNavigate} from "react-router-dom"
import toast from 'react-hot-toast'
import { serverUrl } from '../../config.js'
import axios from 'axios'

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect (() => {
    if(token) {
      navigate("/");
    }
  }, [token]);

  const handleEmail = (e) => {
      setEmail(e.target.value);
      setErrEmail("");
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setErrPassword("");
    };
    const handleSignIn = async (e) => {
      e.preventDefault();
      if(!email){
        setErrEmail("Enter your email");
      }
      if(!password){
        setErrPassword("Enter your email");
      }
      if(email && password){
        try {
          setIsLoading(true);
          const response = await axios.post(serverUrl + "/api/user/login", {
            email,
            password,
          });
          const data = response?.data;
          if(data?.success){
            localStorage.setItem("token", data?.token);
            toast.success(data?.message);
            navigate("/");
          }else{
            toast.error(data?.message);
          }
        } catch (error) {
          console.error("User login error:", error);
          toast.error(error?.message);
        }
        finally{
          setIsLoading(false);
        }
      }
    };

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <form className='w-full max-w-lg flex items-center justify-center border border-gray-300 my-20 rounded-md shadow-sm shadow-orange-400 mx-4'>
        <div className='px-6 py-4 flex flex-col justify-center w-full'>
          <Title className="underline underline-offset-4 decoration-[1px] mb-4">Signin page</Title>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-o.5'>
              <Label htmlFor="email">Work Email</Label>
              <Input placeholder="tarek@gmail.com" type="email" value={email} onChange={handleEmail} required/>
              {errEmail && <p className='text-sm text-red-500 font-semibold'><span className='font-bold italic mr-1'>!</span>{errEmail}</p>}
            </div>
            <div className='flex flex-col gap-o.5'>
              <Label htmlFor="password">Password</Label>
              <Input placeholder="Create password" type="password" value={password} onChange={handlePassword}/>
              {errPassword && <p className='text-sm text-red-500 font-semibold'><span className='font-bold italic mr-1'>!</span>{errPassword}</p>}
            </div>
            <button onClick={handleSignIn} disabled={isLoading} className='bg-black/90 hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md hoverEffect disabled:bg-black/40 disabled:cursor-not-allowed'
            >{isLoading ? "Processing..." : "Sign In"}</button>
            <p className='text-sm text-center font-medium'>Don’t have an Account? <Link to="/signup">
            <span className='hover:text-blue-600 underline underline-offset-2 decoration-[1px] hoverEffect'>Sign up</span>
            </Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signin