import React from 'react';

import { MyContext } from '../../App';
import Task from './Task';


const CompletedLists = (props) => {
    return (
            <>
        <br/><br/><br/><br/><br/>
        <h2>Completed</h2>
        
        <MyContext.Consumer>
            {value=>
            value.state.data.filter(t=> t.completed && !t.deleted).map(d => <Task key={d.id} {...d}></Task>)
            
            }
            {/* {props.tasks.map(d => <Task key={d.id} {...d}></Task>)} */}
        </MyContext.Consumer>
        </>
    )
}

export default CompletedLists;
