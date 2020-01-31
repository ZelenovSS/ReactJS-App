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
                <div className="current-task">
                    <input
                        id={this.props.data.id}
                        checked={this.props.data.completed}
                        value={this.props.data.completed}
                        type="checkbox"
                        onChange={this.onCompletedTaskClick}
                        className="task-check"/>
                    <span
                        className="task-text"
                    >{this.props.data.text}</span>
                    <button
                        className="task-delete"
                        onClick={this.deleteTask}
                    >Del
                    </button>
                </div>
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