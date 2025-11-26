import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { serverUrl } from '../../config';
import ProductBanner from './ProductBanner';
import Pagination from './Pagination';

const PaginationProductList = () => {
    const [itemsPerPage, setItemsPerPage] = useState(8);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        try {
            setLoading(true);
            const fetchData = async () =>{
                const response = await axios.get(serverUrl + '/api/product/list');
                const data = response?.data;
                if (data?.success) {
                    setProducts(data?.products);
                    setTotal(data?.total);
                } else {
                    console.log("Product fetching Error", data?.message);
                }
            };
            fetchData()
        } catch (error) {
            console.log("Error", error);
        }finally{
            setLoading(false);
        }
    }, []);

     const itemsPerPageFormBanner = (itemsPerPage) => {
        setItemsPerPage(itemsPerPage);
    }

  return (
    <div className='flex flex-col gap-5 w-full'>
        <ProductBanner itemsPerPageFormBanner={itemsPerPageFormBanner}/>
        <Pagination itemsPerPage={itemsPerPage} products={products}/>
    </div>
  )
}

export default PaginationProductList