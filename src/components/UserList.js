import React from 'react'
import User from './User'


function UserList({users})  {
	const userElements = users.map(user =>
		 <User user = {user} key = {user.id} />
		 )
		return(
		
		
	<table>
	   <thead>
	      <tr>
            <th>Ф И О</th>
            <th>Дата рождения</th>
            <th>Номер телефона</th>
          </tr>
	
	   </thead>
	
       <tbody>
	            {userElements}    
        </tbody>
    </table>
	   )
}



export default UserList