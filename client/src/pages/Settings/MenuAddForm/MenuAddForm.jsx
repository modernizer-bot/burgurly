import React from 'react'
import { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import './MenuAddForm.scss'
import Button from '../../../components/Button/Button';
const MenuAddForm = ({handleClose}) => {
  const [name,setname] = useState("");
  const [price,setprice] = useState();
  const [stock,setstock] = useState();
  const [image,setImage]=useState();

  const handleChange=(e)=>{
    var reader = new FileReader();
  var url = reader.readAsDataURL(e.target.files[0]);
  console.log(url)
    // if (e.target.files) {
    //   setImage(e.target.files[0]);
    // }
  }
  return (
    <>
      <div className="menuAddForm">
        <div className="menuAddForm__inputdetails--inputContainer"><input type='text' placeholder='Enter Name of the dish' value={name} onChange={(e)=>setname(e.target.value)}/></div>
        <div className="menuAddForm__inputdetails--inputContainer"><input type='number' placeholder='Enter Price' value={price} onChange={(e)=>setprice(e.target.value)}/></div>
        <div className="menuAddForm__inputdetails--inputContainer"><input type='number' placeholder='Enter Stock' value={stock} onChange={(e)=>setstock(e.target.value)}/></div>
        <div className="menuAddForm__inputdetails-upload">
        <label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleChange(e)}
              />
              Upload Image
            </label>
        </div>
        <div className="menuAddForm__inputdetails-upload--text">Dish Preview</div>

        <MenuCard formCalled={true} src={image}/>
        <div className="menuAddForm__buttons">
          <div><Button type="ghost" config="discard" color='#ea7c69'>Discard Changes</Button></div>
          <div><Button type="primary" config="save">Save</Button></div>
        </div>
      </div>
    </>
  )
}

export default MenuAddForm
