import React, { Component } from 'react';
import ListItem from './list_item';

class TodoList extends Component {

    
    render(){

        const listItem= this.props.list.map((item, index)=>{
            return <ListItem key={index} title={item.title} delete={()=>{this.props.delete(index)}}/>
        });
        
        return(
            <div>
                <ul className="collection">
                    {listItem}
                </ul>
            </div>
        )
    }
}

export default TodoList;