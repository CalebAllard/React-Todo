import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    togleDone = e => {
        if (e.target.classList.contains('completed')){
            e.target.classList.remove('completed')
            this.props.togleCompleted(this.props.index);

        }else{
            e.target.classList.add('completed');
        }
    };

    render(){
        
        return (
            <>
            <div className={`item${this.props.completed ? ' completed' : ''}`} onClick={this.togleDone}>
                <p>{this.props.itemTask}</p>
            </div>
            </>
        );
    }
}
export default Todo;