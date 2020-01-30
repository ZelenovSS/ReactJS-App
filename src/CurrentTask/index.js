import React from 'react'
import PropTypes from 'prop-types';

export default class CurrentTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false,
            text: this.props.data ? this.props.data.text : '',
            id: this.props.data ? this.props.data.id : ''
        };
    }

    onCompletedTaskClick = () => {
        this.setState({completed: !this.state.completed})
    };

    render() {
        const {text} = this.props.data || '';
        return (
            (this.props.data && this.props.data.text) ?
                <div className="current-task">
                    <input
                        type="checkbox"
                        onChange={this.onCompletedTaskClick}
                        className="task-check"/>
                    <span
                        className="task-text"
                    >{text}</span>
                    <button
                        className="task-delete"
                        onClick={() => this.props.delete(this.state)}
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