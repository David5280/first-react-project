import React, { Component } from 'react'
import propTypes from 'prop-types';


export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }


  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
          {' '}
          { title }
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired
}

const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  border: 'none', 
  padding: '5px 7px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}



export default TodoItem
