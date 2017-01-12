import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.jsx'

import Task from './Task.jsx';

// App component - represents the whole app
class App extends Component {
    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    handleSubmit(event) {
        event.preventDefault();

        //Find text via the React reference
        let textInput = ReactDOM.findDOMNode(this.refs.textInput);
        const text = textInput.value.trim();

        Tasks.insert({
            text,
            createdAt: new Date()
        });

        //Clear form
        textInput.value = '';
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                    <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                        <input type="text"
                               ref="textInput"
                               placeholder="Type to add new tasks"/>
                    </form>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch()
    };
}, App);