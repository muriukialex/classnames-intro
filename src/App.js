import { useState } from "react"
import "./App.css"

import cx from "classnames"

function App() {
  const [toggleState, setToggleState] = useState(false)

  const handleToggleState = () => {
    setToggleState(!toggleState)
  }

  const toggleClasses = cx({
    state: true,
    on: toggleState,
    off: !toggleState,
  })

  return (
    <div className="App">
      <div className={toggleClasses}>
        {toggleState ? <p>is On</p> : <p>is Off</p>}
      </div>

      <button onClick={handleToggleState}>
        Toggle {toggleState ? "off" : "on"}
      </button>
    </div>
  )
}

export default App
