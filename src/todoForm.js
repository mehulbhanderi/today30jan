import React from 'react'


const TodoForm =(props)=>{
    return(
        <form className="formm" onSubmit={props.addTask}>
            <input className="input" type="text"
                   value={props.currentTask}
                   onChange={props.updateTask}/>
            <button className="fbtn" type="submit">Submit</button>
        </form>
    )
}
export default TodoForm;