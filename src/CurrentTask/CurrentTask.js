import React from 'react'
import PropTypes from 'prop-types';
import './CurrentTask.css';

export default class CurrentTask extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this)
    }

    onCompletedTaskClick = (e) => {
        this.props.onClickCheckbox(e)
    };

    deleteTask() {
        this.props.delete(this.props.data)
    }

    render() {
        return (
            (this.props.data && this.props.data.text) ?
                <li className={`current-task `}>
                    <label>
                        <input
                            id={this.props.data.id}
                            checked={this.props.data.completed}
                            type='checkbox'
                            onChange={this.onCompletedTaskClick}
                            className='task-check'/>
                        <span className='fake'/>
                        <span
                            className={`task-text ${this.props.data.completed ? 'task-complete' : ''}`}
                        >{this.props.data.text}</span>
                    </label>
                    <button
                        className={`task-delete`}
                        onClick={this.deleteTask}
                    >×
                    </button>
                </li>
                : null
        )
    }
}
CurrentTask.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })
};