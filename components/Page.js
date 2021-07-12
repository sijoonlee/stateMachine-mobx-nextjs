import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { observable, flow } from 'mobx'

const createMachine = (list) => {
  const self = observable({
    modelStore: list.map(item => { return {id: item.id, value:null}}),
    savedState: "SAVED",
    submit(){
      self.savedState = "SAVED"
      console.log("submit!", self.modelStore)
    },
    updateModelStore(id, value){
      if(self.modelStore[id] !== value){
        self.modelStore[id] = value,
        self.savedState = "READY"
      }
    }
  })
  return self
}

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

function pushItem(list, child) {
  if(child.type == Question){
    list.push({ type: "Question", props: child.props})
  }
}

const createList = (props) => {
  let list = [];
  if(Array.isArray(props.children)){
    props.children.forEach((child)=>{
      pushItem(list, child)
    })
  } else {
    pushItem(list, props.children)
  }
  return list
}

const PageTemplate = observer((props) => {

  const [ machine ]= useState(createMachine(createList(props)))
  
  return ( 
    <div>
      {props.children.map((child)=> { 
        // override onChange
        const onChange = (value) => {
            child.props.onChange?.(value)
            machine.updateModelStore(child.props.id, value)
        }
        return React.cloneElement(child, { onChange })
      })}

      <Button
        id="submit"
        title="Submit"
        onClick={()=>{machine.submit()}}
        disabled={machine.savedState == "SAVED"}
      />
    </div>
  )
})

const Page = () => {
  return <PageTemplate>
    <Question
      id="firstQuestion" 
      title="Your Name"
      onChange={console.log}
    />
    <Question
      id="secondQuestion" 
      title="Your Email"
      onChange={console.log}
    />
        <Question
      id="thirdQuestion" 
      title="Your Email"
      onChange={console.log}
    />

  </PageTemplate>
}

export default observer(Page)
