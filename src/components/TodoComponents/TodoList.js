// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

class TodoList extends React.Component{
    constructor(){
        super();

    }

    render(){
        
        console.log(this.props.data);
        return(
        
            <>
               {this.props.data.map((item, index) => {
                   
                    return (<ToDo itemTask={item.task} completed={item.completed} key={item.id} togleComplteted={this.props.togleComplpleted} index={index}/>
                    );
                })}

            </>
        
        );
    }

}
export default TodoList;