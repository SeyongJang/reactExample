import React from 'react';
import './index.css';
import InsertBox from './InsertBox'
import TodoContent from './TodoContent'

const Main = () => {
    return (
        <div>
            <div className="main">
                <div className="todolist">
                    <div className="todo_title">todo list</div>
                    <InsertBox/>
                    <TodoContent/>
                </div>
            </div>
        </div>
    );
};

export default Main;