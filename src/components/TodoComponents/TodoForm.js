import React from 'react';


class ToDoForm extends React.Component{
    constructor(props){
        super(props);
    } 
   
    render(){
        return(
                <>
                <form onSubmit={this.props.handleSubmit}>
                    <label>Add Task
                    <input type='text' name='task' id='task' onChange={this.props.handleChange} value={this.props.value}/>
                    </label>
                    <button>add Item</button>
                </form>

                </>
            );
    }



}

export default ToDoForm;