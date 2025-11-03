import React, { useState } from 'react'
import Title from "../components/Title";
import { IoMdCloudUpload } from "react-icons/io";
import Input, { Label } from '../components/ui/Input';

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    discount:"",
    _type: "",
    category: "",
    offer: false,
    available: true,
    badge: false,
    tags:[],
    image1:null,
    image2:null,
  });
  const handleImageChange = (e) =>{
    const { id, files } = e.target;
    setFormData({
      ...formData,
      [id]: files[0],
    });
  };

  const handleChange = (e) => {
    const {name, value, type, checked } = e.target;
    if (type === "checkbox") {
      
    } else {
      setFormData({...formData, [name]: value});
    }
  }

  return (
    <form className='flex flex-col items-start gap-3 w-full pb-10'>
      <Title>Upload products to Database</Title>
      <div className='flex flex-wrap items-center gap-5'>
       {["image1","image2"].map((imageId)=>(
        <label htmlFor={imageId} key={imageId}>
         <div className='text-gray-500 border-2 border-dashed border-gray-500 px-4 py-2 hover:border-black duration-300 ease-in-out cursor-pointer rounded-md'>
          {formData[imageId] ? (
            <img src={URL.createObjectURL(formData[imageId])} alt="preview" className='w-20 h-20 object-cover rounded-md'/>
          ) : (
            <IoMdCloudUpload className='w-20 h-20 object-cover rounded-md'/>
          )}
          <input type="file" hidden id={imageId} onChange={handleImageChange}/>
          <p>{formData[imageId] ? "Change" : "Upload"}</p>
        </div>
       </label>
       ))}
      </div>
      <div className='flex flex-col w-full gap-1'>
        <Label htmlFor="name">Product name</Label>
        <Input type="text" placeholder="Type product name here..." name="name" onChange={handleChange}/>
      </div>
    </form>
  )
}

export default Add