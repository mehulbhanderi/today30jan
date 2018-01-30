import React from 'react'
import PropType from 'prop-type'

class TodoItems extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEditing:false
        }
        this.renderForm=this.renderForm.bind(this)
        this.renderitem=this.renderitem.bind(this)
        this.toggleState=this.toggleState.bind(this)
        this.updateItem=this.updateItem.bind(this)


    }
    updateItem(evt){
        evt.preventDefault()

        this.props.editTask(this.props.index,this.input.value)
        this.toggleState()
    }
    toggleState(){

        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    renderForm(){
        return(

            <form  onSubmit={this.updateItem}>
                <input type="text" ref={(value)=>{
                    this.input=value
                }} defaultValue={this.props.detail.name}/>
                <button className="btn" type="submit">Edit</button>
            </form>
        )
    }
    renderitem()
    {
        return(
            <li  onClick={() => {
                this.props.clickHandler(this.props.index);
            }} className={this.props.detail.completed ? 'completed' : ''}>
                {this.props.detail.name}
                <button className="btn" onClick={(evt) => {
                    evt.stopPropagation()
                    this.props.deleteTask(this.props.index)
                }}>Delete </button>
                <button className="btn" onClick={(evt) => {
                    evt.stopPropagation()
                    this.toggleState()
                }}>Edit</button>
            </li>
        )
    }
    render() {
        const {isEditing}=this.state
        return (
            <section>{
                isEditing ? this.renderForm() : this.renderitem()
            }
            </section>
        )
    }
}

TodoItems.propType={
    index:PropType.number,
    clickHandler:PropType.func,
    editTask:PropType.func,
    deleteTask:PropType.func,
    detail:PropType.object
}
export default TodoItems;