import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Collaps from './collaps'
import {Route, BrowserRouter, NavLink, Prompt, Switch} from 'react-router-dom'
import Modal from 'react-modal'
import Popapp from'./popup'
import TodoItems from './todoItem'
import TodoForm from './todoForm'

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.state = {
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
            currentTask: ''
        }
    }

    updateTask(newValue) {
        this.setState({
            currentTask: newValue.target.value

        })
    }

    editTask(index, newvalue) {
        let tasks = this.state.tasks
        let task = tasks[index];
        task['name'] = newvalue
        this.setState({
            tasks
        })
    }

    deleteTask(index) {
        let tasks = this.state.tasks
        tasks.splice(index, 1)
        this.setState({
            tasks
        })
    }

    addTask(evt) {
        evt.preventDefault()
        let tasks = this.state.tasks
        let currenttask = this.state.currentTask
        tasks.push({
            name: currenttask,
            completed: false
        })
        this.setState({
            tasks
        })
    }

    changeStatus(index) {

        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <section>
                <TodoForm currentTask={this.state.currentTask}
                          updateTask={this.updateTask}
                          addTask={this.addTask}
                />
                <ul className="ul">
                    {this.state.tasks.map((task, index) => {
                        return <TodoItems
                            index={index} key={index}
                            clickHandler={this.changeStatus}
                            editTask={this.editTask}
                            deleteTask={this.deleteTask}
                            detail={task}/>
                    })}
                </ul>
            </section>
        )
    }

}

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            isChanged: false
        }
    }

    render() {
        return (
            <div>
                <Prompt when={this.state.isChanged} message="are you sure?"/>
                <input className="pinput" onChange={() => {
                    this.setState({
                        isChanged: true
                    })
                }} type="text"/></div>
        )
    }
}


class Modall extends React.Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        }
    }

    toggleModal = () => {
        this.setState({
            isActive: !this.state.isActive
        })

    }
    // componentWillMount = () => {
    //
    //     Modal.setAppElement('body');
    // }
    render() {
        return (
            <div>
                <button onClick={this.toggleModal}>Modal</button>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} style={{
                    Overlay: {
                        height: '200px',
                        position: 'fixed',
                        top: '25px',
                        left: '150px',
                        right: '100px',
                        bottom: '20px',
                        backgroundColor: 'cadetblue'
                    },
                    content: {
                        top: '200px',
                        left: '500px',
                        right: '100px',
                        bottom: '100px',
                        border: 'solid brown',
                        background: 'cadetblue',
                        overflow: 'auto',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '100px'
                    }
                }}>Hello From Modal
                    <button onClick={this.toggleModal}> Close Modal</button>
                </Modal>
            </div>
        )
    }
}

const music = () => (

    <div className="img">
        <h2>Welcome to music</h2>
        <img src="http://cdn1.theodysseyonline.com/files/2016/01/04/6358748036944186621892622963_music.jpg" height="300"
             width="500" alt=""/>
    </div>


)
const cricket = () => (
    <div className="img">
        <h2>Welcome to cricket</h2>
        <img src="http://www.indiancricketstars.com/wp-content/uploads/2015/03/gully.jpg" height="300" width="500"
             alt=""/>
    </div>
)
const sport = () => (
    <div className="img">
        <h2>Welcome to Sport</h2>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/400px-Youth-soccer-indiana.jpg"
            height="300" width="500" alt=""/>
    </div>
)
const snooker = () => (
    <div className="img">
        <h2>Welcome to Snooker</h2>
        <img src="https://www.broomhillmanor.co.uk/wp-content/uploads/2014/05/Child-Facilities-Snooker1.jpg"
             height="300" width="500" alt=""/>
    </div>
)
const collapse = () => (
    <div>
        <Popapp/>
        <Collaps/>
    </div>
)
const bootstrap = () => (

        <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
        </select>
);

