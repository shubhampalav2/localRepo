import React from 'react'

const Itemdate = (props) => {
    const day = props.day;
    const month = props.month;
    const year = props.year;
  return (
    <div>
          <h2>Manufacture Date:{day}{month}{year}</h2>
          {props.children}
    </div>
  )
}

export default Itemdate;
