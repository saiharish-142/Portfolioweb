import React from "react";
import "./Button.css"
import {Link, Switch} from "react-router-dom"

const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--medium','btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    connecting
})=>{
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle
      : STYLES[0];

      const checkButtonSize = SIZES.includes(buttonSize)
      ?buttonSize
      :SIZES[0];

      return(
          <Link className='btn-mobile'>
              <button 
               onClick={()=>window.location.replace(connecting)}
              className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
           //   onClick={onClick}
              type={type}
              >
                  {children}
              </button>
          </Link>
      )

}