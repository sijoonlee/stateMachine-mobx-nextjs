import React from 'react'
import { observer } from 'mobx-react'
import createStateMachine from '../function/createStateMachine'

const stateMachine = createStateMachine

const Page = () => {
  return <div>
    <button onClick={stateMachine.onEvent}>Click!</button>

  </div>
}
export default observer(Page)
