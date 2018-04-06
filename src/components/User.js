import React, { Component } from 'react'
import Checkbox from './Checkbox'
import Button from './Button'


class User extends Component {
	  constructor(props) {
        super(props)

       this.state = {
			isOpen: false,
			editing: false
		}

        this.handleSubmit = this.handleSubmit.bind(this)
		this.handleClick = this.handleClick.bind(this)
       
    }
		
		handleSubmit(event) {
             event.preventDefault()

             const name = this.refs.name.value

              this.props.onEdit(this.props.id, name)
              this.setState({ editing: false })
    }
	
	 renderDisplay() {
		  const {user} = this.props
        return (
		
	             <tr onClick = {this.handleClick}>
		               <td>{user.name}</td>
                       <td>{user.role}</td>
			           <td>{user.phone}</td>
		
                        {this.getBody()}
						
		         </tr>
		         
                    )
                  }
       renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.name} />
                <Button type="submit">Сохранить</Button>
            </form>
        );
    }
   
		
	
   render() {
	    return this.state.editing ? this.renderForm() : this.renderDisplay();
   
  }
  
  getBody() {
	  if(!this.state.isOpen) return null
	  const {user} = this.props
	  return (
	  <td> 
	  <p>{user.name}</p> 
	  <Button onClick={() => this.setState({ editing: true })}>Редактировать</Button>
	  <p>{user.role}</p>
	  <p>{user.phone}</p> 
	  <p>{user.birthday} </p> 
	  <p><Checkbox checked = {user.isArchive}/> В архиве</p>
	  </td>
  )}
  
  handleClick() {
	this.setState({
		isOpen: !this.state.isOpen
	})
  }
  
}



export default User