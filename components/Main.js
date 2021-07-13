import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { observable, flow } from 'mobx'

import createContext from '../function/createContext'
import ComponentSelector from '../components/ComponentSelector'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

const PAGE_MAP = {
    "PageOne": PageOne,
    "PageTwo": PageTwo,
}


const Main = () => {
    const [ context ]= useState(createContext(PAGE_MAP, "PageOne"))

    return (
        <ComponentSelector
            Component={context.activePage}
            context={context}
        />
    )

}

export default observer(Main)