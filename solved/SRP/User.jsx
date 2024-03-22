//Separated the concerns by moving the email sending functionality into a separate EmailService class
import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    render() {
        return <div>User Component</div>;
    }
}

class EmailService {
    sendEmail(user, message) {
        // Send email to user
    }
}

export { User, EmailService };
