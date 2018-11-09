import React from 'react'

import Demo from "./Demo";
import StateContext from './StateContext'

class DemoWrapperWithMethods extends React.Component {
    sayHi() {
        console.log('Hi DemoWrapper')
    }
    render() {
        return <Demo title='withStatechart Wrapper' {...this.props} />
    }
}

export default StateContext.withStatechart(DemoWrapperWithMethods);