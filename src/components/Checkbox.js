import React from 'react'


function Checkbox (props) {
	
		return(
		 <input type="checkbox" 
		 name="checbox" 
		 checked={props.checked} 
		 onClick={props.onChange}/>
	  )
	  
	}
	



export default Checkbox