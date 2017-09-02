import React from 'react';
import {Link} from 'react-router';
import ContainerClass from './ContainerClass';
import ContentA from './ContentA';
import util from '../../../util/util';
import DndInput from '../../common/DndInput';

class testbed extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            itemtype: util.objectModel.ITEMTYPE
        };
        this.updateFormState = this.updateFormState.bind(this);
    }

    updateFormState(event) {
        const field = event.target.name;
        const itemtype = this.state.itemtype;
        switch(event.target.type) {
            case "text":
                itemtype[field] = event.target.value;
                break;
            case "checkbox":
                itemtype[field] = !itemtype[field];
                break;
            default:
        }
        return this.setState({itemtype: itemtype});
    }
    render() {
        return (
            <div className="jumbotron">
                <h1>TESTBBED</h1>
                <form>
                    <DndInput 
                        name="isPicklist"
                        label="test bool"
                        dataType={util.dataTypes.bool.YES_NO}
                        onChange={this.updateFormState}/>
                    <DndInput 
                        name="name"
                        label="test string"
                        dataType={util.dataTypes.string.STRING}
                        onChange={this.updateFormState}/>
                </form>
            </div>
        );
    }
}

export default testbed;