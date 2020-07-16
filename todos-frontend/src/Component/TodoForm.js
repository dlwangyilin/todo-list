import React, {Component} from "react";
import classes from './TodoForm.module.css';

class TodoForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };

    handleSubmit = () => {
        this.props.addTodo(this.state.inputValue);
    }

    render() {
        return (
            <section className={classes.form}>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    className={classes.todoInput}/>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </section>
        );
    }
}
export default TodoForm;