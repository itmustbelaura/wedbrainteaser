import React from 'react';


class TodoForm extends React.Component
state = { name: ""}

handleChange = (e) => {
    this.setState({ name:)

}

handleSubmit = (e) => { 
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({ name: "" })

}

render () {
    return(
        onSubmit={this.handleSubmit}
        
        <input
        required
        placeholder="write todo here"
        value= {this.state.name}
    )
}

export default TodoForm;