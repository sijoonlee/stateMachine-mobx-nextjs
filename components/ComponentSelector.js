import React from 'react';
import { observer } from 'mobx-react';


function ComponentSelector({ Component, ...otherProps }) {

    return (
        <Component {...otherProps}/>
    )
}

export default observer(ComponentSelector);