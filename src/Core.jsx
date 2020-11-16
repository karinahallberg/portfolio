import React, { Component } from 'react'
import ImageContainer from "./ImageContainer";

export default class Core extends Component {
 constructor(){
  super()
  this.state = {
   photos: []
  }
 }

 componentDidMount (){
  fetch('https://api.thedogapi.com/v1/images/search?limit=6')
  .then(response => {
   if (!response.ok) {
    throw Error("Error fetching the images")
   }
   return response.json()
   .then(allData => {
    this.setState({ photos: allData })
   })
   .catch(err => {
    throw Error(err.message)
   })
  })
 }

 render() {
  return (
   <div>
    <p>Is this working</p>
    <ImageContainer photos={this.state.photos}/>
   </div>
  )
 }
}
