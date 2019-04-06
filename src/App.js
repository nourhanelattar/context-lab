import React, { Component } from 'react';
import ToDoList from './Component/ToDo/List'
import ToDoForm from './Component/ToDo/ToDoForm'
import CompletedLists from './Component/ToDo/CompleteList'
import DeletedList from './Component/ToDo/DeletedList'

import './App.css';
export const MyContext = React.createContext();
class App extends Component {
  state = {
    data: []
  }
  addTodo = (todo) => {
    const { data } = this.state;
    this.setState({ data: data.concat(todo) })
  }
  completeTask = (id) => {
    let newData = this.state.data.slice();
    const target = newData.find(todo => todo.id === id);
    target.completed = !target.completed;
    this.setState({ data: newData})
    // console.log(this.state.data)
  }
  deleteTask = (id) =>{
    let newData = this.state.data.slice();
    const target = newData.find(todo => todo.id === id);
    target.deleted = !target.deleted;
    this.setState({ data: newData})
  }
  render() {
    // console.log(data);
    const value = {
      state: this.state,
      addTodo: this.addTodo,
      completeTask: this.completeTask,
      deleteTask:this.deleteTask
    }
    return (
      <MyContext.Provider value={value}>
      <>
        <ToDoForm></ToDoForm>
        <ToDoList></ToDoList>
        <CompletedLists></CompletedLists>
        <DeletedList></DeletedList>
        </>
      </MyContext.Provider>
    );
  }
}
export default App;
