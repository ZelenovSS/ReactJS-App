import React from 'react';
import Add from './Add/Add';
import './App.css';
import Tasks from './Tasks/Tasks';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            currentTasks: [],
            allCheck: false,
            currentTab: 1
        };
    }

    onCheckAllClick = () => {
        const newTasks = this.state.tasks.map(item => {
            item.completed = !this.state.allCheck;
            return item;
        });
        this.setState({
            allCheck: !this.state.allCheck,
            tasks: newTasks
        });
    };
    onAllTasksClick = () => {
        this.setState({
            currentTasks: this.state.tasks,
            currentTab: 1
        });
    };
    onActiveTasksClick = () => {
        this.setState({
            currentTasks: this.state.tasks.filter(item => {
                return !item.completed
            }),
            currentTab: 2
        });
    };
    onCompletedTasksClick = () => {
        this.setState({
            currentTasks: this.state.tasks.filter(item => {
                return item.completed
            }),
            currentTab: 3
        });
    };
    onClearCompletedClick = () => {
        let activeTasks = this.state.tasks.filter(item => !item.completed);
        this.setState({
            tasks: activeTasks,
            currentTasks: activeTasks,
            currentTab: 1
        });
    };
    onAddTasksClick = (data) => {
        const nextTask = [data, ...this.state.tasks];
        this.setState({tasks: nextTask, allCheck: false, currentTasks: nextTask});
    };
    onDelBtnClick = (e) => {
        let currentTasks = this.state.tasks.filter(item => item.id !== e.id);
        let requestedTasks = this.state.currentTasks.filter(item => item.id !== e.id);
        this.setState({
            tasks: currentTasks,
            currentTasks: requestedTasks,
            allCheck: this.checkStatus(currentTasks, currentTasks),
        });
        if (this.state.tasks.length - 1 === 0) {
            this.setState({
                allCheck: false
            })
        }
    };
    onClickCheckbox = (e) => {
        const {tasks} = this.state;
        const newTasks = tasks.map(item => {
            if (item.id.toString() === e.target.id) {
                item.completed = !item.completed;
            }
            return item;
        });
        this.setState({
            allCheck: this.checkStatus(tasks, newTasks),
            tasks: newTasks
        });
    };
    checkStatus = (next, current) => {
        return next.length === current.filter(task => task.completed).length
    };
    _checkStatus = (current) => {
        return current.length !== 0 && current.length === current.filter(task => task.completed).length
    };

    render() {
        const current = this.state.currentTab;
        const active = this.state.tasks.filter(item => !item.completed).length;
        const finished = this.state.tasks.filter(item => item.completed).length;
        return (
            <div className='container'>
                <h1 className='logo'>todos</h1>
                <div className='content'>
                    <Add
                        allCheck={this._checkStatus(this.state.currentTasks)}
                        onAddTasks={this.onAddTasksClick}
                        checkAll={this.onCheckAllClick}/>
                    <Tasks
                        current={current}
                        active={active}
                        finished={finished}
                        arrLength={this.state.tasks.length}
                        del={this.onDelBtnClick}
                        data={this.state.currentTasks}
                        onClickCheckbox={this.onClickCheckbox}
                        all={this.onAllTasksClick}
                        act={this.onActiveTasksClick}
                        comp={this.onCompletedTasksClick}
                        clear={this.onClearCompletedClick}
                    />

                </div>
            </div>
        )
    }
}

export default App;
