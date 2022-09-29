import { useState } from "react"

export default function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(previousCounter => ++previousCounter)
  }
  
  // View: the UI definition
  return (
    <div>
      <h1>
      Value: {counter} <button onClick={increment}>Increment</button>
      </h1>
      
    </div>
  )
}