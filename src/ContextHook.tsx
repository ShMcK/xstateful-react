import React, { useContext } from 'react'
import StateContext from './StateContext'

const MachineContextTest = props => {
    const { state, transition } = StateContext.useMachineContext();
    return (
        <div style={{ width: 200 }}>
            <span>useContextValue: {state}</span>
            <button onClick={() => transition('NEXT')}>Transition</button>
        </div>
    )
}

export default MachineContextTest
