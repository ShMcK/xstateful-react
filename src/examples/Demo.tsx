import React from 'react'

const styles = {
    container: {
        border: '1px solid black',
        margin: 10,
        padding: 10,
        width: 350,
        alignText: 'left',
    },
    title: {}
}

export default props => (
  <div style={styles.container}>
    <h3 style={styles.title}>{props.title}</h3>
    <p>{props.state}</p>
    <button onClick={() => props.transition("NEXT")}>Transition</button>
  </div>
);