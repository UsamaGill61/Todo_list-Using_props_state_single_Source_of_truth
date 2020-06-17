import React, { Component } from "react";
import AddTodo from "./component/AddTodo";
import "./App.css";
import Todoitem from "./component/Todoitem";

export class App extends Component {
  state = {
    todos: [
     
    ]
  };
  addtodotostate = (text) => {
    const newtodos = this.state.todos.concat({
      text: text,
    });
    this.setState({
      todos: newtodos,
    });
  };

  Togglecomplete = (index) => {
    const newtodo = this.state.todos.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState({
      todos: newtodo,
    });
  };
  DeleteTodofromlist = (index) => {
    const newtodos = this.state.todos.filter((todo, i) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    this.setState({
      todos: newtodos,
    });
  };

  Edittodofromstate =(index,newtext)=>{
const newtodos=this.state.todos.map((todo,i)=>{
   if(index===i){
     return{
       ...todo,
       text:newtext
     };
   }
   return todo;
});
this.setState({
  todos:newtodos
})

  }

  render() {
    return (
      <div className="App">
        <AddTodo addtodotostate={this.addtodotostate} />
        {this.state.todos.map((todo, index) => {
          return (
            <Todoitem
              Togglecomplete={this.Togglecomplete}
              DeleteTodofromlist={this.DeleteTodofromlist}
              Edittodofromstate={this.Edittodofromstate}
              todo={todo}
              index={index}
              key={index}
            />
          );
        })}
        
      </div>
    );
  }
}

export default App;
