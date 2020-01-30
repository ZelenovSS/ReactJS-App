import React from 'react'
import PropTypes from 'prop-types';
import CurrentTask from "../CurrentTask";

export default class Tasks extends React.Component {
    renderTasks = () => {
        const {data, del} = this.props;
        let taskTemplate = null;
        if (data.length) {
            taskTemplate = data.map((item) => {
                return <CurrentTask
                    key={item.id}
                    data={item}
                    delete={del}/>
            });
        } else {
            taskTemplate = <p>No Tasks</p>
        }
        return taskTemplate
    };

    render() {
        const {data} = this.props;
        return (
            <div className="task-element">
                {this.renderTasks()}
                {data.length ? <p>Tasks left: {data.length}</p> : null}
            </div>
        );
    };

}

Tasks.propTypes = {
    data: PropTypes.array.isRequired
};