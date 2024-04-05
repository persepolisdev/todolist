import { useState } from 'react'
import SVGComponent from './SVGComponent.jsx'
export default function Header(){
    const [count, setCount] = useState(0)

    return (
      <>
     
      <div className="header">
  
  
  <div className="inner-header flex">
  
<h1>Welcome to website Kishinfo</h1>
  </div>
  
  <div>
  <SVGComponent />
  </div>
  
  
  </div>
  
  
  
 
  
      </>
    )
  }