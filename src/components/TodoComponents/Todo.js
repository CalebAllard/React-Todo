import React from 'react';
import './Todo.css'

class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){
        
        return (
            <>
            <div className={`item${this.props.completed ? ' completed' : ''}`} onClick={index => this.props.togleDone(this.props.index)}>
                <p>{this.props.itemTask}</p>
            </div>
            </>
        );
    }
}
export default Todo;