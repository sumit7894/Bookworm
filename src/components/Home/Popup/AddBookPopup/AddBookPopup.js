import React, { useState } from 'react'
import './AddBookPopup.css'
import axios from 'axios'
import BASE_URL from '../../../../utils/constants'
import toast, { Toaster } from 'react-hot-toast';
import useBookContext from '../../../../hooks/useBookContext'
const AddBookPopup = () => {
  const {setPopup,setCardData} = useBookContext();
  const [name,setName] = useState();
  const [tags,setTags] = useState();
  const [logo,setLogo] = useState();
  const [link,setLink] = useState();
  const [description,setDescription] = useState();

  const handleName = (e)=>{
    setName(e.target.value);
  }
  const handleTags = (e) =>{
    setTags(e.target.value);
  }
  const handleLogo = (e) =>{
    setLogo(e.target.value);
  }
  const handleLink =(e) =>{
    setLink(e.target.value);
  }
  const handleDescription =(e)=>{
    setDescription(e.target.value);
  }
  const handleAddBook = async ()=>{
    try {
      const data ={name,logo,tags,description};
      const response = await axios.post(`${BASE_URL}/books/add`,data);
      toast.success("Successfully addded the book");
      console.log("here is response",response);
      setTimeout(()=>{
        setPopup(false)
      },2000);
      setCardData((prevArray)=>[...prevArray,response.data.data])
    } catch (error) {
      console.log(error);
      toast(error.response.data.message);
    }
  }
  return (
    <div className='add__book__popup'>
      <Toaster/>
      <input type='text' placeholder='Name of the Book' value={name} onChange={handleName}/>
      <input type='text' placeholder='Genre' value={tags} onChange={handleTags}/>
      <input type='text' placeholder='Add cover URL' value={logo} onChange={handleLogo}/>
      <input type='text' placeholder='Link of the book'value={link} onChange={handleLink}/>
      <input type='text' placeholder='Description' value={description} onChange={handleDescription}/>
      <button className='add__book__button' onClick={handleAddBook}>
      Add Book +
      </button>
    </div>
  )
}

export default AddBookPopup