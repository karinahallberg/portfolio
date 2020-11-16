import React from 'react'
import Photo from "./Photo";

const ImageContainer = props => {

 const displayPhotos = () => {
  return props.photos.map(photo => {
   return <Photo url={photo.url} />
  })
 }
 return (
  <>
   <section>{displayPhotos()}</section>
  </>
 )
}

export default ImageContainer

