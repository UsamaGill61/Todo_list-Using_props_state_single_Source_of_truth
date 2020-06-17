import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    todotext: "",
  };
  changetodotext = (event) => {
    this.setState({
      todotext: event.target.value,
    });
  };

  submithandler = (event) => {
    event.preventDefault();
    this.props.addtodotostate(this.state.todotext);
    this.setState({
      todotext: "",
    });
  };
  render() {
    return (
      <div>
    
        <div className="container-fluid pl-2">
          <div className="row">
            <div className="col-12">
              <form onSubmit={this.submithandler}>
                <div class="form-group">
                  <label for="email">Enter Todo Item:</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Enter Todo Item"
                    onChange={this.changetodotext}
                    value={this.state.todotext}
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Add Item
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo;
