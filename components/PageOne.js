import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import PageTemplate from './PageTemplate'
import Question from './Question'

const PageOne = ({context}) => {
  return <PageTemplate context={context}>
    <Question
      id="PageOneFirstQuestion"
      storeKey="email"
      title="Your Email"
      onChange={console.log}
    />
    <Question
      id="PageOneSecondQuestion"
      storeKey="firstName" 
      title="Your First Name"
      onChange={console.log}
    />
    <Question
      id="PageOneThirdQuestion"
      storeKey="lastName" 
      title="Your Last Name"
      onChange={console.log}
    />

  </PageTemplate>
}

export default observer(PageOne)
