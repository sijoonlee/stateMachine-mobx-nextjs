import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { observable, flow } from 'mobx'
import Button from './Button'

const PageTemplate = ({context, children}) => {
    return ( 
      <div>
        {children.map((child)=> { 
          // override onChange
          const onChange = (value) => {
              child.props.onChange?.(value)
              context.updateValueStore(child.props.storeKey, value)
          }
          return React.cloneElement(child, { onChange })
        })}
  
        <Button
          id="submit"
          title="Submit"
          onClick={()=>{context.submit()}}
          disabled={context.savedState == "SAVED"}
        />
      </div>
    )
  }

  export default observer(PageTemplate);