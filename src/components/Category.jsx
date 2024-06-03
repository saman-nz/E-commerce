import React from 'react'

export default function Category(props) {
  return (
    <div className='category_sec ' style={{background:props.color}}>
      <img src={props.image} alt={props.title} />
      <h5>{props.title}</h5>
    </div>
  )
}
