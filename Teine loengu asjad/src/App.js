import React, { useState } from "react"
import "./css/App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"
import Me from "./components/Me"
import MyButtonTest from "./components/MyButtonTest"
function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name title="JMK" />
      <Name />
      <Me name="Jan M. K."/>

      <h1>Counters that update separately</h1>
      <MyButtonTest count={count} onClick={handleClick} />
      <MyButtonTest count={count} onClick={handleClick} />
    </>
  )
}

export default App