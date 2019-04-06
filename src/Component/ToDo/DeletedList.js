import React from 'react';

import {MyContext} from '../../App';
import Task from './Task';


const DeletedList = (props) => {
    return (
        <>
        <br/><br/><br/><br/><br/>
        <h2>DeletedList</h2>
        <MyContext.Consumer>
        {
            value=>(
                value.state.data.filter(t=> t.deleted).map(d => <Task key={d.id} {...d}></Task>)
                // {/* {props.tasks.filter(t=> t.completed).map(d => <Task key={d.id} {...d}></Task>)} */}
            )
        }
        </MyContext.Consumer>
        </>
    )
}

export default DeletedList;
