import React, { useState } from 'react'
import Title from "../components/Title";
import { IoMdAdd, IoMdCloudUpload } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Input, { Label } from '../components/ui/Input';
import toast from "react-hot-toast";
import axios from "axios"
import { serverUrl } from '../../config';
import { useNavigate } from 'react-router-dom';

const Add = ({token}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    discountedPercentage:"",
    _type: "",
    category: "",
    offer: false,
    isAvailable: true,
    badge: false,
    tags:[],
    image1:null,
    image2:null,
  });
  const navigate = useNavigate();
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
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({...formData, [name]: value});
    }
  }

  const handleUploadProduct = async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if(value instanceof File){
          data.append(key, value);
        }else{
          data.append(key, value);
        }
      });
      const response = await axios.post(serverUrl + "/api/product/add",
        data, {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        });
        const responseData = await response?.data;
        if (responseData?.success) {
          toast.success(responseData?.message)
          navigate('/list')
        } else {
          toast.error(responseData?.message)
        }
    } catch (error) {
      console.log("Product data uploading error", error);
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleUploadProduct} className='flex flex-col items-start gap-3 w-full pb-10'>
      <Title>Upload products to Database</Title>
      <div className='flex flex-wrap items-center gap-5'>
       {["image1","image2"].map((imageId)=>(
        <label htmlFor={imageId} key={imageId}>
         <div className='text-gray-500 border-2 border-dashed border-gray-500 px-4 py-2 hover:border-black duration-300 ease-in-out cursor-pointer rounded-md'>
          {formData[imageId] ? (
            <img src={URL.createObjectURL(formData[imageId])} alt="preview" className='w-10 h-10 object-cover rounded-md'/>
          ) : (
            <IoMdCloudUpload className='w-10 h-10 object-cover rounded-md'/>
          )}
          <input type="file" hidden id={imageId} onChange={handleImageChange} disabled={loading}/>
          <p>{formData[imageId] ? "Change" : "Upload"}</p>
        </div>
       </label>
       ))}
      </div>
      <div className='flex flex-col w-full gap-1'>
        <Label htmlFor="name">Product name</Label>
        <Input type="text" placeholder="Type product name here..." name="name" onChange={handleChange} disabled={loading}/>
      </div>
      <div className='flex flex-col w-full gap-1'>
        <Label htmlFor="description">Product description</Label>
        <textarea type="text" placeholder="Type product description here..." name="description" onChange={handleChange} disabled={loading} rows={2} className='border px-4 py-2 border-gray-500 rounded-md max-w-lg resize-none text-gray-400'/>
      </div>
      <div className='flex flex-col w-full gap-1'>
        <Label htmlFor="brand">Product brand</Label>
        <Input type="text" placeholder="Type product brand here..." name="brand" onChange={handleChange} disabled={loading}/>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5'>
       <div className='flex flex-col w-full gap-1'>
        <Label htmlFor="price">Product price</Label>
        <Input type="number" placeholder="Enter price" name="price" onChange={handleChange} disabled={loading}/>
       </div>    
       <div className='flex flex-col w-full gap-1'>
        <Label htmlFor="discountedPercentage">Product discount percentage</Label>
        <Input type="number" placeholder="discount percentage %" name="discountedPercentage" onChange={handleChange} disabled={loading}/>
       </div>    
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5'>
        <div className='flex flex-row items-center gap-4 md:gap-5'>
          <div className='flex flex-col w-full gap-1'>
          <Label htmlFor="_type">Product type</Label>
          <select name="_type" onChange={handleChange} disabled={loading} className='border px-4 py-1.5 border-gray-500 rounded-md max-w-[150px]'>
            <option value="">Select type</option>
            <option value="new_arrivals">New Arrivals</option>
            <option value="best_sellers">Best Sellers</option>
            <option value="spacial_offers">Special Offers</option>
            <option value="promotions">Promotions</option>
          </select>
        </div>
         <div className='flex flex-col w-full gap-1'>
          <Label htmlFor="category">Product category</Label>
          <select name="category" onChange={handleChange} disabled={loading} className='border pl-4 pr-6 py-1.5 border-gray-500 rounded-md max-w-[150px]'>
            <option value="">Select category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Accessories">Accessories</option>
            <option value="Others">Others</option>
          </select>
        </div>
        </div>
         <div className='flex flex-row items-center gap-4 md:gap-5'>
          <div className='flex flex-col w-full gap-1'>
          <Label htmlFor="offer">Offer</Label>
          <select name="offer" onChange={handleChange} disabled={loading} className='border pl-4 pr-6 py-1.5 border-gray-500 rounded-md max-w-[150px]'>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>
         <div className='flex flex-col w-full gap-1'>
          <Label htmlFor="isAvailable">Available</Label>
          <select name="isAvailable" onChange={handleChange} disabled={loading} className='border pl-4 pr-6 py-1.5 border-gray-500 rounded-md max-w-[150px]'>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
         <div className='flex flex-col w-full gap-1'>
          <Label htmlFor="badge">Badge</Label>
          <select name="badge" onChange={handleChange} disabled={loading} className='border pl-4 pr-6 py-1.5 border-gray-500 rounded-md max-w-[150px]'>
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>
       </div>
      </div>
      <div className='flex flex-col gap-1 items-start'>
        <Label htmlFor='tags'>Tags</Label>
        <div>
          {["Fashion", "Electronics", "Sports", "Accessories", "Others"].map((tag)=>(
            <div key={tag} className='flex items-center gap-2'>
              <input type="checkbox" id={tag.toLowerCase()} name='tags' value={tag} className='cursor-pointer'
              onChange={(e)=>{
                if (e.target.checked) {
                  setFormData((prevData)=>({
                    ...prevData,
                    tags:[...prevData.tags, tag],
                  }));
                } else {
                  setFormData((prevData)=>({
                    ...prevData,
                    tags: prevData.tags.filter((t) => t !== tag),
                  }));
                }
              }}/>
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <button disabled={loading} type='submit' className='bg-black/80 text-white uppercase font-semibold flex items-center justify-center gap-2 tracking-wide
      w-44 py-2.5 rounded-md hover:bg-black duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed'>
        Add {loading ? <span className='text-white animate-spin'>
          <AiOutlineLoading3Quarters />
          </span> : <IoMdAdd className='text-lg ml-5 border rounded-md '/>}
      </button>
    </form>
  )
}

export default Add