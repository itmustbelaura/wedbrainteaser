import React, { Component } from 'react';
import './App.css';
import './TodoForm';

class App extends Component {
  render() {
    return (
      <div className="Todos Brainteaser">
        <header className="Laura's Todos Brainteaser">
      
        </header>
      </div>
    );
  }
}

state = {todos: [] }

addItem = (name) => {
  const {todos} = this.state
  const thing = {id: name}
this.setState({todos: this.setState.thing})
}

handleonClick = id => {
  const { todos } = this.state;
  this.setState({
    todos: todo.map( todo => {
  render () {
    const {todos} = this.state
    return (
      <div>
        <ul>
          TodoForm addItem{this.addItem}/>
          <List
          name="Finish this form"
          items={this.state.todos}
          todoClick={this.handleonClick}
          />
        </ul>
      </div>
    )
  }
  
}


export default App;
