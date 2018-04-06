import React from 'react'

class Form extends React.Component {
	constructor(props){
	   super(props)
	   
	   this.state={
		   name:'',
			phone:'',
			birthday:'',
			role:'',
			isArchive:''
	   };
	   
	   this.handleSubmit = this.handleSubmit.bind(this)
	   this.handleChange = this.handleChange.bind(this)
	   this.handlePhone = this.handlePhone.bind(this)
	   this.handleBirthday = this.handleBirthday.bind(this)
	   this.handleRole = this.handleRole.bind(this)
	   this.handleIsArchive = this.handleIsArchive.bind(this)
	}
	
	handleSubmit(event) {
		event.preventDefault()
		console.log(this.state.isArchive)
		
			this.props.onAdd(this.state.name)
			this.setState ({name: ''})
			this.props.onAdd(this.state.phone)
			this.setState ({phone: ''})
			this.props.onAdd(this.state.birthday)
			this.setState ({birthday: ''})
			this.props.onAdd(this.state.phone)
			this.setState ({phone: ''})
			this.props.onAdd(this.state.role)
			this.setState ({select: ''})
			this.props.onAdd(this.state.isArchive)
			this.setState ({isArchive: ''})
	}
	
	handleChange(event) {
		let name = event.target.value
		
		this.setState({ name })
	}
	
	handlePhone(event) {
		let phone = event.target.value
		
		this.setState({ phone })
	}
	
	handleBirthday(event) {
		let birthday = event.target.value
		
		this.setState({ birthday })
	}
	
	handleRole(event) {
		let role = event.target.value
		
		this.setState({ role })
	}
	
	handleIsArchive(event) {
		let isArchive = event.target.value
		
		this.setState({ isArchive })
	}
	render(){
	
	 return (
       
        
                <form onSubmit={this.handleSubmit}>
				
				        
                    <div>
                   
                        <input
                            type="text"
                            name="name"
                            placeholder="Имя сотрудника"
							value = {this.state.name}
							autoFocus="autofocus"
							onChange={this.handleChange}
                             />
                   
                    </div>
                    <div>
                        <input type="number"
						name="phone"
						value = {this.state.phone}
						onChange={this.handlePhone}
						pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}" 
						placeholder="Телефон сотрудника"
						
                         />
                    </div>
                        <input type="date"
						name="birthday" 
						value = {this.state.birthday}
						onChange={this.handleBirthday}
						placeholder="Дата рождения"
						
                         />
                  
					<div>
					 <select name="role" value = {this.state.role}
						onChange={this.handleRole}>
                        <option value="driver">Водитель</option>
                        <option value="waiter">Официант</option>
                        <option value="cook">Повар</option>
                     </select>
                     </div>
					    <div>
                        <input type="checkbox"  name="isArchive" value = {this.state.isArchive}
						onToggle={this.handleIsArchive} />
                         В архиве
						 </div>
                          <input type="reset" name="reset" value="Reset" />
                   
                   
                   
                     <button type="submit" >Добавить в список</button>
                </form>
           
       
    )
  }
}

export default Form