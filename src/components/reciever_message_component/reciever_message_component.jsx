import React, { Component } from "react";

function return_time(){
    let d = new Date();
    return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}
export default class RecieverMessageComponent extends Component {
    constructor(props) {
    super(props);
    }

    render(){
        return (
            <div className="media w-50 ml-auto mb-3">
                <div className="media-body">
                    <div className="bg-primary rounded py-2 px-3 mb-2">
                        <p className="text-small mb-0 text-white ">{this.props.message}</p>
                    </div>
                    <p className="small text-muted">{return_time()}</p>
                </div>
            </div>
        );
    }
}