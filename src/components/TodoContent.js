import React from 'react';
import './index.css';

const TodoContent = () => {
    return (
            <div className="listBox">
                <ul>
                    <li>what todo 1</li>
                    <li>this is tutorial</li>
                    <li>examples</li>
                    <li className="active">hello todo list</li>
                </ul>
            </div>
    );
};

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListItem: [
                {title: "what todo 1", complete: false},
                {title: "this is tutorial", complete: false},
                {title: "examples", complete: false},
                {title: "hello todo list", complete: true}
            ]
        };
    }
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <ul>
                    {this.state.ListItem.map((contact, i) => {
                        return (<TodoListView name={contact.name}
                                             phone={contact.phone}
                                             key={i}/>);
                    })}
                </ul>
            </div>
        );
    }
}

class TodoListView extends React.Component {
    render() {
        return(
            <li>{this.props.name} {this.props.phone}</li>
        );
    }
}

export default TodoContent;