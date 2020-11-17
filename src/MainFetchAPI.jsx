import React from 'react'


const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY 


class Main extends React.Component {
 
state = {
 images: [],
 error: null
}

handleMakeRequest = async (e) => {
  console.log("working!!!")
 e.preventDefault()
 const searchTerm = 'laptop'
 const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
 const request = await fetch(url)
 const response = await request.json()
 this.setState({ images: response.hits, error: null})
}

render () {
 return(
  <div>
    {this.handleMakeRequest}
    <div>{this.state.images}</div>
  </div>
 )
}

}

export default Main
