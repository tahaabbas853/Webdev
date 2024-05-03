import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./prod.css";

const Prod = () => {

    const [prod, setProd] = useState([]);
    // use effect hook used to fetch data from db
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getall");
                setProd(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


const deleteProd = async(prodId)=>{
    await axios.delete(`http://localhost:8000/api/delete/${prodId}`)
    .then((response)=>{
        setProd((prevProd)=>prevProd.filter((prod)=>prod._id !== prodId))
        console.log(response);
    })
    .catch((error)=>{
        console.log(error)
    })
}

    return (
        <>
        <h1>CRUD APP USING MERN</h1>
        <div className='prodTable'>
            <Link to={"/add"} className='addButton'>Add Product</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Product name</th>
                        <th>Product Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map function to fetch data from db */}
                    {
                        prod.map((prod, index) => {
                            return (
                                <tr key={prod._id}>
                                    <td>{index + 1}</td>
                                    <td>{prod.prodname}</td>
                                    <td>{prod.prodprice}</td>
                                    <td className='actionButtons'>
                                        <button onClick={()=>deleteProd(prod._id)}><i class="fa-solid fa-trash"></i></button>
                                        <Link to={`/edit/`+prod._id}><i class="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
    
}

export default Prod
