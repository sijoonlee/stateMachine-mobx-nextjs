import React from 'react';


const Button = (props) => {
    const _handleClick = (_) => {
      props?.onClick?.()
    }
    return (
      <button
        id={props.id} 
        onClick={_handleClick}
        disabled={props.disabled}
      >
        {props.title}
      </button>
    )
}

export default Button;