import React from 'react'

import Demo from "./Demo";
import StateContext from './StateContext'

export default StateContext.withStatechart(Demo, {
    title: 'withStateChart Wrapper'
})