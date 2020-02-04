import React from 'react'
import PropTypes from 'prop-types';
import './Tasks.css';
import CurrentTask from '../CurrentTask/CurrentTask';

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
            taskTemplate = null;
        }
        return taskTemplate
    };

    render() {
        const {data, all, act, comp, clear, arrLength, active, finished} = this.props;
        return (
            <ul className={`task-element ${arrLength.length ? '' : 'do-not-show'}`}>
                {this.renderTasks()}
                <div className='navigation'>
                    {data.length ? <p className='counter'>{active} items left</p> : null}
                    <span className='categories'>
                        <button onClick={() => all()} className='tabs'>All</button>
                        <button onClick={() => act()} className='tabs'>Active</button>
                        <button onClick={() => comp()} className='tabs'>Completed</button>
                        </span>
                    <button onClick={() => clear()} className={`delete-all ${!finished ? 'do-not-show' : ''}`}>Clear completed</button>
                </div>
            </ul>
        );
    };
}

Tasks.propTypes = {
    data: PropTypes.array.isRequired
};