// The User component is responsible for managing user data, fetching data from the database, and sending emails, violating SRP.

import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    componentDidMount() {
        // Fetch user details from database
    }

    sendEmail(message) {
        // Send email to user
    }

    render() {
        return <div>User Component</div>;
    }
}

export default User;
