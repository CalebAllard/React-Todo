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
    togleDone = (index) => {
      console.log(index);
      if(!this.state.tasks[index].completed){
        let temp = this.state.tasks[index];
        temp.completed = true;
        this.setState(this.state.tasks[index] = temp);
      }else{
        let temp = this.state.tasks[index];
        temp.completed = false;
        this.setState(this.state.tasks[index] = temp);
        
      }
      console.log(this.state.tasks);
    };

    removeCompleted = () => {
      let temp = this.state.tasks;
      // console.log(temp)
      this.setState(this.state.tasks = temp.filter((item) => {    
            return item.completed == false;
    }));
        

        
      
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
        <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.controleForm} removeCompleted={this.removeCompleted} />
        <TodoList data={this.state.tasks} togleDone={this.togleDone} />
      </div>
    );
  }
}

export default App;