const gallary = () => (
    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <div className="thumbnail">
                    <a href="http://cdn1.theodysseyonline.com/files/2016/01/04/6358748036944186621892622963_music.jpg">
                        <img
                            src="http://cdn1.theodysseyonline.com/files/2016/01/04/6358748036944186621892622963_music.jpg"
                            style={{width: 300}} alt=""/>
                    </a>
                    <div className="caption"><p>this is the image of music..</p></div>

                </div>
            </div>

            <div className="col-sm-4">
                <div className="thumbnail">
                    <a href="http://www.indiancricketstars.com/wp-content/uploads/2015/03/gully.jpg">
                        <img src="http://www.indiancricketstars.com/wp-content/uploads/2015/03/gully.jpg"
                             style={{width: 300}} alt=""/>
                    </a>
                    <div className="caption"><p>this is the image of cricket</p></div>

                </div>
            </div>
            <div className="col-sm-4">
                <div className="thumbnail">
                    <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/400px-Youth-soccer-indiana.jpg">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/400px-Youth-soccer-indiana.jpg"
                            style={{width: 300}} alt=""/>
                    </a>
                    <div className="caption"><p>this is the image of football..</p></div>

                </div>
            </div>


            <div className="col-sm-4">
                <div className="thumbnail">
                    <a href="https://www.broomhillmanor.co.uk/wp-content/uploads/2014/05/Child-Facilities-Snooker1.jpg">
                        <img
                            src="https://www.broomhillmanor.co.uk/wp-content/uploads/2014/05/Child-Facilities-Snooker1.jpg"
                            style={{width: 300}} alt=""/>
                    </a>
                    <div className="caption"><p>this is the image of snooker..</p></div>
                </div>
            </div>
        </div>
    </div>

)


const notfound = () => (
    <h2>Not Fond</h2>
);
const Links = () => (
    <div className="list-group">
        <NavLink className="list-group-item" exact activeClassName="active" to="/music">Music</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/sport">Football</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/cricket">Cricket</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/snooker">Snooker</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/Form">form(Prompt)</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/Modal">Modal</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/Todoapp">TodoApp</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/gallary">Gallary</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/bootstrap">BootStrap</NavLink>
        <NavLink className="list-group-item" activeClassName="active" to="/collapse">Collapse</NavLink>
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <section className="sec">
            <div className="newdiv">
                <h2>
                    < div title="this is awesome app">Welcome To The App</div>
                </h2>
            </div>
            <div className="imgld">

                <img title="batman" className="imgl" src="http://www.vectortemplates.com/raster/batman-logo.gif"
                     height="150" width="200" alt=""/>
                <img title="superman" className="imgl"
                     src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png"
                     height="150" width="200" alt=""/>
                <img title="thor" className="imgl"
                     src="http://images6.fanpop.com/image/photos/39100000/-thor-and-his-mighty-hammer-indiegerman-39139217-900-900.jpg"
                     height="150" width="200" alt=""/>
                <img title="captain America" className="imgl"
                     src="https://images-na.ssl-images-amazon.com/images/I/71vntClRfjL._SL1500_.jpg" height="150"
                     width="200" alt=""/>
                <img title="Iron man" className="imgl"
                     src="https://vignette.wikia.nocookie.net/dbxfanon/images/6/67/Iron_Man.png/revision/latest?cb=20160403042153"
                     height="150" width="200" alt=""/>
            </div>


            <div className="row">
                <section className="row-sm-3">

                </section>
                <section className=" col-sm-3 "><Links/></section>
                <section className="col-sm-9">
                    <Switch>
                        <Route path="/music" component={music}/>
                        <Route path="/sport" component={sport}/>
                        <Route path="/cricket" component={cricket}/>
                        <Route path="/snooker" component={snooker}/>
                        <Route path="/form" component={Form}/>
                        <Route path="/modal" component={Modall}/>
                        <Route path="/todoapp" component={TodoList}/>
                        <Route path="/gallary" component={gallary}/>
                        <Route path="/bootstrap" component={bootstrap}/>
                        <Route path="/collapse" component={collapse}/>

                        <Route component={notfound}/>

                    </Switch>
                </section>

                <div className="newdiv2"><h2>CopyRight@2018</h2></div>
            </div>
        </section>

    </BrowserRouter>
    , document.getElementById('root'))