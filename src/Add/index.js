import React from 'react'
import PropTypes from 'prop-types';

export default class Add extends React.Component {
    state = {
        text: ''
    };
    onAddBtnClick = () => {
        const {text} = this.state;
        if (!!text.trim()) {
            this.props.onAddTasks({
                id: +new Date(),
                text
            });
        }
        this.setState({text: ''})
    };
    onAddEnter = (e) => {
        if (e.keyCode === 13) {
            this.onAddBtnClick()
        }
    };
    handleTaskChange = (e) => {
        this.setState({text: e.currentTarget.value});
        e.currentTarget.value = '';
    };
    validate = () => {
        const {text} = this.state;
        return !!text.trim();
    };

    render() {
        const {text} = this.state;
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        className="check-all"
                        onChange={() => this.props.checked(this.state)}
                    />
                    <input
                        type="text"
                        onChange={this.handleTaskChange}
                        className="input-task"
                        placeholder="What needs to be done?"
                        value={text}
                        onKeyDown={(e) => this.onAddEnter(e)}
                    />
                    <button
                        className="add-task"
                        onClick={this.onAddBtnClick}
                        disabled={!this.validate()}>
                        Add task
                    </button>
                </label>
            </div>
        )
    }
}

Add.propTypes = {
    onAddTasks: PropTypes.func.isRequired,
};