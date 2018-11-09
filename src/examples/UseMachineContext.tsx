import React from 'react'

import Demo from './Demo'
import StateContext from './StateContext'

const UseMachineContext = props => {
    const { state, transition } = StateContext.useMachineContext({
        actions: {
            sayHi() {
                console.log('hi')
            }
        }
    });
    return (
        <Demo title='UseMachineContext' state={state} transition={transition} />
    )
}

export default UseMachineContext
