import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import PageTemplate from './PageTemplate'
import Question from './Question'

const PageTwo = ({context}) => {
  return <PageTemplate context={context}>
    <Question
      id="PageTwoFirstQuestion" 
      title="Street"
      storeKey="street"
      onChange={console.log}
    />
    <Question
      id="PageTwoSecondQuestion" 
      title="State"
      storeKey="state"
      onChange={console.log}
    />
  </PageTemplate>
}

export default observer(PageTwo)
