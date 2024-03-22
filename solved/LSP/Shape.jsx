//Introduced an abstract Shape component and implemented Rectangle and Square components separately, ensuring that the behavior of inherited methods remains consistent.
import React, { Component } from 'react';

class Shape extends Component {
    render() {
        return null; // Abstract component, shouldn't render anything directly
    }

    area() {
        return 0;
    }
}

class Rectangle extends Shape {
    render() {
        return <div>Rectangle Component</div>;
    }

    area() {
        return this.props.width * this.props.height;
    }
}

class Square extends Shape {
    render() {
        return <div>Square Component</div>;
    }

    area() {
        return this.props.side * this.props.side;
    }
}

export { Rectangle, Square };
