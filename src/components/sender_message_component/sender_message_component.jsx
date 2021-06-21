import React, { Component } from "react";
function return_time(){
    let d = new Date();
    return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
}
export default class SenderMessageComponent extends Component {
    constructor(props,context) {
        super(props,context);
    }


    render() {
        return (
            <div className="media w-50 mb-3"><img
                src="https://lh3.googleusercontent.com/proxy/O-vB8TLZ-XHiOwXk9e8wHzzhcs_3OyMgKGci3i7uULw80DO1GW4cXBIMfRbudJlhu-IyBLHjGp4ieeCu9flWpkOZg4DYMvuCuD97R11wQx4sz_rGRujWZHA"
                alt="user" width="50" className="rounded-circle"/>
                <div className="media-body ml-3">
                    <div className="bg-light rounded py-2 px-3 mb-2">
                        <p className="text-small mb-0 text-muted">{this.props.message}</p>
                    </div>
                    <p className="small text-muted">{return_time()}</p>
                </div>
            </div>
        );
    }
}