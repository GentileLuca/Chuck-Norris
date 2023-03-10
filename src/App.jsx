import { useState } from 'react'
import './styles/App.css'


import Button from './components/button'


function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState(0)

  function ue(){
    console.log("Hello World")
  }


  return (
    <div className="App">

      <Button 
      content="Hello World"
      variant="disabilited"
      clbk = {ue}
      
      />
       <Button 
      content="Hello World"
      variant="abilited"
      clbk = {ue}
      />

    </div>
  )
}

export default App
