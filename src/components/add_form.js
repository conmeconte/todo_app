import React, { Component } from 'react';

class AddForm extends Component {
    constructor(props){
        super(props);

        this.state= {
            title: '',
            details: ''
        };

        this.handleInputChange= this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this); 
    }

    handleInputChange(event){
        const{name, value}= event.target; 
        console.log(name, value); 
        this.setState({
            [name]: value
        });
    };

    addItem(event){
        event.preventDefault();
        console.log("Form values ", event);

        this.props.add(this.state); 

        this.setState({
            title: '',
            details: ''
        });
    }

    render(){
        const {title, details} = this.state; 
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.addItem}>
                    <div className="row">
                        <div className="input-field col s5">
                            <input name= 'title' value={title} type="text" onChange={this.handleInputChange} placeholder="Item Title"/>
                        </div>
                        <div className="input-field col s5">
                            <input name='details' value={details} type="text" onChange={this.handleInputChange} placeholder="Item Details"/>
                        </div>
                        <div className="col s2">
                            <button className="btn blue darken-2">
                                ADD
                            </button>
                        </div>
                    </div>

                </form>
            </div>

        )

    }
};

export default AddForm; 