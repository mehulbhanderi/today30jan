import React from 'react'
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import './index.css'

class Collaps extends React.Component {
    constructor(props) {
        super();
        this.state = {collapse1: false}, {collapse2: false};

        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {

        this.setState({collapse1: !this.state.collapse1});
    }
    toggle2 = () => {
        this.setState({collapse2: !this.state.collapse2});
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Toggle</Button>
                <Button onClick={this.toggle2}>Toggle 2</Button>
                <Collapse isOpen={this.state.collapse1}>
                    <Card className="cardb">
                        <CardBody className="cardb">
                            this is testing of collapse
                        </CardBody>
                    </Card>
                </Collapse>


                <Collapse isOpen={this.state.collapse2}>
                    <Card className="cardb">
                        <CardBody className="cardb">
                            this is second collapse
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}

export default Collaps