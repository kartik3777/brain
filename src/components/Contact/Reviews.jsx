import React from 'react';
import ImageGrid from './ImageGrid';

const images = [

  { src: './reviews/rev-8.jpg', alt: 'Image 8' },
  { src: './reviews/rev-7.jpg', alt: 'Image 7' },
    { src: './reviews/rev-1.jpg', alt: 'Image 1' },
    { src: './reviews/rev-2.jpg', alt: 'Image 2' },
    { src: './reviews/rev-3.jpg', alt: 'Image 3' },
    { src: './reviews/rev-4.jpg', alt: 'Image 4' },
    { src: './reviews/rev-9.jpg', alt: 'Image 9' },
    { src: './reviews/rev-10.jpg', alt: 'Image 10' },
    { src: './reviews/rev-5.jpg', alt: 'Image 5' },
    { src: './reviews/rev-11.jpg', alt: 'Image 11' },
    { src: './reviews/rev-6.jpg', alt: 'Image 6' },
   
  ];

function Reviews() {
  return (
    <div style={{borderTop:"1px solid lightgrey"}}>
      <h2 style={{textAlign:"center", margin:"15px",marginBottom:"25px", color:"navy"}}>Students & Parents Reviews</h2>
      <ImageGrid images={images} />
    </div>
  )
}

export default Reviews
