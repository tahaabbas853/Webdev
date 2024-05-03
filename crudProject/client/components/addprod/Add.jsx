import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';
import "./add.css";

const Add = () => {

  const  prods = {
    prodname:" ",
    proddec:" ",
    prodprice:" ",
  }

  const [ prod, setProd] =  useState(prods);
  const navigate = useNavigate();
  const inputHandler = (e)=>{
    const {name, value} = e.target;
    setProd({...prod, [name]:value})
    // console.log(prod);
  }


  const submitForm = async(e) =>{
    e.preventDefault();
    await axios.post("http://localhost:8000/api/create", prod)
    .then((response)=>{
      console.log(response)
       toast.success(response.data.msg, {position:"top-right"})
       navigate("/")
    })
    .catch(error => console.log(error))
  }

  return (
    <div className='addProd'>
        <Link to={"/"} className='inputGr'>Back</Link>
        <h3>Add new product</h3>
        <form className='addProdForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="prodname">Product Name</label>
                <input type="text" onChange={inputHandler}   id="prodname" name="prodname" autoComplete='off' placeholder='Product Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="proddec">Product Description</label>
                <input type="text" onChange={inputHandler}   id="proddec" name="proddec" autoComplete='off' placeholder='Product Description' />
            </div>
            <div className="inputGroup">
                <label htmlFor="prodprice">Product Price</label>
                <input type="prodprice" onChange={inputHandler}   id="prodprice" name="prodprice" autoComplete='off' placeholder='Product Price' />
            </div>

            <div className="inputGroup">
                <button type="submit">ADD Product</button>
            </div>
        </form>
    </div>
  )
}

export default Add;