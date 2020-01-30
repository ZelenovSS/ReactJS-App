import React from 'react';
import Add from "./Add";
import './App.css';
import CurrentTask from "./CurrentTask";
import Tasks from "./Tasks";

class App extends React.Component {
    state = {
        tasks: [],
    };
    handleAddTasks = (data) => {
        const nextTask = [data, ...this.state.tasks];
        this.setState({tasks: nextTask});
    };
    onCheckAllClick = () => {
        console.log(this.state.tasks)
    };
    onDelBtnClick = (e) => {
        let currentTasks = this.state.tasks.filter(item => {
            return item.id !== e.id
        });
        this.setState({
            tasks: currentTasks
        })
    };

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <Add
                    onAddTasks={this.handleAddTasks}/>
                <CurrentTask
                    tasks={this.state.tasks}
                    del={this.onDelBtnClick}/>
                <Tasks
                    del={this.onDelBtnClick}
                    checkAll={this.onCheckAllClick}
                    data={this.state.tasks}/>
            </div>
        )
    }
}

export default App;
