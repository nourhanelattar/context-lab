import React, { Component } from 'react';

import { MyContext } from '../../App';
import { Card, Button } from 'react-bootstrap';

class Task extends Component {
    completedAction = (completeTask) => () => {
        // debugger
        console.log(this.props.id)
        completeTask(this.props.id)
        // this.props.setComplete(this.props.id);
    }
    deleteAction = (deleteTask) => () => {

        deleteTask(this.props.id)
    }
    render() {
        // console.log(this.props)

        console.log(this.props)
        return (
            <MyContext.Consumer>
                {
                    value =>
                        <Card style={{ width: '50rem', height: '5rem', margin: '20px' }}>
                            <Card.Body >
                                <Card.Title style={{ float: 'left' }}>{this.props.title}</Card.Title>
                                <div style={{ position: 'absolute', right: '0', paddingRight: '20px' }}>
                                    {!this.props.completed && !this.props.deleted ?
                                        <Button onClick={this.completedAction(value.completeTask)} style={{ background: '#FC6377', border: '0', marginRight: '2px' }}>Complete</Button>
                                        : this.props.completed && !this.props.deleted ? <Button onClick={this.completedAction(value.completeTask)} style={{ background: '#FC6377', border: '0', marginRight: '2px' }}>UnComplete</Button>
                                            : ''}
                                    <Button onClick={this.deleteAction(value.deleteTask)} style={{ background: '#FC6377', border: '0' }}>Delete</Button>
                                </div>
                            </Card.Body>
                        </Card>
                }
            </MyContext.Consumer>
        )
    }
}

export default Task;