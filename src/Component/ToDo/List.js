import React from 'react';

import { MyContext } from '../../App';
import Task from './Task';

const ToDoList = (props) => {
    // console.log(props.tasks)
    
    return (
        <MyContext.Consumer>

            {
                value => (
                    value.state.data.filter(t=> !(t.completed ||t.deleted)).map(d => <Task key={d.id} {...d}></Task>)
            )
                }
                
                {/* {props.tasks.filter(t=> t.completed).map(d => <Task key={d.id} {...d}></Task>)} */}
        </MyContext.Consumer>
    )
}

export default ToDoList;
