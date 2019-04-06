import React, { Component } from 'react';

import { MyContext } from '../../App';
import uuidv4 from 'uuid/v4';

import { Form, FormControl, Button } from 'react-bootstrap';

class ToDoForm extends Component {
    state = {
        text: ''
    }

    handleSubmit = (addTodo) => (e) => {
        e.preventDefault();
        if (!this.state.text) return;
        const todo = {
            id: uuidv4(),
            title: this.state.text,
            completed: false,
            deleted: false
        }
        this.setState({ text: '' })
        addTodo(todo);


    }
    handleInputChange = (e) => {
        const inputValue = e.target.value;
        // console.log(inputValue)
        this.setState({ text: inputValue })
    }
    render() {
        // console.log(this.props.data)
        return (
            <MyContext.Consumer>
                {
                    value => (
                        <>
                            <Form onSubmit={this.handleSubmit(value.addTodo)}>
                                <FormControl style={{ width: '18rem', float: 'left' }} value={this.state.text} aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={this.handleInputChange} />
                                <Button style={{ background: '#FC6377', border: '0' }} type="submit">Submit</Button>
                            </Form>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}




export default ToDoForm;