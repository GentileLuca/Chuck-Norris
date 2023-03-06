//import { useState } from 'react'

import '../styles/button.css'

function Button(content, variant, clbk) {

  function renderClasses() {
    let classes = ['Button', 'text-centre', 'd-flex']
    return classes.json(" ")
  }

  function componentClickHandler(e){
    console.log("Button Clicked")

    if (clbk !== undefined && variant !== "disabled") {
      clbk()
    }

  }
  return (
    <div onClick={componentClickHandler()} className={renderClasses()}>
           {content}
    </div>
  )
}

export default Button
