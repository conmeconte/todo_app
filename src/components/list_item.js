import React from 'react';


export default props =>{
    return(
        <li className="collection-item">
            <div className="row">
                <div className="col s6">
                    {props.title}
                </div>
                <div className="col s6 right-align">
                    <button className="btn btn-floating red">Del</button>
                </div>
            </div>

        
        </li>
    )
}