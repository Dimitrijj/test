import React, {Component} from 'react'

class ToolBar extends Component {
   
  render() {
    return(
     
          <div className="toolbar">
            <button onClick = { this.nameSort } className="toolbar1">
            
             Сортировка по имени
            </button>

            <button onClick = { this.ageSort } className="toolbar2">
             
            Сортировка по возрасту
            </button>
          </div>
       
     
    );
  }
}


export default ToolBar