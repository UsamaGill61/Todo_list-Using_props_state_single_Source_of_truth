import React, { Component } from "react";

class Todoitem extends Component {
  state = {
    isediting: false,
  };
  toggleediting = () => {
    this.setState({
      isediting: !this.state.isediting,
    });
  };
  clickhandler = () => {
    this.props.Togglecomplete(this.props.index);
  };
  Deletetodo = () => {
    this.props.DeleteTodofromlist(this.props.index);
  };
  edittodosubmithandler = (event) => {
    event.preventDefault();
    this.props.Edittodofromstate(this.props.index, this.newtext.value);
    this.toggleediting();
  };
  render() {
    const { todo } = this.props;
    if (this.state.isediting) {
      return (
        <li className="text-center">
          <form onSubmit={this.edittodosubmithandler}>
            <input
              type="text"
              defaultValue={todo.text}
              ref={(node) => {
                this.newtext = node;
              }}
            ></input>
            <button className="btn btn-primary" type="submit">save</button>
            <button  className="btn btn-secondary" onClick={this.toggleediting}>cancel</button>
          </form>
        </li>
      );
    }
    return (
      <div>
       

        <div className="container-fluid pt-5">
          <div className="row pt-1">
            <div className="col-4 col-xl-1 col-lg-1 col-md-1 mx-auto my-auto">{this.props.index}</div>
            <div className="col-4 col-xl-2 col-lg-2 col-md-2 mx-auto my-auto">
              <h6>Mark As Checked item</h6>
            </div>
            <div className="col-1">
           
              <input
                onClick={this.clickhandler}
                class="form-check-input"
                type="checkbox"
              />
            </div>
            <div className="col-4 col-xl-4 col-lg-4 col-md-4 mx-auto my-auto">
              <h6 className={todo.completed ? "completed" : ""}>{todo.text}</h6>
            </div>
            <div className="col-4 col-xl-2 col-lg-2 col-md-2 mx-auto my-auto"><button  className="btn btn-secondary" onClick={this.toggleediting}>Edit Item</button></div>
            <div className="col-4 col-xl-2 col-lg-2 col-md-2 mx-auto my-auto"> <button className="btn btn-danger" onClick={this.Deletetodo}>Delete Item</button></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todoitem;
