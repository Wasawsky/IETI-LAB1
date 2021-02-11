import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        if (this.props.todoList === undefined){
            return <h1></h1>
        }else{
            const theList = this.props.todoList.map((value , i) => 
            <li key={"key"+i}>
                <Todo text={value.text} priority={value.priority} dueDate={value.dueDate}/>
            </li>
            );
            return (  
                <ul>{theList}</ul>
            );
        }
        
    }
};
