import React from 'react';

const Question = (props) => {
    const _handleChange = (event) => {
      props?.onChange?.(event.target.value)
    }
    return (
      <div id={props.id}>
        <div>{props.title}</div>
        <input type="text" onChange={_handleChange}/>
      </div>
    )
}

export default Question;