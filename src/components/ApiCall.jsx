import React from 'react'
import Axios from 'axios'
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY
const ApiCall = () => {
 const searchTerm = 'laptop'
 const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
 Axios.get(url)
 .then((response) => console.log(response.data))
 .catch((error) => console.log(error))

 
 return (
  <div>
   
  </div>
 )
}

export default ApiCall
