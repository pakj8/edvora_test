import React from 'react'

const ChildComponent = ({products,updateProduct}) => {
  return (
    <>
      <div>{products}</div>
      <button onClick={() => {
        updateProduct('Changed')
      }}></button>
    </>
  )
}

export default ChildComponent