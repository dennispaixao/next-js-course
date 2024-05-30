import React from 'react'

const Docs = ({params}:{params:{
    slug:string[]
}}) => {
    
 let    content= params.slug?.map((param)=><li>{param}</li>)
    return (

    <>
    <h1>Docs</h1>
    {content}
    </>
  )
}

export default Docs
