import React from 'react'

const Card = (props) => {
    return (
<div className='product-card'>
        <img src={props.image} alt="Products" style={{width:"100%", height:"400px", objectFit:"fit"}} />
           <div style={{padding:"1.5rem"}}>
             <h4 style={{fontSize:"1.5rem", margin:"0 0 0.5rem 0"}}>{props.title}</h4>
               <p style={{margin:"0.5rem 0", color:"#555"}}>{props.release}</p>
               <p style={{margin:"0.5rem 0", color:"#555"}}><del style={{color:"red"}}>{props.director}</del>
               <strong style={{margin:"0.5rem 0", color:"#555"}}>{props.description}</strong></p>
           </div>
        </div>

    )
}

export default Card