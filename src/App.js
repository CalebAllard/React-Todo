import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [],
      controleForm: ''

    }

    
  }
    tolgeCompleted = index => {
      if(!this.state.tasks[index].completed){
        this.setState({tasks:[index].completed = 'true'});
      }else{
        this.setState({tasks:[index].completed = 'true'});
      }
    };
  
    handleSubmit = e => {
        e.preventDefault();
        const newItem = {
          task:this.state.controleForm,
          id: Date.now(),
          completed: false
        };
        this.setState({tasks:[...this.state.tasks, newItem]});
        this.setState({controleForm:''});
        
        
    };

    handleChange = e => {
        this.setState({controleForm: e.target.value});
    };
    
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.controleForm}/>
        <TodoList data={this.state.tasks} togleCompleted={this.tolgeCompleted} />
      </div>
    );
  }
}

export default App;
