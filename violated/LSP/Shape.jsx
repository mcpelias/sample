//The Square component violates LSP as it alters the behavior of methods inherited from the Rectangle component.
import React, { Component } from 'react';

class Rectangle extends Component {
    render() {
        return <div>Rectangle Component</div>;
    }
}

class Square extends Rectangle {
    render() {
        return <div>Square Component</div>;
    }
}
