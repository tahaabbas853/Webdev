import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../addprod/add.css";
import toast from 'react-hot-toast';

const  Edit = () => {

 const prods = {
    prodname: "",
    proddec: "",
    prodprice: ""
 }

 // Hook use to fetch id from the url
 const {id} = useParams();
 const navigate = useNavigate();
 const [prod, setProd] = useState(prods);

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setProd({...prod, [name]:value});
    // console.log(prod);
 }

 useEffect(()=>{
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setProd(response.data)
    })
    .catch((error)=>{
        console.log(error);
    })
 },[id])


 const submitForm = async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/update/${id}`, prod)
    .then((response)=>{
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
 }

return (
    <div className='addProd'>
        <Link to={"/"} className='inputGr'>Back</Link>
        <h3>Update product</h3>
        <form className='addProdForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="prodname">Product Name</label>
                <input type="text" value={prod.prodname} onChange={inputChangeHandler}  id="prodname" name="prodname" autoComplete='off' placeholder='Product Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="proddec">Product Description</label>
                <input type="text" value={prod.proddec} onChange={inputChangeHandler}  id="proddec" name="proddec" autoComplete='off' placeholder='Product Description' />
            </div>
            <div className="inputGroup">
                <label htmlFor="prodprice">Product Price</label>
                <input type="prodprice" value={prod.prodprice} onChange={inputChangeHandler}  id="prodprice" name="prodprice" autoComplete='off' placeholder='Product Price' />
            </div>

            <div className="inputGroup">
                <button type="submit">Update Product</button>
            </div>
        </form>
    </div>
  )
}

export default  Edit