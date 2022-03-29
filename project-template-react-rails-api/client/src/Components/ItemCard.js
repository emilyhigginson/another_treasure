import React from 'react'

function ItemCard({name, description, image, category, location}) {
  return (
    <div className="itemCards">
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={image} alt ={name} className="cardImages"/>
        <p>{category}</p>
        <p>{location}</p>
    </div>
  )
}

export default ItemCard