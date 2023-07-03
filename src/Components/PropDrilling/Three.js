import React, { useContext } from 'react'
import Four from './Four'
// import AppContext from '../../Context'
import { AppContext  } from '../../Context'
function Three() {
    const {state} = useContext(AppContext)
  return (
    <div>
      <h1>This is Three </h1>
      <Four />
    </div>
  )
}

export default Three
