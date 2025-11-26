import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import Label from '../components/Label'
import Input from '../components/Input'
import {Link, useNavigate} from "react-router-dom"
import toast from "react-hot-toast";
import { serverUrl } from "../../config";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect (() => {
    if(token) {
      navigate("/");
    }
  }, [token]);

    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
  
    const handleName = (e) => {
      setClientName(e.target.value);
      setErrClientName("");
    };
  
    const handleEmail = (e) => {
      setEmail(e.target.value);
      setErrEmail("");
    };
  
    const handlePassword = (e) => {
      setPassword(e.target.value);
      setErrPassword("");
    };
  
    const EmailValidation = (email) => {
      return String(email)
        .toLowerCase()
        .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };

    const handleChecked = (e) => {
      setChecked(e.target.checked);
    }
  
    const handleSignUp = async (e) => {
      e.preventDefault();
  
      // if (checked) {
      //   toast.error("Please accept the terms and conditions");
      //   return;
      // }
  
      setIsLoading(true);
  
      // Reset errors
      setErrClientName("");
      setErrEmail("");
      setErrPassword("");
  
      let hasError = false;
  
      if (!clientName) {
        setErrClientName("Enter your full name");
        hasError = true;
      }
  
      if (!email) {
        setErrEmail("Enter your email");
        hasError = true;
      } else if (!EmailValidation(email)) {
        setErrEmail("Enter a valid email address");
        hasError = true;
      }
  
      if (!password) {
        setErrPassword("Create a password");
        hasError = true;
      } else if (password.length < 6) {
        setErrPassword("Password must be at least 6 characters");
        hasError = true;
      }
  
      if (hasError) {
        setIsLoading(false);
        return;
      }
  
      try {
        setIsLoading(true);
        if(clientName && email && EmailValidation(email) && password){
          const response = await axios.post(`${serverUrl}/api/user/register`, {
          name: clientName,
          email,
          password,
        });
        const data = response?.data;
        if (data?.success) {
          toast.success(data?.message);
          navigate("/signin");
        } else {
          toast.error(data?.message);
        }
       }
      } catch (error) {
        console.log("User registration error", error);
        toast.error(error?.response?.data?.message || "Registration failed");
      } finally {
        setIsLoading(false);
      }
    };
  return (
       <div className='w-full h-full flex items-center justify-center'>
      <form className='w-full max-w-lg flex items-center justify-center border border-gray-300 my-20 rounded-md shadow-sm shadow-orange-400 mx-4'>
        <div className='px-6 py-4 flex flex-col justify-center w-full'>
          <Title className="underline underline-offset-4 decoration-[1px] mb-4">Create you Account</Title>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-o.5'>
              <Label htmlFor="name">Full Name</Label>
              <Input placeholder="ex: Md tarek" type="text" value={clientName} onChange={handleName} />
              {errClientName && <p className='text-sm text-red-500 font-semibold'><span className='font-bold italic mr-1'>!</span>{errClientName}</p>}
            </div>
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
            <div className='flex md:items-center gap-2'>
              <input type="checkbox" onClick={handleChecked}/>
              <p className='text-sm text-black'>I agree to the OREBI 
                <span className='text-blue-500'>Terms of Services</span> and <span className='text-blue-500'>Privacy Policy</span></p>
            </div>
            <button disabled={!checked || isLoading} onClick={handleSignUp} className='bg-black/90 hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md hoverEffect
            disabled:bg-black/40 disabled:cursor-not-allowed'
            >{isLoading ? "Processing..." : "Create Account"}
            </button>
            <p className='text-sm text-center font-medium'>Already have an Account? <Link to="/signin">
            <span className='hover:text-blue-600 underline underline-offset-2 decoration-[1px] hoverEffect'>Sign in</span>
            </Link></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp