import React from 'react';

const Image = ({results, loading}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {results.map(img =>(
        <img src={img.urls.small}/>
      ))}
    </div>
  );
};

export default Image;