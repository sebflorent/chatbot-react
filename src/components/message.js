import React from 'react';

class Message extends React.Component {
    render() {
        return (
         <p className="user-message">
             {this.props.pseudo} : message
         </p>
        )
    }
}

export default Message;