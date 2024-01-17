import React from 'react'

const Item = (props) => {
    const name = props.name;
  return (
    <div>
          <h2>Item:{name}</h2>
    </div>
  )
}

export default Item
