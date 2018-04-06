import React, { Component } from 'react'

import ToolBar from './ToolBar'
import UserList from './UserList'
import users from '../employees'
import Form from './Form'




class App extends Component {
	    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.handleAdd = this.handleAdd.bind(this)
       
    }

	 nextId() {
        this._nextId = this._nextId || 18

        return this._nextId++
    }
	
	
	handleAdd(name, phone, birthday, role, isArchive) {
        const user = {
            id: this.nextId(),
            name,
			phone,
			birthday,
			role,
			isArchive,
        };

        const users = [...this.state.users, user]

        this.setState({ users })
    } 
	
		
  render() {
    return (
	<div>
	       <h3>Тестовое задание</h3>
		   <ToolBar />
           <UserList users = {users} />
		   <Form onAdd={this.handleAdd} />
	</div>
    )
  }
}

export default App
