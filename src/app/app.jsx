import React from 'react';
import ReactDOM from 'react-dom';

import socketIOClient from "socket.io-client";
import SenderMessageComponent from "../components/sender_message_component/sender_message_component"
import RecieverMessageComponent from "../components/reciever_message_component/reciever_message_component"
import {TypingAreaComponent} from '../components/typing-area/typing-area';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
        this.type = 2;
        this.renderMessages = this.renderMessages.bind(this);
    }


    renderMessages(){
        let result = []
        this.state.messages.forEach(message=>{
            if(message.text) {
            if(message.type === 1)
                result.push(<RecieverMessageComponent message={message.text} date={message.date} />);
            else
                result.push(<SenderMessageComponent message={message.text} date={message.date} />);
        }})
        return result;
    }

    componentDidMount() {
        const socket = socketIOClient("http://localhost:8000");
        
        const chat = document.getElementsByClassName('chat-box')[0];
        const form = document.querySelector('form');
        const message = form.message;
        const send = form.send;

        form.addEventListener('submit',e=>{
            e.preventDefault();
            this.type=1;

            socket.emit('sendMessage',{
                text:message.value,
            })

            message.value="";
            message.focus();
        })

        socket.on('showMessage', message=>{
            this.state.messages.push({text:message.text,type:this.type,date:message.date});
            this.type=2;

            ReactDOM.render(<App/>, document.getElementById('root'));
            chat.scrollTop = chat.scrollHeight;
        })



    }

    render() {
        return (
            <div className="body d-flex justify-content-center align-items-center">
                <div className="col-8 px-0">
                    <div className="px-4 py-5 chat-box bg-white">
                        {this.renderMessages()}
                    </div>
                    <TypingAreaComponent/>
                </div>
            </div>
        );


    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
