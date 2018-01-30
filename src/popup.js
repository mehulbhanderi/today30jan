import React from 'react'

class  Popup extends React.Component{
    render(){
    return(
    <div className="popupp">
        <div className="popupinner">
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>close</button>
        </div>
    </div>);
}}

class Popapp extends React.Component{
    constructor() {
        super();
        this.state = {
            showpopup: false
        };
    }
        togglepopup =() => {

            this.setState({
                showpopup: !this.state.showpopup
            });
        }
        render() {
            return (
                <div>
                    <h6>This is main page</h6>
                    <button onclick={this.togglepopup.bind(this)}>popup</button>

            {this.state.showpopup? <Popup text="hello this is popup"  closePopup={this.togglepopup.bind(this)}/>:null}
                </div>
            );
        }

};
export default Popapp

