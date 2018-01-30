import React from 'react'
//import ReactDom from 'react-dom'
import './index.css';
import TodoItems from './todoItem'
import TodoForm from './todoForm'
class TodoList extends React.Component{
    constructor(){
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.updateTask=this.updateTask.bind(this);
        this.addTask=this.addTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this)
        this.editTask=this.editTask.bind(this)
        this.state= {
            tasks: [{
                name: 'mehul',
                completed: false
            }, {
                name: 'harvey',
                completed: false

            }, {
                name: 'mike',
                completed: false
            }],
            currentTask:''
        }
    }
    updateTask(newValue){
        this.setState({
            currentTask:newValue.target.value

        })
    }

    editTask(index,newvalue){
        let tasks=this.state.tasks
        let task=tasks[index];
        task['name']=newvalue
        this.setState({
            tasks
        })}

    deleteTask(index){
        let tasks=this.state.tasks
        tasks.splice(index,1)
        this.setState({
            tasks
        })
    }
    addTask(evt){
        evt.preventDefault()
        let tasks=this.state.tasks
        let currenttask=this.state.currentTask
        tasks.push({
            name:currenttask,
            completed:false
        })

        this.setState({
            tasks
        })

    }

    changeStatus(index){

        var tasks=this.state.tasks;
        var task=tasks[index];
        task.completed=!task.completed;
        this.setState({
            tasks:tasks
        })
    }
    render(){
        return(
            <section>
                <TodoForm currentTask={this.state.currentTask}
                          updateTask={this.updateTask}
                          addTask={this.addTask}
                />
                <ul>
                    {this.state.tasks.map((task,index)=>{
                        return <TodoItems
                            index={index} key={index}
                            clickHandler={this.changeStatus}
                            editTask={this.editTask}
                            deleteTask={this.deleteTask}
                            detail={task} />
                    })}
                </ul>
            </section>
        )
    }

}
//ReactDom.render(<TodoList />
export default TodoList