import React from 'react'
import PropTypes from 'prop-types';
import './Tasks.css';
import CurrentTask from "../CurrentTask/CurrentTask";

export default class Tasks extends React.Component {

    renderTasks = () => {
        const {data, del, onClickCheckbox} = this.props;
        let taskTemplate = null;
        if (data.length) {
            taskTemplate = data.map((item) => {
                return <CurrentTask
                    completed={item.completed}
                    key={item.id}
                    data={item}
                    delete={del}
                    onClickCheckbox={onClickCheckbox}
                />
            });
        } else {
            taskTemplate = <p>No Tasks</p>
        }
        return taskTemplate
    };

    render() {
        const {data, all, act, comp, clear} = this.props;
        return (
            <div className="task-element">
                {this.renderTasks()}
                <p/>
                {data.length ? <p>Tasks left: {data.length}</p> : null}
                <button onClick={() => all()} className='tabs'>All</button>
                <button onClick={() => act()} className='tabs'>Active</button>
                <button onClick={() => comp()} className='tabs'>Completed</button>
                <button onClick={() => clear()} className='delete-all'>Clear completed</button>
            </div>
        );
    };
}

Tasks.propTypes = {
    data: PropTypes.array.isRequired
};